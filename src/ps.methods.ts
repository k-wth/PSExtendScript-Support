export function get(){
	return [
		{
			prefix : ["app", "Application"],
			methods : [
				{
					name : "batch(inputFiles, action, from[, options])",
					params : [
						"array<File>",
						"string",
						"string",
						"BatchOptions"
					],
					document : [
						"Runs the batch automation routine (similar to the ***File > Automate > Batch*** command).",
						"The inputFiles parameter specifies the sources for the files to be manipulated by the batch command."
					]
				},
				{
					name : "beep()",
					document : [ "Causes a 'beep' sound." ]
				},
				{
					name : "bringToFront()",
					document : [ "Makes Adobe Photoshop CC the active (front-most) application." ]
				},
				{
					name : "changeProgressText(progressString)",
					document : [
						"Changes the text that appears in the progress window.",
						"The *progressString* parameter is the string to show in the progress window."
					]
				},
				{
					name : "charIDToTypeID(charID)",
					document : [ "Converts from a four character code (character ID) to a runtime ID." ]
				},
				{
					name : "compareWithNumbers(first, second)",
					document : [
						"0: They are equal.",
						"Less than 0: Either the value of the first character that does not match is lower in the compared string, or all compared characters match but the compared string is shorter.",
						"Greater than 0: Either the value of the first character that does not match is greater in the compared string, or all compared characters match but the compared string is longer.",
						"When a number is encountered it is converted from a string to a number. For example, A1, A2, A10 would be the sorting order, instead of A1, A10, A2 with the normal sort routine."
					]
				},
				{
					name : "doAction(action, from)",
					document : [ "Plays an action from the Actions palette. The *action* parameter is the name of the action, the *from* parameter is the name of the action set." ]
				},
				{
					name : "doForcedProgress(progressString, javaScriptString)",
					document : 
					[
						"Performs a task with a progress bar. Forces progress bar to display, ignoring the normal heuristics that keep it from showing unnecessarily (for example, during very short tasks). Other progress APIs must be called periodically to update the progress bar and allow canceling.",
						"The *progressString* parameter is the string to show in the progress window, the *javaScriptString* parameter is the string to execute."
					]
				},
				{
					name : "doProgress(progressString, javaScriptString)",
					document : [ "Performs a task with a progress bar. Other progress APIs must be called periodically to update the progress bar and allow canceling." ]
				},
				{
					name : "doProgressSegmentTask(segmentLength, done, total, javaScriptString)",
					document : [ "Sections-off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. This method should be used when iterating a list of tasks with unequal run times." ]
				},
				{
					name : "doProgressSubTask(index, limit, javaScriptString)",
					document : [ "Sections-off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. This method should be used when iterating a list of tasks with equal run times." ]
				},
				{
					name : "doProgressTask(taskLength, javaScriptString)",
					document : [ "Sections-off a portion of the unused progress bar for execution of a subtask. Returns false on cancel." ]
				},
				{
					name : "eraseCustomOptions(key)",
					document : [ "Erases the user object with specified ID value from the Photoshop registry." ]
				},
				{
					name : "executeAction(eventID[, descriptor][, displayDialogs])",
					document : [ "Plays an Action Manager event." ]
				},
				{
					name : "executeActionGet(reference)",
					document : [ "Obtains information about a predefined or recorded action." ]
				},
				{
					name : "featureEnabled(name)",
					document : [ "Determines whether the feature specified by name is enabled." ]
				},
				{
					name : "getCustomOptions(key)",
					document : [ "Retreives user objects in the Photoshop registry for the ID with value key." ]
				},
				{
					name : "isQuicktimeAvailable()",
					document : [ "Retreives user objects in the Photoshop registry for the ID with value key." ]
				},
				{
					name : "load(document)",
					document : [ "Loads a support file (as opposed to a Photoshop image document) from the specified location." ]
				},
				{
					name : "makeContactSheet(inputFiles [, options])",
					document : [ "DEPRECATED for Adobe Photoshop CS4." ]
				},
				{
					name : "makePDFPresentation(inputFiles, outputFiles [, options])",
					document : [ "DEPRECATED for Adobe Photoshop CS4." ]
				},
				{
					name : "makePhotoGallery(inputFolder, outputFolder [, options])",
					document : [ "DEPRECATED for Adobe Photoshop CS4." ]
				},
				{
					name : "makePhotomerge(inputFiles)",
					document : [ "DEPRECATED for Adobe Photoshop CC. Use provided script:" ]
				},
				{
					name : "makePicturePackage(inputFiles [, options])",
					document : [ "DEPRECATED for Adobe Photoshop CS4." ]
				},
				{
					name : "open(document[, as][, asSmartObject])",
					document : [ "Opens the specified document. Use the optional as parameter to specify the file format using the constants in OpenDocumentType;" ]
				},
				{
					name : "openDialog()",
					document : [ "Invokes the Photoshop Open dialog box for the user to select files. Returns an array of File objects for the files selected in the dialog." ]
				},
				{
					name : "purge(target)",
					document : [ "Purges one or more caches." ]
				},
				{
					name : "putCustomOptions(key, customObject [, persistent])",
					document : [ "Saves a customized settings object in the Photoshop registry. key is the unique identifier for your custom settings. customObject is the object to save in the registry." ]
				},
				{
					name : "refresh()",
					document : [ "Pauses the script while the application refreshes. Use to slow down execution and show the results to the user as the script runs. Use carefully; your script runs much more slowly when using this method." ]
				},
				{
					name : "refreshFonts()",
					document : [ "Force the font list to get updated." ]
				},
				{
					name : "runMenuItem(menuID)",
					document : [ "Run a menu item given the menu ID." ]
				},
				{
					name : "showColorPicker()",
					document : [ "Returns false if dialog is cancelled, true otherwise." ]
				},
				{
					name : "stringIDToTypeID(stringID)",
					document : [ "Converts from a string ID to a runtime ID." ]
				},
				{
					name : "togglePalettes()",
					document : [ "Toggle palette visibility." ]
				},
				{
					name : "toolSupportsBrushes(tool)",
					document : [ "Returns true if the specified tool supports brushes, false otherwise." ]
				},
				{
					name : "toolSupportsBrushPresets(tool)",
					document : [ "Returns true if the brush supports presets." ]
				},
				{
					name : "typeIDToCharID(typeID)",
					document : [ "Converts from a runtime ID to a character ID." ]
				},
				{
					name : "typeIDToStringID(typeID)",
					document : [ "Converts from a runtime ID to a string ID." ]
				},
				{
					name : "updateProgress(done, total)",
					document : [ "Updates the progress bar started by doProgress method. This method should be used for manual non-task based progress updating. Returns false on cancel. The done parameter is the number of tasks completed and the total parameter the total number of tasks." ]
				}
			]
		},
		{
			prefix: ["_doc", "document", "Document"],
			methods: [
				{
					name : "autoCount(channel, threshold)",
					params : [
						"Channel",
						"number"
					],
					document : [
						"Counts the number of objects in a document. Available in the Extended Version only.",
						"Creates a [CountItem](CountItem) object for each object counted.",
						"For additional information about how to set up objects to count, see the Count Tool in the Adobe Photoshop CC Help"
					]
				},
				{
					name : "changeMode(destinationMode [, options])",
					params : [
						"ChangeMode",
						"BitmapConversionOptions | IndexedConversionOptions"
					],
					document : [ "Changes the color profile of the document." ]
				},
				{
					name : "close([saving])",
					params : ["SaveOptions"],
					document : [
						"Closes the document. If any changes have been made, the script presents an alert with three options: save, do not save, prompt to save. ",
						"The optional parameter specifies a selection in the alert box (default: ```SaveOptionsType.PROMPTTOSAVECHANGES```)."
					]
				},
				{
					name : "convertProfile(destinationProfile, intent[, blackPointCompensation] [, dither])",
					params : [
						"string",
						"Intent",
						"boolean",
						"boolean"
					],
					document : [
						"Changes the color profile.",
						"The ```destinationProfile``` parameter must be either a string that names the color mode or ```Working RGB,Working CMYK, Working Gray,Lab Color```(meaningone of the working color spaces or Lab color)."
					]
				},
				{
					name : "crop(bounds [, angle][, width] [, height])",
					params : [
						"array[4]<UnitValue>",
						"number",
						"UnitValue",
						"UnitValue"
					],
					document : [ "Crops the document. The ```bounds``` parameter is an array of four coordinates for the region remaining after cropping, [left, top, right, bottom]." ]
				},
				{
					name : "duplicate([name ][, mergeLayersOnly])",
					params : [
						"string",
						"boolean",
					],
					document : [
						"Creates a duplicate of the document object.",
						"The optional parameter ```name``` provides the name for the duplicated document.",
						"The optional parameter ```mergeLayersOnly``` indicates whether to only duplicate merged layers."
					]
				},
				{
					name : "exportDocument(exportIn[, exportAs] [, options])",
					params : [
						"File",
						"ExportType",
						"ExportOptionsIllustrator | ExportOptionsSaveForWeb",
					],
					document : [
						"Exports the paths in the document to an Illustrator file, or exports the document to a file with Web or device viewing optimizations.",
						"This is equivalent to choosing ***File > Export > Paths To Illustrator***, or ***File > Save For Web and Devices***."
					]
				},
				{
					name : "flatten()",
					document : [ "Flattens all layers in the document." ]
				},
				{
					name : "flipCanvas(direction)",
					params : ["Direction"],
					document : [ "Flips the image within the canvas in the specified direction." ]
				},
				{
					name : "importAnnotations(file)",
					params : ["File"],
					document : [ "Imports annotations into the document." ]
				},
				{
					name : "mergeVisibleLayers()",
					document : [ "Flattens all visible layers in the document." ]
				},
				{
					name : "paste([intoSelection])",
					params : ["boolean"],
					document : [ "Pastes the contents of the clipboard into the document. If the optional argument is set to true and a selection is active, the contents are pasted into the selection." ]
				},
				{
					name : "print([sourceSpace][, printSpace][, intent] [blackPointCompensation])",
					params : [
						"SourceSpaceType",
						"string",
						"Intent",
						"boolean",
					],
					document : [
						"Prints the document.",
						"```printSpace``` specifies the color space for the printer. Valid values are ```nothing``` (that is, the same as the source); or ```Working RGB,Working CMYK,Working Gray,Lab Color``` (meaning one of the working color spaces or Lab color); or a string specifying a specific colorspace (default is same as source)."
					]
				},
				{
					name : "printOneCopy()",
					document : [ "Print one copy of the document." ]
				},
				{
					name : "rasterizeAllLayers()",
					document : [ "Rasterizes all layers." ]
				},
				{
					name : "recordMeasurements([source][, dataPoints])",
					params : [
						"MeasurementSource",
						"array<string>",
					],
					document : [ "Record measurements of document." ]
				},
				{
					name : "resizeCanvas([width][, height] [, anchor])",
					params : [
						"UnitValue",
						"UnitValue",
						"AnchorPosition",
					],
					document : [ "Changes the size of the canvas to display more or less of the image but does not change the image size. See [resizeImage](document.resizeImage)." ]
				},
				{
					name : "resizeImage([width][, height][, resolution][, resampleMethod] [, amount])",
					params : [
						"UnitValue",
						"UnitValue",
						"number",
						"ResampleMethod",
						"number",
					],
					document : [
						"Changes the size of the image.",
						"The ```amount``` parameter controls the amount of noise value when using preserve details (Range: 0 - 100)."
					]
				},
				{
					name : "revealAll()",
					document : [ "Expands the document to show clipped sections." ]
				},
				{
					name : "rotateCanvas(angle)",
					params : ["number"],
					document : [ "Rotates the canvas (including the image) in clockwise direction." ]
				},
				{
					name : "save()",
					document : [ "Rotates the canvas (including the image) in clockwise direction." ]
				},
				{
					name : "saveAs(saveIn[, options][, asCopy][, extensionType])",
					params : [
						"File",
						"object (see description)",
						"boolean",
						"Extension",
					],
					document : [ "Saves the document in a specific format." ]
				},
				{
					name : "splitChannels()",
					document : [ "Splits the document channels into separate images." ]
				},
				{
					name : "suspendHistory(historyString,javaScriptString)",
					params : [
						"string",
						"string"
					],
					document : [
						"Provides a single entry in history states for the entire script provided by ```javaScriptString```. Allows a single undo for all actions taken in the script.",
						"The ```historyString``` parameter provides the string to use for the history state.",
						"The ```javaScriptString``` parameter provides a string of JavaScript code to excute while history is suspended."
					]
				},
				{
					name : "trap(width)",
					params : ["number"],
					document : [
						"Applies trapping to a CMYK document.",
						"Valid only when ``` docRef.mode = DocumentMode.CMYK.```"
					]
				},
				{
					name : "trim([type][, top][, left] [, bottom] [, right])",
					params : [
						"TrimType",
						"boolean",
						"boolean",
						"boolean",
						"boolean"
					],
					document : [
						"Trims the transparent area around the image on the specified sides of the canvas.",
						"Default is ```true```  for all Boolean parameters."
					]
				}
			]
		},
		{
			prefix: ["_layer","layer","Layer","ArtLayer"],
			methods: [
				{
					name : "adjustBrightnessContrast(brightness, contrast)",
					params : [
						"number",
						"number",
					],
					document : []
				},
				{
					name : "adjustColorBalance([shadows][, midtones][, highlights][, preserveLuminosity])",
					params : [
						"array<number>",
						"array<number>",
						"array<number>",
						"boolean",
					],
					document : []
				},
				{
					name : "adjustCurves(curveShape)",
					params : [
						"array<array<number>>",
					],
					document : []
				},
				{
					name : "adjustLevels(inputRangeStart, inputRangeEnd, inputRangeGamma, outputRangeStart, outputRangeEnd)",
					params : [
						"number [0..253]",
						"number [(start + 2)..255] ",
						"number [0.10..9.99] ",
						"number [0..253]",
						"number [(start + 2)..255]",
					],
					document : []
				},
				{
					name : "applyAddNoise(amount, distribution, monochromatic)",
					params : [
						"number [0.1..400] ",
						"NoiseDistribution ",
						"boolean",
					],
					document : []
				},
				{
					name : "applyAverage()",
					params : [],
					document : []
				},
				{
					name : "applyBlur()",
					params : [],
					document : []
				},
				{
					name : "applyBlurMore()",
					params : [],
					document : []
				},
				{
					name : "applyClouds()",
					params : [],
					document : []
				},
				{
					name : "applyCustomFilter(characteristics, scale, offset)",
					params : [
						"array<number>",
						"number",
						"number",
					],
					document : []
				},
				{
					name : "applyDeInterlace(eliminateFields, createFields)",
					params : [
						"EliminateFields",
						"CreateFields",
					],
					document : []
				},
				{
					name : "applyDespeckle()",
					params : [],
					document : []
				},
				{
					name : "applyDifferenceClouds()",
					params : [],
					document : []
				},
				{
					name : "applyDiffuseGlow(graininess, glowAmount, clearAmount)",
					params : [
						"number [0..10]",
						"number [0..20]",
						"number [0..20]",
					],
					document : []
				},
				{
					name : "applyDisplace(horizontalScale, verticalScale, displacement, undefinedareas, displacementMapFiles)",
					params : [
						"number [-999..999]",
						"number [-999..999] ",
						"DisplacementMapType",
						"UndefinedAreas",
						"File",
					],
					document : []
				},
				{
					name : "applyDustAndScratches(radius, threshold)",
					params : [
						"number [1..100]",
						"number [0..255]",
					],
					document : []
				},
				{
					name : "applyGaussianBlur(radius)",
					params : [
						"number [0.1..250.0]"
					],
					document : []
				},
				{
					name : "applyGlassEffect(distortion, smoothness, scaling[, invert][, texture][, textureFile])",
					params : [
						"number [0..20]",
						"number [1..15]",
						"number [50..200]",
						"boolean",
						"TextureType",
						"File",
					],
					document : []
				},
				{
					name : "applyHighPass(radius)",
					params : ["number [0.1..250.0]"],
					document : []
				},
				{
					name : "applyLensBlur([source][, focalDistance] [, invertDepthMap] [, shape][, radius][, bladeCurvature] [, rotation][, brightness][, threshold][, amount][, distribution] [, monochromatic])",
					params : [
						"DepthMapSource",
						"number",
						"boolean",
						"Geometry",
						"number",
						"number",
						"number",
						"number",
						"number",
						"number",
						"NoiseDistribution",
						"boolean",
					],
					document : []
				},
				{
					name : "applyLensFlare(brightness, flareCenter, lensType)",
					params : [
						"number",
						"array<UnitValue>",
						"LensType",
					],
					document : []
				},
				{
					name : "applyMaximum(radius)",
					params : [ "number [1..100]" ],
					document : []
				},
				{
					name : "applyMedianNoise(radius)",
					params : [ "number [1..100]" ],
					document : []
				},
				{
					name : "applyMinimum(radius)",
					params : [ "number [1..100]" ],
					document : []
				},
				{
					name : "applyMotionBlur(angle, radius)",
					params : [
						"number [-360..360]",
						"number [1..999]",
					],
					document : []
				},
				{
					name : "applyNTSC()",
					params : [],
					document : []
				},
				{
					name : "applyOceanRipple(size, magnitude)",
					params : [
						"number [1..15]",
						"number [0..20]",
					],
					document : []
				},
				{
					name : "applyOffset(horizontal, vertical, undefinedAreas)",
					params : [
						"UnitValue",
						"UnitValue",
						"OffsetUndefinedAreas",
					],
					document : []
				},
				{
					name : "applyPinch(amount)",
					params : [ "number [-100..100]" ],
					document : []
				},
				{
					name : "applyPolarCoordinates(conversion)",
					params : [ "PolarConversionType" ],
					document : []
				},
				{
					name : "applyRadialBlur(amount, blurMethod, blurQuality[, blurCenter] )",
					params : [
						"number [1..100]",
						"RadialBlurMethod",
						"RadialBlurQuality",
						"UnitValue",
					],
					document : []
				},
				{
					name : "applyRipple(amount, size)",
					params : [
						"number [999..999]",
						"RippleSize",
					],
					document : []
				},
				{
					name : "applySharpen()",
					params : [],
					document : []
				},
				{
					name : "applySharpenEdges()",
					params : [],
					document : []
				},
				{
					name : "applySharpenMore()",
					params : [],
					document : []
				},
				{
					name : "applyShear(curve, undefinedAreas)",
					params : [
						"array<array<number>>",
						"UndefinedAreas",
					],
					document : []
				},
				{
					name : "applySmartBlur(radius, threshold, blurQuality, mode)",
					params : [
						"number [0.1..100.0]",
						"number [0.1..100.0]",
						"SmartBlurQuality",
						"SmartBlurMode",
					],
					document : []
				},
				{
					name : "applySpherize(amount, mode)",
					params : [
						"number [-100..100]",
						"SpherizeMode",
					],
					document : []
				},
				{
					name : "applyStyle(styleName)",
					params : [ "string" ],
					document : []
				},
				{
					name : "applyTextureFill(textureFile)",
					params : [ "File" ],
					document : []
				},
				{
					name : "applyTwirl(angle)",
					params : [ "number [-999..999]" ],
					document : []
				},
				{
					name : "applyUnSharpMask(amount, radius, threshold)",
					params : [
						"number [1..500]",
						"number [0.1..250.0]",
						"number [0..255]",
					],
					document : []
				},
				{
					name : "applyWave(generatorNumber, minimumWavelength, maximumWavelength, minimumAmplitude, maximumAmplitude, horizontalScale, verticalScale, waveType, undefinedAreas, randomSeed)",
					params : [
						"number [1..999]",
						"number [1..998]",
						"number [2..min+1]",
						"number[1..998]",
						"number [2..min+1]",
						"number [1..100]",
						"number [1..100]",
						"WaveType",
						"UndefinedAreas",
						"number",
					],
					document : []
				},
				{
					name : "applyZigZag(amount, ridges, style)",
					params : [
						"number [-100..100]",
						"number [0..20]",
						"ZigZagType",
					],
					document : []
				},
				{
					name : "autoContrast()",
					params : [],
					document : []
				},
				{
					name : "autoLevels()",
					params : [],
					document : []
				},
				{
					name : "clear()",
					params : [],
					document : []
				},
				{
					name : "copy([merge])",
					params : [ "boolean" ],
					document : []
				},
				{
					name : "cut()",
					params : [],
					document : []
				},
				{
					name : "desaturate()",
					params : [],
					document : []
				},
				{
					name : "duplicate([relativeObject][, insertionLocation])",
					params : [
						"ArtLayer | LayerSet",
						"ElementPlacement",
					],
					document : []
				},
				{
					name : "equalize()",
					params : [],
					document : []
				},
				{
					name : "invert()",
					params : [],
					document : []
				},
				{
					name : "link(with)",
					params : [ "ArtLayer | LayerSet" ],
					document : []
				},
				{
					name : "merge()",
					params : [],
					document : []
				},
				{
					name : "mixChannels(outputChannels [, monochrome])",
					params : [
						"array<array<number>>",
						"boolean",
					],
					document : []
				},
				{
					name : "move(relativeObject, insertionLocation)",
					params : [
						"ArtLayer | LayerSet",
						"ElementPlacement"
					],
					document : []
				},
				{
					name : "photoFilter([fillColor][, density][, preserveLuminosity])",
					params : [
						"SolidColor",
						"number [1..100]",
						"boolean",
					],
					document : []
				},
				{
					name : "posterize(levels)",
					params : [ "number [2..225]" ],
					document : []
				},
				{
					name : "rasterize(target)",
					params : [ "RasterizeType" ],
					document : []
				},
				{
					name : "remove()",
					params : [],
					document : []
				},
				{
					name : "resize([horizontal] [, vertical] [, anchor])",
					params : [
						"number",
						"number",
						"AnchorPosition"
					],
					document : []
				},
				{
					name : "rotate(angle[, anchor])",
					params : [
						"number",
						"AnchorPosition",
					],
					document : []
				},
				{
					name : "selectiveColor(selectionMethod [, reds][, yellows] [, greens] [, cyans][, blues][, magentas] [, whites] [, neutrals] [, blacks])",
					params : [
						"AdjustmentReference",
						"array<number>",
						"array<number>",
						"array<number>",
						"array<number>",
						"array<number>",
						"array<number>",
						"array<number>",
						"array<number>",
						"array<number>",
					],
					document : []
				},
				{
					name : "shadowHighlight([shadowAmount] [, shadowWidth][, shadowRadius][, highlightAmount] [, highlightWidth] [, highlightRadius] [, colorCorrection] [, midtoneContrast] [, blackClip][, whiteClip])",
					params : [
						"number [0..100]",
						"number [0.100]",
						"number [0..2500]",
						"number [0..100]",
						"number [0..100]",
						"number [0..2500]",
						"number [-100..100]",
						"number [-100..100]",
						"number [0.000..50.000]",
						"number [0.000..50.000]",
					],
					document : []
				},
				{
					name : "threshold(level)",
					params : [ "number [1..255]" ],
					document : []
				},
				{
					name : "translate([deltaX][, deltaY])",
					params : [
						"UnitValue",
						"UnitValue"
					],
					document : []
				},
				{
					name : "unlink()",
					params : [],
					document : []
				}
			]
		},
		{
			prefix: ["_layers","layers","Layers","LayerSet"],
			methods: [
				{
					name : "duplicate([relativeObject][, insertionLocation])",
					params : [
						"ArtLayer or LayerSet",
						"ElementPlacement"
					],
					document : [
						"Creates a duplicate of the object."
					]
				},
				{
					name : "link(with)",
					params : [
						"ArtLayer or LayerSet"
					],
					document : [
						"Links the layer set with another layer."
					]
				},
				{
					name : "merge()",
					params : [],
					document : [
						"Merges the layerset; returns a reference to the art layer created by this method."
					]
				},
				{
					name : "move(relativeObject, insertionLocation)",
					params : [
						"ArtLayer or LayerSet",
						"ElementPlacement"
					],
					document : [
						"Moves the object."
					]
				},
				{
					name : "remove()",
					params : [],
					document : [
						"Deletes the object."
					]
				},
				{
					name : "resize([horizontal] [, vertical] [, anchor])",
					params : [
						"number",
						"number",
						"AnchorPosition"
					],
					document : [
						"Resizes all layers in the layer set to to the specified dimensions (as a percentage of its current size) and places the layer set in the specified position."
					]
				},
				{
					name : "rotate(angle [, anchor])",
					params : [
						"number",
						"AnchorPosition"
					],
					document : [
						"Rotates all layers in the layer set around the specified anchor point (default: ```AnchorPosition.MIDDLECENTER```)"
					]
				},
				{
					name : "translate([deltaX] [, deltaY])",
					params : [
						"UnitValue",
						"UnitValue"
					],
					document : [
						"Moves the position relative to its current position."
					]
				},
				{
					name : "unlink()",
					params : [],
					document : [
						"Unlinks the layer set."
					]
				}
			]
		}
	];
}