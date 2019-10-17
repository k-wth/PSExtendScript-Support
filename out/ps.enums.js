"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PsohotshopExtendScript Enum定義
 */
function get() {
    return psex_enums;
}
exports.get = get;
var psex_enums = [
    {
        name: "AdjustmentReference",
        documentation: "",
        enums: [
            { name: "ABSOLUTE", comment: "" },
            { name: "RELATIVE", comment: "" }
        ]
    },
    {
        name: "AnchorPosition",
        enums: [
            { name: "BOTTOMCENTER", comment: "" },
            { name: "BOTTOMLEFT", comment: "" },
            { name: "BOTTOMRIGHT", comment: "" },
            { name: "MIDDLECENTER", comment: "" },
            { name: "MIDDLELEFT", comment: "" },
            { name: "MIDDLERIGHT", comment: "" },
            { name: "TOPCENTER", comment: "" },
            { name: "TOPLEFT", comment: "" },
            { name: "TOPRIGHT", comment: "" }
        ]
    },
    {
        name: "AntiAlias",
        enums: [
            { name: "CRISP", comment: "" },
            { name: "NONE", comment: "" },
            { name: "SHARP", comment: "" },
            { name: "SMOOTH", comment: "" },
            { name: "STRONG", comment: "" }
        ]
    },
    {
        name: "AutoKernType",
        enums: [
            { name: "MANUAL", comment: "" },
            { name: "METRICS", comment: "" },
            { name: "OPTICAL", comment: "" }
        ]
    },
    {
        name: "BatchDestinationType",
        enums: [
            { name: "FOLDER", comment: "" },
            { name: "NODESTINATION", comment: "" },
            { name: "SAVEANDCLOSE", comment: "" }
        ]
    },
    {
        name: "BitmapConversionType",
        enums: [
            { name: "CUSTOMPATTERN", comment: "" },
            { name: "DIFFUSIONDITHER", comment: "" },
            { name: "HALFTHRESHOLD", comment: "" },
            { name: "HALFTONESCREEN", comment: "" },
            { name: "PATTERNDITHER", comment: "" }
        ]
    },
    {
        name: "BitmapHalfToneType",
        enums: [
            { name: "CROSS", comment: "" },
            { name: "DIAMOND", comment: "" },
            { name: "ELLIPSE", comment: "" },
            { name: "LINE", comment: "" },
            { name: "ROUND", comment: "" },
            { name: "SQUARE", comment: "" }
        ]
    },
    {
        name: "BitsPerChannelType",
        enums: [
            { name: "EIGHT", comment: "" },
            { name: "ONE", comment: "" },
            { name: "SIXTEEN", comment: "" },
            { name: "THIRTYTWO", comment: "" }
        ]
    },
    {
        name: "BlendMode",
        enums: [
            { name: "COLORBLEND", comment: "" },
            { name: "COLORBURN", comment: "" },
            { name: "COLORDODGE", comment: "" },
            { name: "DARKEN", comment: "" },
            { name: "DIFFERENCE", comment: "" },
            { name: "DISSOLVE", comment: "" },
            { name: "DIVIDE", comment: "" },
            { name: "EXCLUSION", comment: "" },
            { name: "HARDLIGHT", comment: "" },
            { name: "HARDMIX", comment: "" },
            { name: "HUE", comment: "" },
            { name: "LIGHTEN", comment: "" },
            { name: "LINEARBURN", comment: "" },
            { name: "LINEARDODGE", comment: "" },
            { name: "LINEARLIGHT", comment: "" },
            { name: "LUMINOSITY", comment: "" },
            { name: "MULTIPLY", comment: "" },
            { name: "NORMAL", comment: "" },
            { name: "OVERLAY", comment: "" },
            { name: "PASSTHROUGH", comment: "" },
            { name: "PINLIGHT", comment: "" },
            { name: "SATURATION", comment: "" },
            { name: "SCREEN", comment: "" },
            { name: "SOFTLIGHT", comment: "" },
            { name: "SUBTRACT", comment: "" },
            { name: "VIVIDLIGHT", comment: "" }
        ]
    },
    {
        name: "BMPDepthType",
        enums: [
            { name: "BMP_A1R5G5B5", comment: "" },
            { name: "BMP_A4R4G4B4", comment: "" },
            { name: "BMP_A8R8G8B8", comment: "" },
            { name: "BMP_R5G6B5", comment: "" },
            { name: "BMP_R8G8B8", comment: "" },
            { name: "BMP_X1R5G5B5", comment: "" },
            { name: "BMP_X4R4G4B4", comment: "" },
            { name: "BMP_X8R8G8B8", comment: "" },
            { name: "EIGHT", comment: "" },
            { name: "FOUR", comment: "" },
            { name: "ONE", comment: "" },
            { name: "SIXTEEN", comment: "" },
            { name: "THIRTYTWO", comment: "" },
            { name: "TWENTYFOUR", comment: "" }
        ]
    },
    {
        name: "ByteOrder",
        enums: [
            { name: "IBM", comment: "" },
            { name: "MACOS", comment: "" }
        ]
    },
    {
        name: "CameraRAWSettingsType",
        enums: [
            { name: "CAMERA", comment: "" },
            { name: "CUSTOM", comment: "" },
            { name: "SELECTEDIMAGE", comment: "" }
        ]
    },
    {
        name: "CameraRAWSize",
        enums: [
            { name: "EXTRALARGE", comment: "" },
            { name: "LARGE", comment: "" },
            { name: "MAXIMUM", comment: "" },
            { name: "MEDIUM", comment: "" },
            { name: "MINIMUM", comment: "" },
            { name: "SMALL", comment: "" }
        ]
    },
    {
        name: "ChangeMode",
        enums: [
            { name: "BITMAP", comment: "" },
            { name: "CMYK", comment: "" },
            { name: "GRAYSCALE", comment: "" },
            { name: "INDEXEDCOLOR", comment: "" },
            { name: "LAB", comment: "" },
            { name: "MULTICHANNEL", comment: "" },
            { name: "RGB", comment: "" }
        ]
    },
    {
        name: "ChannelType",
        enums: [
            { name: "COMPONENT", comment: "" },
            { name: "MASKEDAREA", comment: "" },
            { name: "SELECTEDAREA", comment: "" },
            { name: "SPOTCOLOR", comment: "" }
        ]
    },
    {
        name: "ColorBlendMode",
        enums: [
            { name: "BEHIND", comment: "" },
            { name: "CLEAR", comment: "" },
            { name: "COLOR", comment: "" },
            { name: "COLORBURN", comment: "" },
            { name: "COLORDODGE", comment: "" },
            { name: "DARKEN", comment: "" },
            { name: "DARKERCOLOR", comment: "" },
            { name: "DIFFERENCE", comment: "" },
            { name: "DISSOLVE", comment: "" },
            { name: "EXCLUSION", comment: "" },
            { name: "HARDLIGHT", comment: "" },
            { name: "HARDMIXBLEND", comment: "" },
            { name: "HUE", comment: "" },
            { name: "LIGHTEN", comment: "" },
            { name: "LIGHTERCOLOR", comment: "" },
            { name: "LINEARBURN", comment: "" },
            { name: "LINEARDODGE", comment: "" },
            { name: "LINEARLIGHT", comment: "" },
            { name: "LUMINOSITY", comment: "" },
            { name: "MULTIPLY", comment: "" },
            { name: "NORMAL", comment: "" },
            { name: "OVERLAY", comment: "" },
            { name: "PINLIGHT", comment: "" },
            { name: "SATURATION", comment: "" },
            { name: "SCREEN", comment: "" },
            { name: "SOFTLIGHT", comment: "" },
            { name: "VIVIDLIGHT", comment: "" }
        ]
    },
    {
        name: "ColorModel",
        enums: [
            { name: "CMYK", comment: "" },
            { name: "GRAYSCALE", comment: "" },
            { name: "HSB", comment: "" },
            { name: "LAB", comment: "" },
            { name: "NONE", comment: "" },
            { name: "RGB", comment: "" }
        ]
    },
    {
        name: "ColorPicker",
        enums: [
            { name: "ADOBE", comment: "" },
            { name: "APPLE", comment: "" },
            { name: "PLUGIN", comment: "" },
            { name: "WINDOWS", comment: "" }
        ]
    },
    {
        name: "ColorProfileType",
        enums: [
            { name: "CUSTOM", comment: "" },
            { name: "NONE", comment: "" },
            { name: "WORKING", comment: "" }
        ]
    },
    {
        name: "ColorReductionType",
        enums: [
            { name: "ADAPTIVE", comment: "" },
            { name: "BLACKWHITE", comment: "" },
            { name: "CUSTOM", comment: "" },
            { name: "GRAYSCALE", comment: "" },
            { name: "MACINTOSH", comment: "" },
            { name: "PERCEPTUAL", comment: "" },
            { name: "RESTRICTIVE", comment: "" },
            { name: "SELECTIVE", comment: "" },
            { name: "WINDOWS", comment: "" }
        ]
    },
    {
        name: "ColorSpaceType",
        enums: [
            { name: "ADOBERGB", comment: "" },
            { name: "COLORMATCHRGB", comment: "" },
            { name: "PROPHOTORGB", comment: "" },
            { name: "SRGB", comment: "" }
        ]
    },
    {
        name: "CopyrightedType",
        enums: [
            { name: "COPYRIGHTEDWORK", comment: "" },
            { name: "PUBLICDOMAIN", comment: "" },
            { name: "UNMARKED", comment: "" }
        ]
    },
    {
        name: "CreateFields",
        enums: [
            { name: "DUPLICATION", comment: "" },
            { name: "INTERPOLATION", comment: "" }
        ]
    },
    {
        name: "CropToType",
        enums: [
            { name: "ARTBOX", comment: "" },
            { name: "BLEEDBOX", comment: "" },
            { name: "BOUNDINGBOX", comment: "" },
            { name: "CROPBOX", comment: "" },
            { name: "MEDIABOX", comment: "" },
            { name: "TRIMBOX", comment: "" }
        ]
    },
    {
        name: "DCSType",
        enums: [
            { name: "COLORCOMPOSITE", comment: "" },
            { name: "GRAYSCALECOMPOSITE", comment: "" },
            { name: "NOCOMPOSITE", comment: "" }
        ]
    },
    {
        name: "DepthMapSource",
        enums: [
            { name: "IMAGEHIGHLIGHT", comment: "" },
            { name: "LAYERMASK", comment: "" },
            { name: "NONE", comment: "" },
            { name: "TRANSPARENCYCHANNEL", comment: "" }
        ]
    },
    {
        name: "DescValueType",
        enums: [
            { name: "ALIASTYPE", comment: "" },
            { name: "BOOLEANTYPE", comment: "" },
            { name: "CLASSTYPE", comment: "" },
            { name: "DOUBLETYPE", comment: "" },
            { name: "ENUMERATEDTYPE", comment: "" },
            { name: "INTEGERTYPE", comment: "" },
            { name: "LARGEINTEGERTYPE", comment: "" },
            { name: "LISTTYPE", comment: "" },
            { name: "OBJECTTYPE", comment: "" },
            { name: "RAWTYPE", comment: "" },
            { name: "REFERENCETYPE", comment: "" },
            { name: "STRINGTYPE", comment: "" },
            { name: "UNITDOUBLE", comment: "" }
        ]
    },
    {
        name: "DialogModes",
        enums: [
            { name: "ALL", comment: "" },
            { name: "ERROR", comment: "" },
            { name: "NO", comment: "" }
        ]
    },
    {
        name: "Direction",
        enums: [
            { name: "HORIZONTAL", comment: "" },
            { name: "VERTICAL", comment: "" }
        ]
    },
    {
        name: "DisplacementMapType",
        enums: [
            { name: "STRETCHTOFIT", comment: "" },
            { name: "TILE", comment: "" }
        ]
    },
    {
        name: "Dither",
        enums: [
            { name: "DIFFUSION", comment: "" },
            { name: "NOISE", comment: "" },
            { name: "NONE", comment: "" },
            { name: "PATTERN", comment: "" }
        ]
    },
    {
        name: "DocPositionStyle",
        enums: [
            { name: "PRINTCENTERED", comment: "" },
            { name: "USERDEFINED", comment: "" }
        ]
    },
    {
        name: "DocumentFill",
        enums: [
            { name: "BACKGROUNDCOLOR", comment: "" },
            { name: "TRANSPARENT", comment: "" },
            { name: "WHITE", comment: "" }
        ]
    },
    {
        name: "DocumentMode",
        enums: [
            { name: "BITMAP", comment: "" },
            { name: "CMYK", comment: "" },
            { name: "DUOTONE", comment: "" },
            { name: "GRAYSCALE", comment: "" },
            { name: "INDEXEDCOLOR", comment: "" },
            { name: "LAB", comment: "" },
            { name: "MULTICHANNEL", comment: "" },
            { name: "RGB", comment: "" }
        ]
    },
    {
        name: "EditLogItemsType",
        enums: [
            { name: "CONCISE", comment: "" },
            { name: "DETAILED", comment: "" },
            { name: "SESSIONONLY", comment: "" }
        ]
    },
    {
        name: "ElementPlacement",
        enums: [
            { name: "INSIDE", comment: "" },
            { name: "PLACEATBEGINNING", comment: "" },
            { name: "PLACEATEND", comment: "" },
            { name: "PLACEBEFORE", comment: "" },
            { name: "PLACEAFTER", comment: "" }
        ]
    },
    {
        name: "EliminateFields",
        enums: [
            { name: "EVENFIELDS", comment: "" },
            { name: "ODDFIELDS", comment: "" }
        ]
    },
    {
        name: "ExportType",
        enums: [
            { name: "ILLUSTRATORPATHS", comment: "" },
            { name: "SAVEFORWEB", comment: "" }
        ]
    },
    {
        name: "Extension",
        enums: [
            { name: "LOWERCASE", comment: "" },
            { name: "NONE", comment: "" },
            { name: "UPPERCASE", comment: "" }
        ]
    },
    {
        name: "FileNamingType",
        enums: [
            { name: "DDMM", comment: "" },
            { name: "DDMMYY", comment: "" },
            { name: "DOCUMENTNAMELOWER", comment: "" },
            { name: "DOCUMENTNAMEMIXED", comment: "" },
            { name: "DOCUMENTNAMEUPPER", comment: "" },
            { name: "EXTENSIONLOWER", comment: "" },
            { name: "EXTENSIONUPPER", comment: "" },
            { name: "MMDD", comment: "" },
            { name: "MMDDYY", comment: "" },
            { name: "SERIALLETTERLOWER", comment: "" },
            { name: "SERIALLETTERUPPER", comment: "" },
            { name: "SERIALNUMBER1", comment: "" },
            { name: "SERIALNUMBER2", comment: "" },
            { name: "SERIALNUMBER3", comment: "" },
            { name: "SERIALNUMBER4", comment: "" },
            { name: "YYDDMM", comment: "" },
            { name: "YYMMDD", comment: "" },
            { name: "YYYYMMDD", comment: "" }
        ]
    },
    {
        name: "FontPreviewType",
        enums: [
            { name: "HUGE", comment: "" },
            { name: "EXTRALARGE", comment: "" },
            { name: "LARGE", comment: "" },
            { name: "MEDIUM", comment: "" },
            { name: "NONE", comment: "" },
            { name: "SMALL", comment: "" }
        ]
    },
    {
        name: "FontSize",
        enums: [
            { name: "LARGE", comment: "" },
            { name: "MEDIUM", comment: "" },
            { name: "SMALL", comment: "" }
        ]
    },
    {
        name: "ForcedColors",
        enums: [
            { name: "BLACKWHITE", comment: "" },
            { name: "NONE", comment: "" },
            { name: "PRIMARIES", comment: "" },
            { name: "WEB", comment: "" }
        ]
    },
    {
        name: "FormatOptions",
        enums: [
            { name: "OPTIMIZEDBASELINE", comment: "" },
            { name: "PROGRESSIVE", comment: "" },
            { name: "STANDARDBASELINE", comment: "" }
        ]
    },
    {
        name: "GalleryConstrainType",
        enums: [
            { name: "CONSTRAINBOTH", comment: "" },
            { name: "CONSTRAINHEIGHT", comment: "" },
            { name: "CONSTRAINWIDTH", comment: "" }
        ]
    },
    {
        name: "GalleryFontType",
        enums: [
            { name: "ARIAL", comment: "" },
            { name: "COURIERNEW", comment: "" },
            { name: "HELVETICA", comment: "" },
            { name: "TIMESNEWROMAN", comment: "" }
        ]
    },
    {
        name: "GallerySecurityTextColorType",
        enums: [
            { name: "BLACK", comment: "" },
            { name: "CUSTOM", comment: "" },
            { name: "WHITE", comment: "" }
        ]
    },
    {
        name: "GallerySecurityTextRotateType",
        enums: [
            { name: "CENTERED", comment: "" },
            { name: "LOWERLEFT", comment: "" },
            { name: "LOWERRIGHT", comment: "" },
            { name: "UPPERLEFT", comment: "" },
            { name: "UPPERRIGHT", comment: "" }
        ]
    },
    {
        name: "GallerySecurityTextRotateType",
        enums: [
            { name: "CLOCKWISE45", comment: "" },
            { name: "CLOCKWISE90", comment: "" },
            { name: "COUNTERCLOCKWISE45", comment: "" },
            { name: "COUNTERCLOCKWISE90", comment: "" },
            { name: "ZERO", comment: "" }
        ]
    },
    {
        name: "GallerySecurityType",
        enums: [
            { name: "CAPTION", comment: "" },
            { name: "COPYRIGHT", comment: "" },
            { name: "CREDIT", comment: "" },
            { name: "CUSTOMTEXT", comment: "" },
            { name: "FILENAME", comment: "" },
            { name: "NONE", comment: "" },
            { name: "TITLE", comment: "" }
        ]
    },
    {
        name: "GalleryThumbSizeType",
        enums: [
            { name: "CUSTOM", comment: "" },
            { name: "LARGE", comment: "" },
            { name: "MEDIUM", comment: "" },
            { name: "SMALL", comment: "" }
        ]
    },
    {
        name: "Geometry",
        enums: [
            { name: "HEPTAGON", comment: "" },
            { name: "HEXAGON", comment: "" },
            { name: "OCTAGON", comment: "" },
            { name: "PENTAGON", comment: "" },
            { name: "SQUARE", comment: "" },
            { name: "TRIANGLE", comment: "" }
        ]
    },
    {
        name: "GridLineStyle",
        enums: [
            { name: "DASHED", comment: "" },
            { name: "DOTTED", comment: "" },
            { name: "SOLID", comment: "" }
        ]
    },
    {
        name: "GridSize",
        enums: [
            { name: "LARGE", comment: "" },
            { name: "MEDIUM", comment: "" },
            { name: "NONE", comment: "" },
            { name: "SMALL", comment: "" }
        ]
    },
    {
        name: "GuideLineStyle",
        enums: [
            { name: "DASHED", comment: "" },
            { name: "SOLID", comment: "" }
        ]
    },
    {
        name: "IllustratorPathType",
        enums: [
            { name: "ALLPATHS", comment: "" },
            { name: "DOCUMENTBOUNDS ", comment: "" },
            { name: "NAMEDPATH", comment: "" }
        ]
    },
    {
        name: "Intent",
        enums: [
            { name: "ABSOLUTECOLORIMETRIC", comment: "" },
            { name: "PERCEPTUAL", comment: "" },
            { name: "RELATIVECOLORIMETRIC", comment: "" },
            { name: "SATURATION", comment: "" }
        ]
    },
    {
        name: "Justification",
        enums: [
            { name: "CENTER", comment: "" },
            { name: "CENTERJUSTIFIED", comment: "" },
            { name: "FULLYJUSTIFIED", comment: "" },
            { name: "LEFT", comment: "" },
            { name: "LEFTJUSTIFIED", comment: "" },
            { name: "RIGHT", comment: "" },
            { name: "RIGHTJUSTIFIED", comment: "" }
        ]
    },
    {
        name: "Language",
        enums: [
            { name: "BRAZILLIANPORTUGUESE", comment: "" },
            { name: "CANADIANFRENCH", comment: "" },
            { name: "DANISH", comment: "" },
            { name: "DUTCH", comment: "" },
            { name: "ENGLISHUK", comment: "" },
            { name: "ENGLISHUSA", comment: "" },
            { name: "FINNISH", comment: "" },
            { name: "FRENCH", comment: "" },
            { name: "GERMAN", comment: "" },
            { name: "ITALIAN", comment: "" },
            { name: "NORWEGIAN", comment: "" },
            { name: "NYNORSKNORWEGIAN", comment: "" },
            { name: "OLDGERMAN", comment: "" },
            { name: "PORTUGUESE", comment: "" },
            { name: "SPANISH", comment: "" },
            { name: "SWEDISH", comment: "" },
            { name: "SWISSGERMAN", comment: "" }
        ]
    },
    {
        name: "LayerCompression",
        enums: [
            { name: "RLE", comment: "" },
            { name: "ZIP", comment: "" }
        ]
    },
    {
        name: "LayerKind",
        documentation: 'The type of a layer object, in ArtLayer.kind.',
        enums: [
            { name: "BLACKANDWHITE", comment: "" },
            { name: "BRIGHTNESSCONTRAST", comment: "" },
            { name: "CHANNELMIXER", comment: "" },
            { name: "COLORBALANCE", comment: "" },
            { name: "CURVES", comment: "" },
            { name: "EXPOSURE", comment: "" },
            { name: "GRADIENTFILL", comment: "" },
            { name: "GRADIENTMAP", comment: "" },
            { name: "HUESATURATION", comment: "" },
            { name: "INVERSION", comment: "" },
            { name: "LEVELS", comment: "" },
            { name: "NORMAL", comment: "" },
            { name: "PATTERNFILL", comment: "" },
            { name: "PHOTOFILTER", comment: "" },
            { name: "POSTERIZE", comment: "" },
            { name: "SELECTIVECOLOR", comment: "" },
            { name: "SMARTOBJECT", comment: "" },
            { name: "SOLIDFILL", comment: "" },
            { name: "TEXT", comment: "" },
            { name: "THRESHOLD", comment: "" },
            { name: "LAYER3D", comment: "" },
            { name: "VIBRANCE", comment: "" },
            { name: "VIDEO", comment: "" }
        ]
    },
    {
        name: "LensType",
        enums: [
            { name: "MOVIEPRIME", comment: "" },
            { name: "PRIME105", comment: "" },
            { name: "PRIME35", comment: "" },
            { name: "ZOOMLENS", comment: "" }
        ]
    },
    {
        name: "MagnificationType",
        enums: [
            { name: "ACTUALSIZE", comment: "" },
            { name: "FITPAGE", comment: "" }
        ]
    },
    {
        name: "MatteType",
        enums: [
            { name: "BACKGROUND", comment: "" },
            { name: "BLACK", comment: "" },
            { name: "FOREGROUND", comment: "" },
            { name: "NETSCAPE", comment: "" },
            { name: "NONE", comment: "" },
            { name: "SEMIGRAY", comment: "" },
            { name: "WHITE", comment: "" }
        ]
    },
    {
        name: "MeasurementRange",
        enums: [
            { name: "ALLMEASUREMENTS", comment: "" },
            { name: "ACTIVEMEASUREMENTS", comment: "" }
        ]
    },
    {
        name: "MeasurementSource",
        enums: [
            { name: "MEASURESELECTION", comment: "" },
            { name: "MEASURECOUNTTOOL", comment: "" },
            { name: "MEASURERULERTOOL", comment: "" }
        ]
    },
    {
        name: "NewDocumentMode",
        enums: [
            { name: "BITMAP", comment: "" },
            { name: "CMYK", comment: "" },
            { name: "GRAYSCALE", comment: "" },
            { name: "LAB", comment: "" },
            { name: "RGB", comment: "" }
        ]
    },
    {
        name: "NoiseDistribution",
        enums: [
            { name: "GAUSSIAN", comment: "" },
            { name: "UNIFORM", comment: "" }
        ]
    },
    {
        name: "OffsetUndefinedAreas",
        enums: [
            { name: "REPEATEDGEPIXELS", comment: "" },
            { name: "SETTOBACKGROUND", comment: "" },
            { name: "WRAPAROUND", comment: "" }
        ]
    },
    {
        name: "OpenDocumentMode",
        enums: [
            { name: "CMYK", comment: "" },
            { name: "GRAYSCALE", comment: "" },
            { name: "LAB", comment: "" },
            { name: "RGB", comment: "" }
        ]
    },
    {
        name: "OpenDocumentType",
        enums: [
            { name: "ALIASPIX", comment: "" },
            { name: "BMP", comment: "" },
            { name: "CAMERARAW", comment: "" },
            { name: "COMPUSERVEGIF", comment: "" },
            { name: "DICOM", comment: "" },
            { name: "ELECTRICIMAGE", comment: "" },
            { name: "EPS", comment: "" },
            { name: "EPSPICTPREVIEW", comment: "" },
            { name: "EPSTIFFPREVIEW", comment: "" },
            { name: "FILMSTRIP", comment: "" },
            { name: "JPEG", comment: "" },
            { name: "PCX", comment: "" },
            { name: "PDF", comment: "" },
            { name: "PHOTOCD", comment: "" },
            { name: "PHOTOSHOP", comment: "" },
            { name: "PHOTOSHOPDCS_1", comment: "" },
            { name: "PHOTOSHOPDCS_2", comment: "" },
            { name: "PHOTOSHOPEPS", comment: "" },
            { name: "PHOTOSHOPPDF", comment: "" },
            { name: "PICTFILEFORMAT", comment: "" },
            { name: "PICTRESOURCEFORMAT", comment: "" },
            { name: "PIXAR", comment: "" },
            { name: "PNG", comment: "" },
            { name: "PORTABLEBITMAP", comment: "" },
            { name: "RAW", comment: "" },
            { name: "SCITEXCT", comment: "" },
            { name: "SGIRGB", comment: "" },
            { name: "SOFTIMAGE", comment: "" },
            { name: "TARGA", comment: "" },
            { name: "TIFF", comment: "" },
            { name: "WAVEFRONTRLA", comment: "" },
            { name: "WIRELESSBITMAP", comment: "" }
        ]
    },
    {
        name: "OperatingSystem",
        enums: [
            { name: "OS2", comment: "" },
            { name: "WINDOWS", comment: "" }
        ]
    },
    {
        name: "Orientation",
        enums: [
            { name: "LANDSCAPE", comment: "" },
            { name: "PORTRAIT", comment: "" }
        ]
    },
    {
        name: "OtherPaintingCursors",
        enums: [
            { name: "PRECISEOTHER", comment: "" },
            { name: "STANDARDOTHER", comment: "" }
        ]
    },
    {
        name: "PaintingCursors",
        enums: [
            { name: "BRUSHSIZE", comment: "" },
            { name: "PRECISE", comment: "" },
            { name: "STANDARD", comment: "" }
        ]
    },
    {
        name: "PaletteType",
        enums: [
            { name: "EXACT", comment: "" },
            { name: "LOCALADAPTIVE", comment: "" },
            { name: "LOCALPERCEPTUAL", comment: "" },
            { name: "LOCALSELECTIVE", comment: "" },
            { name: "MACOSPALETTE", comment: "" },
            { name: "MASTERADAPTIVE", comment: "" },
            { name: "MASTERPERCEPTUAL", comment: "" },
            { name: "MASTERSELECTIVE", comment: "" },
            { name: "PREVIOUSPALETTE", comment: "" },
            { name: "UNIFORM", comment: "" },
            { name: "WEBPALETTE", comment: "" },
            { name: "WINDOWSPALETTE", comment: "" }
        ]
    },
    {
        name: "PathKind",
        enums: [
            { name: "CLIPPINGPATH", comment: "" },
            { name: "NORMALPATH", comment: "" },
            { name: "TEXTMASK", comment: "" },
            { name: "VECTORMASK", comment: "" },
            { name: "WORKPATH", comment: "" }
        ]
    },
    {
        name: "PDFCompatibility",
        enums: [
            { name: "PDF13", comment: "" },
            { name: "PDF14", comment: "" },
            { name: "PDF15", comment: "" },
            { name: "PDF16", comment: "" },
            { name: "PDF17", comment: "" }
        ]
    },
    {
        name: "PDFResample",
        enums: [
            { name: "JPEG", comment: "" },
            { name: "JPEG2000HIGH", comment: "" },
            { name: "JPEG2000LOSSLESS", comment: "" },
            { name: "JPEG2000LOW", comment: "" },
            { name: "JPEG2000MED", comment: "" },
            { name: "JPEG2000MEDHIGH", comment: "" },
            { name: "JPEG2000MEDLOW", comment: "" },
            { name: "JPEGHIGH", comment: "" },
            { name: "JPEGLOW", comment: "" },
            { name: "JPEGMED", comment: "" },
            { name: "JPEGMEDHIGH", comment: "" },
            { name: "JPEGMEDLOW", comment: "" },
            { name: "NONE", comment: "" },
            { name: "PDFZIP", comment: "" },
            { name: "PDFZIP4BIT", comment: "" }
        ]
    },
    {
        name: "PDFResample",
        enums: [
            { name: "NONE", comment: "" },
            { name: "PDFAVERAGE", comment: "" },
            { name: "PDFBICUBIC", comment: "" },
            { name: "PDFSUBSAMPLE", comment: "" }
        ]
    },
    {
        name: "PDFStandard",
        enums: [
            { name: "NONE", comment: "" },
            { name: "PDFX1A2001", comment: "" },
            { name: "PDFX1A2003", comment: "" },
            { name: "PDFX32002", comment: "" },
            { name: "PDFX32003", comment: "" },
            { name: "PDFX42008", comment: "" }
        ]
    },
    {
        name: "PhotoCDColorSpace",
        enums: [
            { name: "LAB16", comment: "" },
            { name: "LAB8", comment: "" },
            { name: "RGB16", comment: "" },
            { name: "RGB8", comment: "" }
        ]
    },
    {
        name: "PhotoCDSize",
        enums: [
            { name: "EXTRALARGE", comment: "" },
            { name: "LARGE", comment: "" },
            { name: "MAXIMUM", comment: "" },
            { name: "MEDIUM", comment: "" },
            { name: "MINIMUM", comment: "" },
            { name: "SMALL", comment: "" }
        ]
    },
    {
        name: "PICTBitsPerPixels",
        enums: [
            { name: "EIGHT", comment: "" },
            { name: "FOUR", comment: "" },
            { name: "SIXTEEN", comment: "" },
            { name: "THIRTYTWO", comment: "" },
            { name: "TWO", comment: "" }
        ]
    },
    {
        name: "PICTCompression",
        enums: [
            { name: "JPEGHIGHPICT", comment: "" },
            { name: "JPEGLOWPICT", comment: "" },
            { name: "JPEGMAXIMUMPICT", comment: "" },
            { name: "JPEGMEDIUMPICT", comment: "" },
            { name: "NONE", comment: "" }
        ]
    },
    {
        name: "PicturePackageTextType",
        enums: [
            { name: "CAPTION", comment: "" },
            { name: "COPYRIGHT", comment: "" },
            { name: "CREDIT", comment: "" },
            { name: "FILENAME", comment: "" },
            { name: "NONE", comment: "" },
            { name: "ORIGIN", comment: "" },
            { name: "USER", comment: "" }
        ]
    },
    {
        name: "PointKind",
        enums: [
            { name: "CORNERPOINT", comment: "" },
            { name: "SMOOTHPOINT", comment: "" }
        ]
    },
    {
        name: "PointType",
        enums: [
            { name: "POSTSCRIPT", comment: "" },
            { name: "TRADITIONAL", comment: "" }
        ]
    },
    {
        name: "PolarConversionType",
        enums: [
            { name: "POLARTORECTANGULAR", comment: "" },
            { name: "RECTANGULARTOPOLAR", comment: "" }
        ]
    },
    {
        name: "Preview",
        enums: [
            { name: "EIGHTBITTIFF", comment: "" },
            { name: "MACOSEIGHTBIT", comment: "" },
            { name: "MACOSJPEG", comment: "" },
            { name: "MACOSMONOCHROME", comment: "" },
            { name: "MONOCHROMETIFF", comment: "" },
            { name: "NONE", comment: "" }
        ]
    },
    {
        name: "PrintColorHandling",
        enums: [
            { name: "PRINTERMANAGED", comment: "" },
            { name: "PHOTOSHOPMANAGED", comment: "" },
            { name: "SEPARATIONS", comment: "" }
        ]
    },
    {
        name: "PurgeTarget",
        enums: [
            { name: "ALLCACHES", comment: "" },
            { name: "CLIPBOARDCACHE", comment: "" },
            { name: "HISTORYCACHES", comment: "" },
            { name: "UNDOCACHES", comment: "" }
        ]
    },
    {
        name: "QueryStateType",
        enums: [
            { name: "ALWAYS", comment: "" },
            { name: "ASK", comment: "" },
            { name: "NEVER", comment: "" }
        ]
    },
    {
        name: "RadialBlurMethod",
        enums: [
            { name: "SPIN", comment: "" },
            { name: "ZOOM", comment: "" }
        ]
    },
    {
        name: "RadialBlurQuality",
        enums: [
            { name: "BEST", comment: "" },
            { name: "DRAFT", comment: "" },
            { name: "GOOD", comment: "" }
        ]
    },
    {
        name: "RasterizeType",
        enums: [
            { name: "ENTIRELAYER", comment: "" },
            { name: "FILLCONTENT", comment: "" },
            { name: "LAYERCLIPPINGPATH", comment: "" },
            { name: "LINKEDLAYERS", comment: "" },
            { name: "SHAPE", comment: "" },
            { name: "TEXTCONTENTS", comment: "" }
        ]
    },
    {
        name: "ReferenceFormType",
        enums: [
            { name: "CLASSTYPE", comment: "" },
            { name: "ENUMERATED", comment: "" },
            { name: "IDENTIFIER", comment: "" },
            { name: "INDEX", comment: "" },
            { name: "NAME", comment: "" },
            { name: "OFFSET", comment: "" },
            { name: "PROPERTY", comment: "" }
        ]
    },
    {
        name: "ResampleMethod",
        enums: [
            { name: "AUTOMATIC", comment: "" },
            { name: "BICUBIC", comment: "" },
            { name: "BICUBICAUTOMATIC", comment: "" },
            { name: "BICUBICSHARPER", comment: "" },
            { name: "BICUBICSMOOTHER", comment: "" },
            { name: "BILINEAR", comment: "" },
            { name: "NEARESTNEIGHBOR", comment: "" },
            { name: "NONE", comment: "" },
            { name: "PRESERVEDETAILS", comment: "" }
        ]
    },
    {
        name: "RippleSize",
        enums: [
            { name: "LARGE", comment: "" },
            { name: "MEDIUM", comment: "" },
            { name: "SMALL", comment: "" }
        ]
    },
    {
        name: "SaveBehavior",
        enums: [
            { name: "ALWAYSSAVE", comment: "" },
            { name: "ASKWHENSAVING", comment: "" },
            { name: "NEVERSAVE", comment: "" }
        ]
    },
    {
        name: "SaveDocumentType",
        enums: [
            { name: "ALIASPIX", comment: "" },
            { name: "BMP", comment: "" },
            { name: "COMPUSERVEGIF", comment: "" },
            { name: "ELECTRICIMAGE", comment: "" },
            { name: "JPEG", comment: "" },
            { name: "PCX", comment: "" },
            { name: "PHOTOSHOP", comment: "" },
            { name: "PHOTOSHOPDCS_1", comment: "" },
            { name: "PHOTOSHOPDCS_2", comment: "" },
            { name: "PHOTOSHOPEPS", comment: "" },
            { name: "PHOTOSHOPPDF", comment: "" },
            { name: "PICTFileFORMAT", comment: "" },
            { name: "PICTRESOURCEFORMAT", comment: "" },
            { name: "PIXAR", comment: "" },
            { name: "PNG", comment: "" },
            { name: "PORTABLEBITMAP", comment: "" },
            { name: "RAW", comment: "" },
            { name: "SCITEXCT", comment: "" },
            { name: "SGIRGB", comment: "" },
            { name: "SOFTIMAGE", comment: "" },
            { name: "TARGA", comment: "" },
            { name: "TIFF", comment: "" },
            { name: "WAVEFRONTRLA", comment: "" },
            { name: "WIRELESSBITMAP", comment: "" }
        ]
    },
    {
        name: "SaveEncoding",
        enums: [
            { name: "ASCII", comment: "" },
            { name: "BINARY", comment: "" },
            { name: "JPEGHIGH", comment: "" },
            { name: "JPEGLOW", comment: "" },
            { name: "JPEGMAXIMUM", comment: "" },
            { name: "JPEGMEDIUM", comment: "" }
        ]
    },
    {
        name: "SaveLogItemsType",
        enums: [
            { name: "LOGFILE", comment: "" },
            { name: "LOGFILEANDMETADATA", comment: "" },
            { name: "METADATA", comment: "" }
        ]
    },
    {
        name: "SaveOptions",
        enums: [
            { name: "DONOTSAVECHANGES", comment: "" },
            { name: "PROMPTTOSAVECHANGES", comment: "" },
            { name: "SAVECHANGES", comment: "" }
        ]
    },
    {
        name: "SelectionType",
        enums: [
            { name: "DIMINISH", comment: "" },
            { name: "EXTEND", comment: "" },
            { name: "INTERSECT", comment: "" },
            { name: "REPLACE", comment: "" }
        ]
    },
    {
        name: "ShapeOperation",
        enums: [
            { name: "SHAPEADD", comment: "" },
            { name: "SHAPEINTERSECT", comment: "" },
            { name: "SHAPESUBTRACT", comment: "" },
            { name: "SHAPEXOR", comment: "" }
        ]
    },
    {
        name: "SmartBlurMode",
        enums: [
            { name: "EDGEONLY", comment: "" },
            { name: "NORMAL", comment: "" },
            { name: "OVERLAYEDGE", comment: "" }
        ]
    },
    {
        name: "SmartBlurQuality",
        enums: [
            { name: "HIGH", comment: "" },
            { name: "LOW", comment: "" },
            { name: "MEDIUM", comment: "" }
        ]
    },
    {
        name: "SourceSpaceType",
        enums: [
            { name: "DOCUMENT", comment: "" },
            { name: "PROOF", comment: "" }
        ]
    },
    {
        name: "SpherizeMode",
        enums: [
            { name: "HORIZONTAL", comment: "" },
            { name: "NORMAL", comment: "" },
            { name: "VERTICAL", comment: "" }
        ]
    },
    {
        name: "StrikeThruType",
        enums: [
            { name: "STRIKEBOX", comment: "" },
            { name: "STRIKEHEIGHT", comment: "" },
            { name: "STRIKEOFF", comment: "" }
        ]
    },
    {
        name: "StrokeLocation",
        enums: [
            { name: "CENTER", comment: "" },
            { name: "INSIDE", comment: "" },
            { name: "OUTSIDE", comment: "" }
        ]
    },
    {
        name: "TargaBitsPerPixels",
        enums: [
            { name: "SIXTEEN", comment: "" },
            { name: "THIRTYTWO", comment: "" },
            { name: "TWENTYFOUR", comment: "" }
        ]
    },
    {
        name: "TextComposer",
        enums: [
            { name: "ALLCAPS", comment: "" },
            { name: "NORMAL", comment: "" },
            { name: "SMALLCAPS", comment: "" }
        ]
    },
    {
        name: "TextComposer",
        enums: [
            { name: "ADOBEEVERYLINE", comment: "" },
            { name: "ADOBESINGLELINE", comment: "" }
        ]
    },
    {
        name: "TextType",
        enums: [
            { name: "PARAGRAPHTEXT", comment: "" },
            { name: "POINTTEXT", comment: "" }
        ]
    },
    {
        name: "TextureType",
        enums: [
            { name: "BLOCKS", comment: "" },
            { name: "CANVAS", comment: "" },
            { name: "FILE", comment: "" },
            { name: "FROSTED", comment: "" },
            { name: "TINYLENS", comment: "" }
        ]
    },
    {
        name: "TIFFEncoding",
        enums: [
            { name: "JPEG", comment: "" },
            { name: "NONE", comment: "" },
            { name: "TIFFLZW", comment: "" },
            { name: "TIFFZIP", comment: "" }
        ]
    },
    {
        name: "ToolType",
        enums: [
            { name: "ARTHISTORYBRUSH", comment: "" },
            { name: "BACKGROUNDERASER", comment: "" },
            { name: "BLUR", comment: "" },
            { name: "BRUSH", comment: "" },
            { name: "BURN", comment: "" },
            { name: "CLONESTAMP", comment: "" },
            { name: "COLORREPLACEMENTTOOL", comment: "" },
            { name: "DODGE", comment: "" },
            { name: "ERASER", comment: "" },
            { name: "HEALINGBRUSH", comment: "" },
            { name: "HISTORYBRUSH", comment: "" },
            { name: "PATTERNSTAMP", comment: "" },
            { name: "PENCIL", comment: "" },
            { name: "SHARPEN", comment: "" },
            { name: "SMUDGE", comment: "" },
            { name: "SPONGE", comment: "" }
        ]
    },
    {
        name: "TransitionType",
        enums: [
            { name: "BLINDSHORIZONTAL", comment: "" },
            { name: "BLINDSVERTICAL", comment: "" },
            { name: "BOXIN", comment: "" },
            { name: "BOXOUT", comment: "" },
            { name: "DISSOLVE", comment: "" },
            { name: "GLITTERDOWN", comment: "" },
            { name: "GLITTERRIGHT", comment: "" },
            { name: "GLITTERRIGHTDOWN", comment: "" },
            { name: "NONE", comment: "" },
            { name: "RANDOM", comment: "" },
            { name: "SPLITHORIZONTALIN", comment: "" },
            { name: "SPLITHORIZONTALOUT", comment: "" },
            { name: "SPLITVERTICALIN", comment: "" },
            { name: "SPLITVERTICALOUT", comment: "" },
            { name: "WIPEDOWN", comment: "" },
            { name: "WIPELEFT", comment: "" },
            { name: "WIPERIGHT", comment: "" },
            { name: "WIPEUP", comment: "" }
        ]
    },
    {
        name: "TrimType",
        enums: [
            { name: "BOTTOMRIGHT", comment: "" },
            { name: "TOPLEFT", comment: "" },
            { name: "TRANSPARENT", comment: "" }
        ]
    },
    {
        name: "TypeUnits",
        enums: [
            { name: "MM", comment: "" },
            { name: "PIXELS", comment: "" },
            { name: "POINTS", comment: "" }
        ]
    },
    {
        name: "UndefinedAreas",
        enums: [
            { name: "REPEATEDGEPIXELS", comment: "" },
            { name: "WRAPAROUND", comment: "" }
        ]
    },
    {
        name: "UnderlineType",
        enums: [
            { name: "UNDERLINELEFT", comment: "" },
            { name: "UNDERLINEOFF", comment: "" },
            { name: "UNDERLINERIGHT", comment: "" }
        ]
    },
    {
        name: "Units",
        enums: [
            { name: "CM", comment: "" },
            { name: "INCHES", comment: "" },
            { name: "MM", comment: "" },
            { name: "PERCENT", comment: "" },
            { name: "PICAS", comment: "" },
            { name: "PIXELS", comment: "" },
            { name: "POINTS", comment: "" }
        ]
    },
    {
        name: "Urgency",
        enums: [
            { name: "FOUR", comment: "" },
            { name: "HIGH", comment: "" },
            { name: "LOW", comment: "" },
            { name: "NONE", comment: "" },
            { name: "NORMAL", comment: "" },
            { name: "SEVEN", comment: "" },
            { name: "SIX", comment: "" },
            { name: "THREE", comment: "" },
            { name: "TWO", comment: "" }
        ]
    },
    {
        name: "WarpStyle",
        enums: [
            { name: "ARC", comment: "" },
            { name: "ARCH", comment: "" },
            { name: "ARCLOWER", comment: "" },
            { name: "ARCUPPER", comment: "" },
            { name: "BULGE", comment: "" },
            { name: "FISH", comment: "" },
            { name: "FISHEYE", comment: "" },
            { name: "FLAG", comment: "" },
            { name: "INFLATE", comment: "" },
            { name: "NONE", comment: "" },
            { name: "RISE", comment: "" },
            { name: "SHELLLOWER", comment: "" },
            { name: "SHELLUPPER", comment: "" },
            { name: "SQUEEZE", comment: "" },
            { name: "TWIST", comment: "" },
            { name: "WAVE", comment: "" }
        ]
    },
    {
        name: "WaveType",
        enums: [
            { name: "SINE", comment: "" },
            { name: "SQUARE", comment: "" },
            { name: "TRIANGULAR", comment: "" }
        ]
    },
    {
        name: "WhiteBalanceType",
        enums: [
            { name: "ASSHOT", comment: "" },
            { name: "AUTO", comment: "" },
            { name: "CLOUDY", comment: "" },
            { name: "CUSTOM", comment: "" },
            { name: "DAYLIGHT", comment: "" },
            { name: "FLASH", comment: "" },
            { name: "FLUORESCENT", comment: "" },
            { name: "SHADE", comment: "" },
            { name: "TUNGSTEN", comment: "" }
        ]
    },
    {
        name: "ZigZagType",
        enums: [
            { name: "AROUNDCENTER", comment: "" },
            { name: "OUTFROMCENTER", comment: "" },
            { name: "PONDRIPPLES", comment: "" }
        ]
    }
];
//# sourceMappingURL=ps.enums.js.map