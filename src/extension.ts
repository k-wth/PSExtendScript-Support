import * as vscode from 'vscode';
import * as psexEnums from "./ps.enums";
import * as psexMethods from "./ps.methods";
import * as psexProperties from "./ps.propaties";

function isPsexScript(line:string) : boolean {
	return line.indexOf("#target photoshop;") != -1;	
}
function getJoinString(text:string|string[],separator:string) {
	if(Array.isArray(text)) return text.join(separator);
	else return text;	
}

export function activate(context: vscode.ExtensionContext) {
	const jsx_selector : vscode.DocumentSelector = { scheme: 'file', language: 'jsx' };
	// app定義
	const app_provider = vscode.languages.registerCompletionItemProvider(
		jsx_selector, 
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position)
			{
				if(!isPsexScript(document.lineAt(0).text)) return;
				let completions = [];
				const completion = new vscode.CompletionItem("app", vscode.CompletionItemKind.Variable);
				completion.detail = "(alias) Application";
				completion.documentation = new vscode.MarkdownString("The Adobe Adobe Photoshop CC application object, which is the root of the object model and provides access to all other objects. ");
				completions.push(completion);
				return completions;
			}
		}
	);
	context.subscriptions.push(app_provider);

	// メソッド定義
	psexMethods
		.get()
		.forEach(o => {
		var prefix = o.prefix;
		var methods = o.methods;

		const methods_provider = vscode.languages.registerCompletionItemProvider(
			jsx_selector, 
			{
				provideCompletionItems(document: vscode.TextDocument, position: vscode.Position)
				{
					if(!isPsexScript(document.lineAt(0).text)) return;
	
					let completions : Array<vscode.CompletionItem> = [];
					let linePrefix = document.lineAt(position).text.substr(0, position.character);
					var regStr = "";
					if(Array.isArray(prefix))
					{
						prefix.forEach(p => {
							if(regStr != "") regStr += "|";
							regStr += `${p}.$`;
						});
					}
					else regStr = `${prefix}.$`;
					if (new RegExp(regStr).test(linePrefix))
					{
						methods.forEach(e => {
							var detail = e.name.replace(/{|}/g,"");
							var name = detail.replace(/\((.*)\)/,"");
							const completion = new vscode.CompletionItem
							(
								name, 
								vscode.CompletionItemKind.Method
							);
							completion.detail = `(method) ${detail}`;
							if(e.params != null)
							{
								var method_params = e.name.replace(/(.*)\(| |\[|\]|\)/g,"").split(",");
								for(var i=0;i<method_params.length;i++)
								{
									if(e.params[i] == undefined || e.params[i] == null) break;
									if(completion.detail != "") completion.detail += "\n";
									completion.detail += `- ${method_params[i]}: ${e.params[i]}`
								}
							}
							completion.filterText = `${prefix}.${name}`;
							// insertText ---------
							var insert  = e.name;
							insert = insert.replace(/\[(.*)\]/,""); // optionは一度抜いておく
							var params = insert.match(/[\(| |\,]([^\,| |\)]+)[\)| |\,]/g);
							if(params != null && params != undefined)
							{
								for (let i = 0; i < params.length; i++) {
									const p = params[i].replace(/\(|\)|\,| /g,"");
									insert = insert.replace(`${p}`,`$\{${i+1}:${p}}`);
								}
							}
							completion.insertText = new vscode.SnippetString(insert);
		
							// document ---------
							if(e.document != undefined)
							{
								completion.documentation = new vscode.MarkdownString(getJoinString(e.document,"\n\n"));
							} 
							completions.push(completion);
						});
					}
					return completions;
				}
			},'.'
		);
		context.subscriptions.push(methods_provider);
	});
	

	// プロパティ定義
	psexProperties
		.get()
		.forEach(o => {
		var prefix = o.prefix;
		var properties = o.properties;

		const propaties_provider = vscode.languages.registerCompletionItemProvider(
			jsx_selector, 
			{
				provideCompletionItems(document: vscode.TextDocument, position: vscode.Position)
				{
					if(!isPsexScript(document.lineAt(0).text)) return;
	
					let completions : Array<vscode.CompletionItem> = [];
	
					let linePrefix = document.lineAt(position).text.substr(0, position.character);
					var regStr = "";
					if(Array.isArray(prefix))
					{
						prefix.forEach(p => {
							if(regStr != "") regStr += "|";
							regStr += `${p}.$`;
						});
					}
					else regStr = `${prefix}.$`;
					if (new RegExp(regStr).test(linePrefix))
					{
						properties.forEach(p => {
							const completion = new vscode.CompletionItem
							(
								p.name, 
								vscode.CompletionItemKind.Field
							);
							if(p.detail != undefined && p.detail != "")
							{
								completion.detail = `(property) ${p.name}: ${p.detail}`;
							} 
							if(p.document != undefined && p.document != "")
							{
								completion.documentation = new vscode.MarkdownString(getJoinString(p.document,"\n\n"));
							} 
							completions.push(completion);
						});
					}
					return completions;
				}
			},'.'
		);
		context.subscriptions.push(propaties_provider);
	});
	

	// enum定義
	psexEnums
		.get()
		.forEach(o => {
		var prefix = o.name;
		var enums = o.enums;
		var documentation = o.documentation;

		const enum_provider = vscode.languages.registerCompletionItemProvider(
			jsx_selector, 
			{
				provideCompletionItems(document: vscode.TextDocument, position: vscode.Position)
				{
					if(!isPsexScript(document.lineAt(0).text)) return;
					let completions = [];
					let linePrefix = document.lineAt(position).text.substr(0, position.character);

					// EnumのPrefix補完
					if( !linePrefix.endsWith(".") )
					{
						const layerKindCompletion = new vscode.CompletionItem(prefix, vscode.CompletionItemKind.Enum);
						if(documentation != undefined && documentation != "")
						{
							layerKindCompletion.documentation = new vscode.MarkdownString(documentation);
						}
						completions.push(layerKindCompletion);
					}

					// Enumの詳細補完
					if (new RegExp(`${prefix}.$`).test(linePrefix))
					{
						enums.forEach(e => {
							const completion = new vscode.CompletionItem
							(
								e.name, 
								vscode.CompletionItemKind.EnumMember
							);
							completion.filterText = `${prefix}.${e.name}`;
							completion.insertText = e.name;
							if(e.comment != undefined && e.comment != "")
							{
								completion.documentation = new vscode.MarkdownString(getJoinString(e.comment,"\n\n"));
							}
							completions.push(completion);
						});
					}
					return completions;
				}
			},'.'
		);
		context.subscriptions.push(enum_provider);
	});
}