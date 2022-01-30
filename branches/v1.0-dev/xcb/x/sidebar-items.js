initSidebarItems({"constant":[["ATOM_ARC",""],["ATOM_ATOM",""],["ATOM_BITMAP",""],["ATOM_CAP_HEIGHT",""],["ATOM_CARDINAL",""],["ATOM_COLORMAP",""],["ATOM_COPYRIGHT",""],["ATOM_CURSOR",""],["ATOM_CUT_BUFFER0",""],["ATOM_CUT_BUFFER1",""],["ATOM_CUT_BUFFER2",""],["ATOM_CUT_BUFFER3",""],["ATOM_CUT_BUFFER4",""],["ATOM_CUT_BUFFER5",""],["ATOM_CUT_BUFFER6",""],["ATOM_CUT_BUFFER7",""],["ATOM_DRAWABLE",""],["ATOM_END_SPACE",""],["ATOM_FAMILY_NAME",""],["ATOM_FONT",""],["ATOM_FONT_NAME",""],["ATOM_FULL_NAME",""],["ATOM_INTEGER",""],["ATOM_ITALIC_ANGLE",""],["ATOM_MAX_SPACE",""],["ATOM_MIN_SPACE",""],["ATOM_NONE",""],["ATOM_NORM_SPACE",""],["ATOM_NOTICE",""],["ATOM_PIXMAP",""],["ATOM_POINT",""],["ATOM_POINT_SIZE",""],["ATOM_PRIMARY",""],["ATOM_QUAD_WIDTH",""],["ATOM_RECTANGLE",""],["ATOM_RESOLUTION",""],["ATOM_RESOURCE_MANAGER",""],["ATOM_RGB_BEST_MAP",""],["ATOM_RGB_BLUE_MAP",""],["ATOM_RGB_COLOR_MAP",""],["ATOM_RGB_DEFAULT_MAP",""],["ATOM_RGB_GRAY_MAP",""],["ATOM_RGB_GREEN_MAP",""],["ATOM_RGB_RED_MAP",""],["ATOM_SECONDARY",""],["ATOM_STRIKEOUT_ASCENT",""],["ATOM_STRIKEOUT_DESCENT",""],["ATOM_STRING",""],["ATOM_SUBSCRIPT_X",""],["ATOM_SUBSCRIPT_Y",""],["ATOM_SUPERSCRIPT_X",""],["ATOM_SUPERSCRIPT_Y",""],["ATOM_UNDERLINE_POSITION",""],["ATOM_UNDERLINE_THICKNESS",""],["ATOM_VISUALID",""],["ATOM_WEIGHT",""],["ATOM_WINDOW",""],["ATOM_WM_CLASS",""],["ATOM_WM_CLIENT_MACHINE",""],["ATOM_WM_COMMAND",""],["ATOM_WM_HINTS",""],["ATOM_WM_ICON_NAME",""],["ATOM_WM_ICON_SIZE",""],["ATOM_WM_NAME",""],["ATOM_WM_NORMAL_HINTS",""],["ATOM_WM_SIZE_HINTS",""],["ATOM_WM_TRANSIENT_FOR",""],["ATOM_WM_ZOOM_HINTS",""],["ATOM_X_HEIGHT",""],["BACKPIXMAP_NONE",""],["BACKPIXMAP_PARENT_RELATIVE",""],["COLORMAP_NONE",""],["COPY_FROM_PARENT","`COPY_FROM_PARENT` can be used for many `CreateWindow` fields"],["CURRENT_TIME","`CURRENT_TIME` can be used in most requests that take a `Timestamp`"],["CURSOR_NONE",""],["FONT_NONE",""],["GETPROPERTYTYPE_ANY",""],["GRAB_ANY","`GRAB_ANY` can be used in various requests such as `GrabKey`, `UngrabKey`, `xinput::GrabDeviceKey`…"],["INPUTFOCUS_FOLLOW_KEYBOARD","NOT YET DOCUMENTED. Only relevant for the xinput extension."],["INPUTFOCUS_NONE","The focus reverts to `XCB_NONE`, so no window will have the input focus."],["INPUTFOCUS_PARENT","The focus reverts to the parent (or closest viewable ancestor) and the new revert_to value is `XCB_INPUT_FOCUS_NONE`."],["INPUTFOCUS_POINTER_ROOT","The focus reverts to `XCB_POINTER_ROOT` respectively. When the focus reverts, FocusIn and FocusOut events are generated, but the last-focus-change time is not changed."],["NO_SYMBOL","`NO_SYMBOL` fills in unused entries in `Keysym` tables"],["PIXMAP_NONE",""],["WINDOW_NONE",""]],"enum":[["AccessControl",""],["Allow",""],["ArcMode",""],["AutoRepeatMode",""],["BackingStore",""],["Blanking",""],["ButtonIndex",""],["CapStyle",""],["Circulate",""],["ClientMessageData",""],["ClipOrdering",""],["CloseDown",""],["ColormapAlloc",""],["ColormapState",""],["ConfigWindow",""],["CoordMode",""],["Cw",""],["Drawable",""],["Error","Unified error type for the X core protocol"],["Event","Unified event type for the X core protocol"],["Exposures",""],["Family",""],["FillRule",""],["FillStyle",""],["FontDraw",""],["Fontable",""],["Gc",""],["Grab",""],["GrabMode",""],["GrabStatus",""],["Gravity",""],["Gx",""],["HostMode",""],["ImageFormat",""],["ImageOrder",""],["InputFocus",""],["JoinStyle",""],["Kb",""],["Kill",""],["LedMode",""],["LineStyle",""],["MapIndex",""],["MapState",""],["Mapping",""],["MappingStatus",""],["Motion",""],["NotifyDetail",""],["NotifyMode",""],["Place",""],["PolyShape",""],["PropMode",""],["Property",""],["QueryShapeOf",""],["ScreenSaver",""],["SendEventDest",""],["SetMode",""],["StackMode",""],["SubwindowMode",""],["Time",""],["Visibility",""],["VisualClass",""],["WindowClass",""]],"struct":[["AllocColor","Allocate a color"],["AllocColorCells","The `AllocColorCells` request."],["AllocColorCellsCookie","Cookie type for [AllocColorCells]."],["AllocColorCellsCookieUnchecked","Unchecked cookie type for [AllocColorCells]."],["AllocColorCellsReply","Reply type for [AllocColorCells]."],["AllocColorCookie","Cookie type for [AllocColor]."],["AllocColorCookieUnchecked","Unchecked cookie type for [AllocColor]."],["AllocColorPlanes","The `AllocColorPlanes` request."],["AllocColorPlanesCookie","Cookie type for [AllocColorPlanes]."],["AllocColorPlanesCookieUnchecked","Unchecked cookie type for [AllocColorPlanes]."],["AllocColorPlanesReply","Reply type for [AllocColorPlanes]."],["AllocColorReply","Reply type for [AllocColor]."],["AllocNamedColor","The `AllocNamedColor` request."],["AllocNamedColorCookie","Cookie type for [AllocNamedColor]."],["AllocNamedColorCookieUnchecked","Unchecked cookie type for [AllocNamedColor]."],["AllocNamedColorReply","Reply type for [AllocNamedColor]."],["AllowEvents","release queued events"],["Arc",""],["Atom",""],["Bell","The `Bell` request."],["ButtonMask",""],["ButtonPressEvent","a mouse button was pressed/released"],["ChangeActivePointerGrab","The `ChangeActivePointerGrab` request."],["ChangeGc","change graphics context components"],["ChangeHosts","The `ChangeHosts` request."],["ChangeKeyboardControl","The `ChangeKeyboardControl` request."],["ChangeKeyboardMapping","The `ChangeKeyboardMapping` request."],["ChangePointerControl","The `ChangePointerControl` request."],["ChangeProperty","Changes a window property"],["ChangeSaveSet","Changes a client’s save set"],["ChangeWindowAttributes","change window attributes"],["Char2b",""],["Charinfo",""],["CirculateNotifyEvent","NOT YET DOCUMENTED"],["CirculateWindow","Change window stacking order"],["ClearArea","The `ClearArea` request."],["ClientMessageEvent","NOT YET DOCUMENTED"],["CloseFont","The `CloseFont` request."],["ColorFlag",""],["Coloritem",""],["Colormap",""],["ColormapNotifyEvent","the colormap for some window changed"],["ConfigWindowMask",""],["ConfigWindowParams",""],["ConfigureNotifyEvent","NOT YET DOCUMENTED"],["ConfigureRequestEvent","The `ConfigureRequestEvent` event."],["ConfigureWindow","Configures window attributes"],["ConvertSelection","The `ConvertSelection` request."],["CopyArea","copy areas"],["CopyColormapAndFree","The `CopyColormapAndFree` request."],["CopyGc","The `CopyGc` request."],["CopyPlane","The `CopyPlane` request."],["CreateColormap","The `CreateColormap` request."],["CreateCursor","The `CreateCursor` request."],["CreateGc","Creates a graphics context"],["CreateGlyphCursor","create cursor"],["CreateNotifyEvent","The `CreateNotifyEvent` event."],["CreatePixmap","Creates a pixmap"],["CreateWindow","Creates a window"],["Cursor",""],["CwMask",""],["CwParams",""],["DeleteProperty","The `DeleteProperty` request."],["Depth",""],["DepthBuf",""],["DepthIterator",""],["DestroyNotifyEvent","a window is destroyed"],["DestroySubwindows","The `DestroySubwindows` request."],["DestroyWindow","Destroys a window"],["EnterNotifyEvent","the pointer is in a different window"],["EventMask",""],["ExposeEvent","NOT YET DOCUMENTED"],["FillPoly","The `FillPoly` request."],["FocusInEvent","NOT YET DOCUMENTED"],["Font",""],["Fontprop",""],["ForceScreenSaver","The `ForceScreenSaver` request."],["Format",""],["FreeColormap","The `FreeColormap` request."],["FreeColors","The `FreeColors` request."],["FreeCursor","Deletes a cursor"],["FreeGc","Destroys a graphics context"],["FreePixmap","Destroys a pixmap"],["GcMask",""],["GcParams",""],["Gcontext",""],["GetAtomName","The `GetAtomName` request."],["GetAtomNameCookie","Cookie type for [GetAtomName]."],["GetAtomNameCookieUnchecked","Unchecked cookie type for [GetAtomName]."],["GetAtomNameReply","Reply type for [GetAtomName]."],["GetFontPath","The `GetFontPath` request."],["GetFontPathCookie","Cookie type for [GetFontPath]."],["GetFontPathCookieUnchecked","Unchecked cookie type for [GetFontPath]."],["GetFontPathReply","Reply type for [GetFontPath]."],["GetGeometry","Get current window geometry"],["GetGeometryCookie","Cookie type for [GetGeometry]."],["GetGeometryCookieUnchecked","Unchecked cookie type for [GetGeometry]."],["GetGeometryReply",""],["GetImage","The `GetImage` request."],["GetImageCookie","Cookie type for [GetImage]."],["GetImageCookieUnchecked","Unchecked cookie type for [GetImage]."],["GetImageReply","Reply type for [GetImage]."],["GetInputFocus","The `GetInputFocus` request."],["GetInputFocusCookie","Cookie type for [GetInputFocus]."],["GetInputFocusCookieUnchecked","Unchecked cookie type for [GetInputFocus]."],["GetInputFocusReply","Reply type for [GetInputFocus]."],["GetKeyboardControl","The `GetKeyboardControl` request."],["GetKeyboardControlCookie","Cookie type for [GetKeyboardControl]."],["GetKeyboardControlCookieUnchecked","Unchecked cookie type for [GetKeyboardControl]."],["GetKeyboardControlReply","Reply type for [GetKeyboardControl]."],["GetKeyboardMapping","The `GetKeyboardMapping` request."],["GetKeyboardMappingCookie","Cookie type for [GetKeyboardMapping]."],["GetKeyboardMappingCookieUnchecked","Unchecked cookie type for [GetKeyboardMapping]."],["GetKeyboardMappingReply","Reply type for [GetKeyboardMapping]."],["GetModifierMapping","The `GetModifierMapping` request."],["GetModifierMappingCookie","Cookie type for [GetModifierMapping]."],["GetModifierMappingCookieUnchecked","Unchecked cookie type for [GetModifierMapping]."],["GetModifierMappingReply","Reply type for [GetModifierMapping]."],["GetMotionEvents","The `GetMotionEvents` request."],["GetMotionEventsCookie","Cookie type for [GetMotionEvents]."],["GetMotionEventsCookieUnchecked","Unchecked cookie type for [GetMotionEvents]."],["GetMotionEventsReply","Reply type for [GetMotionEvents]."],["GetPointerControl","The `GetPointerControl` request."],["GetPointerControlCookie","Cookie type for [GetPointerControl]."],["GetPointerControlCookieUnchecked","Unchecked cookie type for [GetPointerControl]."],["GetPointerControlReply","Reply type for [GetPointerControl]."],["GetPointerMapping","The `GetPointerMapping` request."],["GetPointerMappingCookie","Cookie type for [GetPointerMapping]."],["GetPointerMappingCookieUnchecked","Unchecked cookie type for [GetPointerMapping]."],["GetPointerMappingReply","Reply type for [GetPointerMapping]."],["GetProperty","Gets a window property"],["GetPropertyCookie","Cookie type for [GetProperty]."],["GetPropertyCookieUnchecked","Unchecked cookie type for [GetProperty]."],["GetPropertyReply",""],["GetScreenSaver","The `GetScreenSaver` request."],["GetScreenSaverCookie","Cookie type for [GetScreenSaver]."],["GetScreenSaverCookieUnchecked","Unchecked cookie type for [GetScreenSaver]."],["GetScreenSaverReply","Reply type for [GetScreenSaver]."],["GetSelectionOwner","Gets the owner of a selection"],["GetSelectionOwnerCookie","Cookie type for [GetSelectionOwner]."],["GetSelectionOwnerCookieUnchecked","Unchecked cookie type for [GetSelectionOwner]."],["GetSelectionOwnerReply",""],["GetWindowAttributes","Gets window attributes"],["GetWindowAttributesCookie","Cookie type for [GetWindowAttributes]."],["GetWindowAttributesCookieUnchecked","Unchecked cookie type for [GetWindowAttributes]."],["GetWindowAttributesReply",""],["GrabButton","Grab pointer button(s)"],["GrabKey","Grab keyboard key(s)"],["GrabKeyboard","Grab the keyboard"],["GrabKeyboardCookie","Cookie type for [GrabKeyboard]."],["GrabKeyboardCookieUnchecked","Unchecked cookie type for [GrabKeyboard]."],["GrabKeyboardReply","Reply type for [GrabKeyboard]."],["GrabPointer","Grab the pointer"],["GrabPointerCookie","Cookie type for [GrabPointer]."],["GrabPointerCookieUnchecked","Unchecked cookie type for [GrabPointer]."],["GrabPointerReply","Reply type for [GrabPointer]."],["GrabServer","The `GrabServer` request."],["GraphicsExposureEvent","The `GraphicsExposureEvent` event."],["GravityNotifyEvent","The `GravityNotifyEvent` event."],["Host",""],["HostBuf",""],["HostIterator",""],["ImageText16","Draws text"],["ImageText8","Draws text"],["InstallColormap","The `InstallColormap` request."],["InternAtom","Get atom identifier by name"],["InternAtomCookie","Cookie type for [InternAtom]."],["InternAtomCookieUnchecked","Unchecked cookie type for [InternAtom]."],["InternAtomReply","Reply type for [InternAtom]."],["KbMask",""],["KbParams",""],["KeyButMask",""],["KeyPressEvent","a key was pressed/released"],["KeymapNotifyEvent","The `KeymapNotifyEvent` event."],["KillClient","kills a client"],["ListExtensions","The `ListExtensions` request."],["ListExtensionsCookie","Cookie type for [ListExtensions]."],["ListExtensionsCookieUnchecked","Unchecked cookie type for [ListExtensions]."],["ListExtensionsReply","Reply type for [ListExtensions]."],["ListFonts","get matching font names"],["ListFontsCookie","Cookie type for [ListFonts]."],["ListFontsCookieUnchecked","Unchecked cookie type for [ListFonts]."],["ListFontsReply",""],["ListFontsWithInfo","get matching font names and information"],["ListFontsWithInfoCookie","Cookie type for [ListFontsWithInfo]."],["ListFontsWithInfoCookieUnchecked","Unchecked cookie type for [ListFontsWithInfo]."],["ListFontsWithInfoReply",""],["ListHosts","The `ListHosts` request."],["ListHostsCookie","Cookie type for [ListHosts]."],["ListHostsCookieUnchecked","Unchecked cookie type for [ListHosts]."],["ListHostsReply","Reply type for [ListHosts]."],["ListInstalledColormaps","The `ListInstalledColormaps` request."],["ListInstalledColormapsCookie","Cookie type for [ListInstalledColormaps]."],["ListInstalledColormapsCookieUnchecked","Unchecked cookie type for [ListInstalledColormaps]."],["ListInstalledColormapsReply","Reply type for [ListInstalledColormaps]."],["ListProperties","The `ListProperties` request."],["ListPropertiesCookie","Cookie type for [ListProperties]."],["ListPropertiesCookieUnchecked","Unchecked cookie type for [ListProperties]."],["ListPropertiesReply","Reply type for [ListProperties]."],["LookupColor","The `LookupColor` request."],["LookupColorCookie","Cookie type for [LookupColor]."],["LookupColorCookieUnchecked","Unchecked cookie type for [LookupColor]."],["LookupColorReply","Reply type for [LookupColor]."],["MapNotifyEvent","a window was mapped"],["MapRequestEvent","window wants to be mapped"],["MapSubwindows","The `MapSubwindows` request."],["MapWindow","Makes a window visible"],["MappingNotifyEvent","keyboard mapping changed"],["ModMask",""],["MotionNotifyEvent","a key was pressed"],["NoExposureEvent","The `NoExposureEvent` event."],["NoOperation","The `NoOperation` request."],["OpenFont","opens a font"],["Pixmap",""],["Point",""],["PolyArc","The `PolyArc` request."],["PolyFillArc","The `PolyFillArc` request."],["PolyFillRectangle","Fills rectangles"],["PolyLine","Draw lines"],["PolyPoint","The `PolyPoint` request."],["PolyRectangle","The `PolyRectangle` request."],["PolySegment","Draw lines"],["PolyText16","The `PolyText16` request."],["PolyText8","The `PolyText8` request."],["PropertyNotifyEvent","a window property changed"],["PutImage","The `PutImage` request."],["QueryBestSize","The `QueryBestSize` request."],["QueryBestSizeCookie","Cookie type for [QueryBestSize]."],["QueryBestSizeCookieUnchecked","Unchecked cookie type for [QueryBestSize]."],["QueryBestSizeReply","Reply type for [QueryBestSize]."],["QueryColors","The `QueryColors` request."],["QueryColorsCookie","Cookie type for [QueryColors]."],["QueryColorsCookieUnchecked","Unchecked cookie type for [QueryColors]."],["QueryColorsReply","Reply type for [QueryColors]."],["QueryExtension","check if extension is present"],["QueryExtensionCookie","Cookie type for [QueryExtension]."],["QueryExtensionCookieUnchecked","Unchecked cookie type for [QueryExtension]."],["QueryExtensionReply",""],["QueryFont","query font metrics"],["QueryFontCookie","Cookie type for [QueryFont]."],["QueryFontCookieUnchecked","Unchecked cookie type for [QueryFont]."],["QueryFontReply",""],["QueryKeymap","The `QueryKeymap` request."],["QueryKeymapCookie","Cookie type for [QueryKeymap]."],["QueryKeymapCookieUnchecked","Unchecked cookie type for [QueryKeymap]."],["QueryKeymapReply","Reply type for [QueryKeymap]."],["QueryPointer","get pointer coordinates"],["QueryPointerCookie","Cookie type for [QueryPointer]."],["QueryPointerCookieUnchecked","Unchecked cookie type for [QueryPointer]."],["QueryPointerReply",""],["QueryTextExtents","get text extents"],["QueryTextExtentsCookie","Cookie type for [QueryTextExtents]."],["QueryTextExtentsCookieUnchecked","Unchecked cookie type for [QueryTextExtents]."],["QueryTextExtentsReply","Reply type for [QueryTextExtents]."],["QueryTree","query the window tree"],["QueryTreeCookie","Cookie type for [QueryTree]."],["QueryTreeCookieUnchecked","Unchecked cookie type for [QueryTree]."],["QueryTreeReply",""],["RecolorCursor","The `RecolorCursor` request."],["Rectangle",""],["ReparentNotifyEvent","The `ReparentNotifyEvent` event."],["ReparentWindow","Reparents a window"],["RequestError","The `RequestError` error."],["ResizeRequestEvent","The `ResizeRequestEvent` event."],["Rgb",""],["RotateProperties","The `RotateProperties` request."],["Screen",""],["ScreenBuf",""],["ScreenIterator",""],["Segment",""],["SelectionClearEvent","The `SelectionClearEvent` event."],["SelectionNotifyEvent","The `SelectionNotifyEvent` event."],["SelectionRequestEvent","The `SelectionRequestEvent` event."],["SendEvent","send an event"],["SetAccessControl","The `SetAccessControl` request."],["SetClipRectangles","The `SetClipRectangles` request."],["SetCloseDownMode","The `SetCloseDownMode` request."],["SetDashes","The `SetDashes` request."],["SetFontPath","The `SetFontPath` request."],["SetInputFocus","Sets input focus"],["SetModifierMapping","The `SetModifierMapping` request."],["SetModifierMappingCookie","Cookie type for [SetModifierMapping]."],["SetModifierMappingCookieUnchecked","Unchecked cookie type for [SetModifierMapping]."],["SetModifierMappingReply","Reply type for [SetModifierMapping]."],["SetPointerMapping","The `SetPointerMapping` request."],["SetPointerMappingCookie","Cookie type for [SetPointerMapping]."],["SetPointerMappingCookieUnchecked","Unchecked cookie type for [SetPointerMapping]."],["SetPointerMappingReply","Reply type for [SetPointerMapping]."],["SetScreenSaver","The `SetScreenSaver` request."],["SetSelectionOwner","Sets the owner of a selection"],["Setup",""],["SetupAuthenticate",""],["SetupAuthenticateBuf",""],["SetupAuthenticateIterator",""],["SetupBuf",""],["SetupFailed",""],["SetupFailedBuf",""],["SetupFailedIterator",""],["SetupIterator",""],["SetupRequest",""],["SetupRequestBuf",""],["SetupRequestIterator",""],["StoreColors","The `StoreColors` request."],["StoreNamedColor","The `StoreNamedColor` request."],["Str",""],["StrBuf",""],["StrIterator",""],["Timecoord",""],["TranslateCoordinates","The `TranslateCoordinates` request."],["TranslateCoordinatesCookie","Cookie type for [TranslateCoordinates]."],["TranslateCoordinatesCookieUnchecked","Unchecked cookie type for [TranslateCoordinates]."],["TranslateCoordinatesReply","Reply type for [TranslateCoordinates]."],["UngrabButton","The `UngrabButton` request."],["UngrabKey","release a key combination"],["UngrabKeyboard","The `UngrabKeyboard` request."],["UngrabPointer","release the pointer"],["UngrabServer","The `UngrabServer` request."],["UninstallColormap","The `UninstallColormap` request."],["UnmapNotifyEvent","a window is unmapped"],["UnmapSubwindows","The `UnmapSubwindows` request."],["UnmapWindow","Makes a window invisible"],["ValueError","The `ValueError` error."],["VisibilityNotifyEvent","The `VisibilityNotifyEvent` event."],["Visualtype",""],["WarpPointer","move mouse pointer"],["Window",""]],"trait":[["PropEl","Trait for element in a property list"]],"type":[["AccessError","The `AccessError` error."],["AllocError","The `AllocError` error."],["AtomError","The `AtomError` error."],["Button",""],["ButtonReleaseEvent","a mouse button was pressed/released"],["CirculateRequestEvent","NOT YET DOCUMENTED"],["ColormapError","The `ColormapError` error."],["CursorError","The `CursorError` error."],["DrawableError","The `DrawableError` error."],["FocusOutEvent","NOT YET DOCUMENTED"],["FontError","The `FontError` error."],["GContextError","The `GContextError` error."],["IdChoiceError","The `IdChoiceError` error."],["ImplementationError","The `ImplementationError` error."],["KeyReleaseEvent","a key was pressed/released"],["Keycode",""],["Keycode32",""],["Keysym",""],["LeaveNotifyEvent","the pointer is in a different window"],["LengthError","The `LengthError` error."],["MatchError","The `MatchError` error."],["NameError","The `NameError` error."],["PixmapError","The `PixmapError` error."],["Timestamp",""],["Visualid",""],["WindowError","The `WindowError` error."]]});