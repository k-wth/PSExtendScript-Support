export function get(){
	return [
		// app(Application) のメソッド ---------------------------------------------
		{
			prefix : "app",
			properties : [
				{
					name : "activeDocument",
					detail : "Document",
					document : "Read-write. The frontmost document."
				},
				{
					name : "activeDocument.activeLayer",
					detail : "Layer",
					document : "Read-write. The frontmost layer."
				},
				{
					name : "backgroundColor",
					detail : "SolidColor",
					document : "Read-write. The default background color and color style for documents."
				},
				{
					name : "build",
					detail : "string",
					document : "Read-only. Information about the application."
				},
				{
					name : "colorSettings",
					detail : "string",
					document : "Read-write. The name of the current color settings, as selected with Edit > Color Settings."
				},
				{
					name : "currentTool",
					detail : "string",
					document : "Read-write. The name of the current tool selected."
				},
				{
					name : "displayDialogs",
					detail : "DialogModes",
					document : "Read-write. The dialog mode for the application, which controls what details of dialogs should be displayed when running scripts."
				},
				{
					name : "documents",
					detail : "Documents",
					document : "Read-only. The collection of open documents."
				},
				{
					name : "fonts",
					detail : "TextFonts",
					document : "Read-only. The fonts installed on this system."
				},
				{
					name : "foregroundColor",
					detail : "SolidColor",
					document : "Read-write. The default foreground color (used to paint, fill, and stroke selections)."
				},
				{
					name : "freeMemory",
					detail : "number",
					document : "Read-only. The amount of unused memory available to Adobe Photoshop CC."
				},
				{
					name : "locale",
					detail : "string",
					document : "Read-only. The language location of the application."
				},
				{
					name : "macintoshFiledetails",
					detail : "array<string>",
					document : "Read-only. A list of file image details Adobe Photoshop CC can open."
				},
				{
					name : "measurementLog",
					detail : "MeasurementLog",
					document : "The log of measurements taken."
				},
				{
					name : "name",
					detail : "string",
					document : "Read-only. The application's name."
				},
				{
					name : "notifiers",
					detail : "Notifiers",
					document : "Read-only. The collection of notifiers currently configured (in the Scripts Events Manager menu in the Adobe Photoshop CC application)."
				},
				{
					name : "notifiersEnabled",
					detail : "boolean",
					document : "Read-write. True if all notifiers are enabled."
				},
				{
					name : "path",
					detail : "File",
					document : "Read-only. The full path to the location of the Adobe Photoshop CC application."
				},
				{
					name : "playbackDisplayDialogs",
					detail : "DialogModes",
					document : "Read-write. The dialog mode for playback mode, which controls what details of dialog to display when playing back a recorded action with the Actions palette."
				},
				{
					name : "playbackParameters",
					detail : "ActionDescriptor",
					document : "Read-write. Stores and retrieves parameters used as part of a recorded action. Can be used, for example, to control playback speed."
				},
				{
					name : "preferences",
					detail : "Preferences",
					document : "Read-only. The application preference settings (equivalent to selecting Edit > Preferences in the Adobe Photoshop CC application in Windows or Photoshop > Preferences in Mac OS)."
				},
				{
					name : "preferencesFolder",
					detail : "File",
					document : "Read-only. The full path to the Preferences folder."
				},
				{
					name : "recentFiles",
					detail : "array<File>",
					document : "Read-only. Files in the Recent Files list."
				},
				{
					name : "scriptingBuildDate",
					detail : "string",
					document : "Read-only. The build date of the Scripting interface."
				},
				{
					name : "scriptingVersion",
					detail : "string",
					document : "Read-only. The version of the Scripting interface."
				},
				{
					name : "systemInformation",
					detail : "string",
					document : "Read-only. Runtime details of the application and system."
				},
				{
					name : "detailname",
					detail : "string",
					document : "Read-only. The class name of the referenced app object."
				},
				{
					name : "version",
					detail : "string",
					document : "Read-only. The version of Adobe Photoshop application you are running."
				},
				{
					name : "windowsFiledetails",
					detail : "array<string>",
					document : "Read-only. A list of file image extensions Adobe Photoshop CC can open."
				}
			]
		},
		{
			prefix : "_doc",
			// prefix : ["_doc","document","Document"],
			properties : [
				{
					name : "activeChannels",
					detail : "array<Channel>",
					document : ""
				},
				{
					name : "activeHistoryBrushSource",
					detail : "Guide",
					document : ""
				},
				{
					name : "activeHistoryState",
					detail : "Guide",
					document : ""
				},
				{
					name : "activeLayer",
					detail : "ArtLayer | LayerSet",
					document : ""
				},
				{
					name : "artLayers",
					detail : "ArtLayers",
					document : ""
				},
				{
					name : "backgroundLayer",
					detail : "ArtLayer",
					document : ""
				},
				{
					name : "bitsPerChannel",
					detail : "BitsPerChannelType",
					document : ""
				},
				{
					name : "channels",
					detail : "Channels",
					document : ""
				},
				{
					name : "colorProfileName",
					detail : "string",
					document : ""
				},
				{
					name : "colorProfileType",
					detail : "ColorProfileType",
					document : ""
				},
				{
					name : "colorSamplers",
					detail : "ColorSamplers",
					document : ""
				},
				{
					name : "componentChannels",
					detail : "array<Channel>",
					document : ""
				},
				{
					name : "countItems",
					detail : "CountItems",
					document : ""
				},
				{
					name : "fullName",
					detail : "File",
					document : ""
				},
				{
					name : "guides",
					detail : "Guides",
					document : ""
				},
				{
					name : "height",
					detail : "UnitValue",
					document : ""
				},
				{
					name : "histogram",
					detail : "array<number>",
					document : ""
				},
				{
					name : "historyStates",
					detail : "HistoryStates",
					document : ""
				},
				{
					name : "info",
					detail : "DocumentInfo",
					document : ""
				},
				{
					name : "layerComps",
					detail : "LayerComps",
					document : ""
				},
				{
					name : "layers",
					detail : "Layers",
					document : ""
				},
				{
					name : "layerSets",
					detail : "LayerSets",
					document : ""
				},
				{
					name : "managed",
					detail : "boolean",
					document : ""
				},
				{
					name : "measurementScale",
					detail : "MeasurementScale",
					document : ""
				},
				{
					name : "mode",
					detail : "DocumentMode",
					document : ""
				},
				{
					name : "name",
					detail : "string",
					document : ""
				},
				{
					name : "parent",
					detail : "Application",
					document : ""
				},
				{
					name : "path",
					detail : "File",
					document : ""
				},
				{
					name : "pathItems",
					detail : "PathItems",
					document : ""
				},
				{
					name : "pixelAspectRatio",
					detail : "number [0.100..10.000]",
					document : ""
				},
				{
					name : "printSettings",
					detail : "DocumentPrintSettings",
					document : ""
				},
				{
					name : "quickMaskMode",
					detail : "boolean",
					document : ""
				},
				{
					name : "resolution",
					detail : "number",
					document : ""
				},
				{
					name : "saved",
					detail : "boolean",
					document : ""
				},
				{
					name : "selection",
					detail : "Selection",
					document : ""
				},
				{
					name : "typename",
					detail : "string",
					document : ""
				},
				{
					name : "width",
					detail : "UnitValue",
					document : ""
				},
				{
					name : "xmpMetadata",
					detail : "xmpMetadata",
					document : ""
				}
			]
		}
	];
}