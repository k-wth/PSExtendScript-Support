export function get(){
	return [
		// app(Application) のメソッド ---------------------------------------------
		{
			prefix : ["app","Application"],
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
			prefix : ["_doc","document","Document"],
			properties : [
				{
					name : "activeChannels",
					detail : "array<Channel>",
					document : "Read-write. The selected channels."
				},
				{
					name : "activeHistoryBrushSource",
					detail : "Guide",
					document : "Read-write. The history state to use with the history brush."
				},
				{
					name : "activeHistoryState",
					detail : "Guide",
					document : "Read-write. The selected HistoryState object."
				},
				{
					name : "activeLayer",
					detail : "ArtLayer | LayerSet",
					document : "Read-write. The selected layer."
				},
				{
					name : "artLayers",
					detail : "ArtLayers",
					document : "Read-only. The art layers collection."
				},
				{
					name : "backgroundLayer",
					detail : "ArtLayer",
					document : "Read-only. The background layer of the document."
				},
				{
					name : "bitsPerChannel",
					detail : "BitsPerChannelType",
					document : "Read-write. The number of bits per channel."
				},
				{
					name : "channels",
					detail : "Channels",
					document : "Read-only. The channels collection."
				},
				{
					name : "colorProfileName",
					detail : "string",
					document : [
						"Read-write. The name of the color profile.",
						"Valid only when ```colorProfileType = ColorProfile.CUSTOM``` or ```WORKING```."
					]
				},
				{
					name : "colorProfileType",
					detail : "ColorProfileType",
					document : "Read-write. Whether the document uses the working color profile, a custom profile, or no profile."
				},
				{
					name : "colorSamplers",
					detail : "ColorSamplers",
					document : "Read-only. The current color samplers associated with this document."
				},
				{
					name : "componentChannels",
					detail : "array<Channel>",
					document : "Read-only. The color channels that make up the document; for instance, the Red, Green, and Blue channels for an RGB document."
				},
				{
					name : "countItems",
					detail : "CountItems",
					document : [
						"Read-only. The current count items.",
						"***Note:*** For additional information about count items, see Adobe Photoshop CC help on the Count Tool."
					]
				},
				{
					name : "fullName",
					detail : "File",
					document : "Read-only. The full path name of the document."
				},
				{
					name : "guides",
					detail : "Guides",
					document : "Read-only. The guides collection."
				},
				{
					name : "height",
					detail : "UnitValue",
					document : "Read-only. The height of the document (unit value)."
				},
				{
					name : "histogram",
					detail : "array<number>",
					document : [
						"Read-only. A histogram showing the number of pixels at each color intensity level for the composite channel. The array c ontains 256 members.",
						"Valid only when ```mode = DocumentMode.RGB, CMYK;``` or ```INDEXEDCOLOR```."
					]
				},
				{
					name : "historyStates",
					detail : "HistoryStates",
					document : "Read-only. The history states collection."
				},
				{
					name : "info",
					detail : "DocumentInfo",
					document : "Read-only. Metadata about the document."
				},
				{
					name : "layerComps",
					detail : "LayerComps",
					document : "Read-only. The layer compositions collection."
				},
				{
					name : "layers",
					detail : "Layers",
					document : "Read-only. The layers collection."
				},
				{
					name : "layerSets",
					detail : "LayerSets",
					document : "Read-only. The layer set collection."
				},
				{
					name : "managed",
					detail : "boolean",
					document : "Read-only. True if the document a is workgroup document."
				},
				{
					name : "measurementScale",
					detail : "MeasurementScale",
					document : [
						"Read-only. The measurement scale for the document.",
						"***Note:*** The measurement scale feature is available in the Extended version only."
					]
				},
				{
					name : "mode",
					detail : "DocumentMode",
					document : "Read-only. The color profile."
				},
				{
					name : "name",
					detail : "string",
					document : "Read-only. The document's name."
				},
				{
					name : "parent",
					detail : "Application",
					document : "Read-only. The application object that contains this document."
				},
				{
					name : "path",
					detail : "File",
					document : "Read-only. The path to the document."
				},
				{
					name : "pathItems",
					detail : "PathItems",
					document : "Read-only. The path items collection."
				},
				{
					name : "pixelAspectRatio",
					detail : "number [0.100..10.000]",
					document : "Read-write. The (custom) pixel aspect ratio to use."
				},
				{
					name : "printSettings",
					detail : "DocumentPrintSettings",
					document : "Read-only. The print settings for the document."
				},
				{
					name : "quickMaskMode",
					detail : "boolean",
					document : "Read-write. True if the document is in Quick Mask mode."
				},
				{
					name : "resolution",
					detail : "number",
					document : "Read-only. The document’s resolution (in pixels per inch)."
				},
				{
					name : "saved",
					detail : "boolean",
					document : "Read-only. True if the document has been saved since the last change."
				},
				{
					name : "selection",
					detail : "Selection",
					document : "Read-only. The selected area of the document."
				},
				{
					name : "typename",
					detail : "string",
					document : "Read-only. The class name of the Document object."
				},
				{
					name : "width",
					detail : "UnitValue",
					document : "Read-only. The width of the document (unit value)."
				},
				{
					name : "xmpMetadata",
					detail : "xmpMetadata",
					document : "Read-only. XMP metadata for the document. Camera RAW settings for the image are stored here for example."
				}
			]
		}
	];
}