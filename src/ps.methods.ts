export function get(){
	return [
		{
			prefix : "app",
			methods : [
				{
					name : "batch({inputFiles},{action},{from}[, options])",
					params : [
						"inputFiles: array<File>",
						"action: string",
						"form: string",
						"options: BatchOptions"
					],
					document : [
						"Runs the batch automation routine (similar to the ***File > Automate > Batch*** command).",
						"The inputFiles parameter specifies the sources for the files to be manipulated by the batch command."
					]
				},
				{
					name : "beep()",
					document : "Causes a 'beep' sound."
				},
				{
					name : "bringToFront()",
					document : "Makes Adobe Photoshop CC the active (front-most) application."
				},
				{
					name : "changeProgressText({progressString})",
					document : [
						"Changes the text that appears in the progress window.",
						"The *progressString* parameter is the string to show in the progress window."
					]
				},
				{
					name : "charIDToTypeID({charID})",
					document : "Converts from a four character code (character ID) to a runtime ID."
				},
				{
					name : "compareWithNumbers({first},{second})",
					document : [
						"0: They are equal.",
						"Less than 0: Either the value of the first character that does not match is lower in the compared string, or all compared characters match but the compared string is shorter.",
						"Greater than 0: Either the value of the first character that does not match is greater in the compared string, or all compared characters match but the compared string is longer.",
						"When a number is encountered it is converted from a string to a number. For example, A1, A2, A10 would be the sorting order, instead of A1, A10, A2 with the normal sort routine."
					]
				},
				{
					name : "doAction({action},{from})",
					document : "Plays an action from the Actions palette. The *action* parameter is the name of the action, the *from* parameter is the name of the action set."
				},
				{
					name : "doForcedProgress({progressString},{javaScriptString})",
					document : 
					[
						"Performs a task with a progress bar. Forces progress bar to display, ignoring the normal heuristics that keep it from showing unnecessarily (for example, during very short tasks). Other progress APIs must be called periodically to update the progress bar and allow canceling.",
						"The *progressString* parameter is the string to show in the progress window, the *javaScriptString* parameter is the string to execute."
					]
				},
				{
					name : "doProgress({progressString},{javaScriptString})",
					document : "Performs a task with a progress bar. Other progress APIs must be called periodically to update the progress bar and allow canceling."
				},
				{
					name : "doProgressSegmentTask({segmentLength},{done},{total},{javaScriptString})",
					document : "Sections-off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. This method should be used when iterating a list of tasks with unequal run times."
				},
				{
					name : "doProgressSubTask({index},{limit},{javaScriptString})",
					document : "Sections-off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. This method should be used when iterating a list of tasks with equal run times."
				},
				{
					name : "doProgressTask({taskLength},{javaScriptString})",
					document : "Sections-off a portion of the unused progress bar for execution of a subtask. Returns false on cancel."
				},
				{
					name : "eraseCustomOptions({key})",
					document : "Erases the user object with specified ID value from the Photoshop registry."
				},
				{
					name : "executeAction({eventID}[, descriptor][, displayDialogs])",
					document : "Plays an Action Manager event."
				},
				{
					name : "executeActionGet({reference})",
					document : "Obtains information about a predefined or recorded action."
				},
				{
					name : "featureEnabled({name})",
					document : "Determines whether the feature specified by name is enabled."
				},
				{
					name : "getCustomOptions({key})",
					document : "Retreives user objects in the Photoshop registry for the ID with value key."
				},
				{
					name : "isQuicktimeAvailable()",
					document : "Retreives user objects in the Photoshop registry for the ID with value key."
				},
				{
					name : "load(document)",
					document : "Loads a support file (as opposed to a Photoshop image document) from the specified location."
				},
				{
					name : "makeContactSheet({inputFiles} [, options])",
					document : "DEPRECATED for Adobe Photoshop CS4."
				},
				{
					name : "makePDFPresentation({inputFiles},{outputFiles} [, options])",
					document : "DEPRECATED for Adobe Photoshop CS4."
				},
				{
					name : "makePhotoGallery({inputFolder}, {outputFolder} [, options])",
					document : "DEPRECATED for Adobe Photoshop CS4."
				},
				{
					name : "makePhotomerge({inputFiles})",
					document : "DEPRECATED for Adobe Photoshop CC. Use provided script:"
				},
				{
					name : "makePicturePackage({inputFiles} [, options])",
					document : "DEPRECATED for Adobe Photoshop CS4."
				},
				{
					name : "open({document}[, as][, asSmartObject])",
					document : "Opens the specified document. Use the optional as parameter to specify the file format using the constants in OpenDocumentType;"
				},
				{
					name : "openDialog()",
					document : "Invokes the Photoshop Open dialog box for the user to select files. Returns an array of File objects for the files selected in the dialog."
				},
				{
					name : "purge(target)",
					document : "Purges one or more caches."
				},
				{
					name : "putCustomOptions({key},{customObject} [, persistent])",
					document : "Saves a customized settings object in the Photoshop registry. key is the unique identifier for your custom settings. customObject is the object to save in the registry."
				},
				{
					name : "refresh()",
					document : "Pauses the script while the application refreshes. Use to slow down execution and show the results to the user as the script runs. Use carefully; your script runs much more slowly when using this method."
				},
				{
					name : "refreshFonts()",
					document : "Force the font list to get updated."
				},
				{
					name : "runMenuItem({menuID})",
					document : "Run a menu item given the menu ID."
				},
				{
					name : "showColorPicker()",
					document : "Returns false if dialog is cancelled, true otherwise."
				},
				{
					name : "stringIDToTypeID({stringID})",
					document : "Converts from a string ID to a runtime ID."
				},
				{
					name : "togglePalettes()",
					document : "Toggle palette visibility."
				},
				{
					name : "toolSupportsBrushes({tool})",
					document : "Returns true if the specified tool supports brushes, false otherwise."
				},
				{
					name : "toolSupportsBrushPresets({tool})",
					document : "Returns true if the brush supports presets."
				},
				{
					name : "typeIDToCharID({typeID})",
					document : "Converts from a runtime ID to a character ID."
				},
				{
					name : "typeIDToStringID({typeID})",
					document : "Converts from a runtime ID to a string ID."
				},
				{
					name : "updateProgress({done}, {total})",
					document : "Updates the progress bar started by doProgress method. This method should be used for manual non-task based progress updating. Returns false on cancel. The done parameter is the number of tasks completed and the total parameter the total number of tasks."
				}
			]
		},
		// {
		// 	prefix : "_doc",
		// 	methods : 
		// 	{

		// 	}
		// }

	];
}