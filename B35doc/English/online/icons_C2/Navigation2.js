//
//     ++++++++++++++++++++++++++++++++++++++++++++++++++++
//     This JavaScript is included in every navigation file
//     ++++++++++++++++++++++++++++++++++++++++++++++++++++
//
//=================
// global variables
//=================
var curBodyLayerPrefix = "no_navigation";
//
// computing if we are in run-time or build-time
//----------------------------------------------
var locRunTime;
if (top.common_banner.location.href.indexOf(".doc/src") > 0) locRunTime = false;
else                                                         locRunTime = true;
//
// computing the media suffix
//---------------------------
var locMediaSuffix = "";
if (locRunTime) {
  tempSuffix = top.common_banner.location.href.toString();
  locMediaSuffix = tempSuffix.substring(tempSuffix.lastIndexOf("_"), tempSuffix.lastIndexOf("_") + 3);
  }
// 
// computing if we are in search mode or not
//------------------------------------------
var DS_search = false ;
// V2E : IR-163610V5-6R2013
try
{
	//if (top.specific_banner.location.href.indexOf("_searchbnr.htm") > 0) DS_search = true;
	if (top.location.href.indexOf("_search.htm") > 0) DS_search = true;
}
catch (e)
{
}
//
// computing if we are in split-window view mode or not
//-----------------------------------------------------
var LocSmSplit   = true;
if (!DS_search) {
  if (top.main.mainsm) LocSmSplit   = true;
  else                 LocSmSplit   = false;
  }
//
//----------------------------------------------
// determination of the browser nature and level
//----------------------------------------------
//
var NS = false;
var IE = false; 
if (navigator.appName == "Netscape")
{
  NS = true;
  doc="document";
  sty="";
} 
else
{
  IE = true;
  doc = "document.all";
  sty = ".style";
}
//
// History
//--------
// Hist_mode contains (length, R|S|F, R|S|F, R|S|F, ....) 
// where R => Search mode; S => Split-Window mode; F => Full-Window mode
//......................................................................
var Hist_mode = new Array();
Hist_mode [0] = 1; 
if       (DS_search)  Hist_mode [1] = "R";
else if  (LocSmSplit) Hist_mode [1] = "S";
else                  Hist_mode [1] = "F";
//
// Hist_href contains (Current_Position_in_history, BodyHref, BodyHref, ....) 
//...........................................................................
var Hist_href = new Array();
Hist_href [0] = 1; 
if       (DS_search)  {
//
// access the address of the XXX_search.htm
//- - - - - - - - - - - - - - - - - - - - - 
  searchhelp = top.location.href;
//
// deducing the location of XXX_searchhelp.htm
//- - - - - - - - - - - - - - - - - - - - - - -
  searchhelp = searchhelp.substring(0, searchhelp.indexOf("search.htm")) + "searchhelp.htm";
  Hist_href [1] = top.DS_SEARCH.location.href; 
  }
else if  (LocSmSplit) Hist_href [1] = top.main.mainsm.location.href; 
else                  Hist_href [1] = top.main.location.href; 
//
// Back Button Used
//.................
var changeArray = true; 
//
//
//====================================================================================================
// Hide the layers of the navigation file associated to a file and render visible those of another file
//====================================================================================================
function navigationLayerSwitch (OldFile, NewFile, browserNS7)
{
if (OldFile == NewFile) return;
// case Netscape 7 or Mozilla 
//---------------------------
if (browserNS7) {
  if (OldFile != "no_navigation") {
//
// hide the layers corresponding the preceding body file
//......................................................
    document.getElementById(OldFile + "_up").style.visibility   = "hidden";
    document.getElementById(OldFile + "_down").style.visibility = "hidden";
    document.getElementById(OldFile + "_prev").style.visibility = "hidden";
    document.getElementById(OldFile + "_next").style.visibility = "hidden";
  }
//
// activate the layer corresponding to the new body file if the layers exist
//..........................................................................
  if (NewFile != "no_navigation") {
    document.getElementById(NewFile + "_up").style.visibility   = "visible";
    document.getElementById(NewFile + "_down").style.visibility = "visible";
    document.getElementById(NewFile + "_prev").style.visibility = "visible";
    document.getElementById(NewFile + "_next").style.visibility = "visible";
    }
  }
//
// other browsers
//---------------
else {
//alert(OldFile +"   "+ NewFile ); 
//
// hide the layers corresponding the preceding body file
//......................................................
  if (OldFile != "no_navigation") {
    eval(doc + "." + OldFile + "_up"   + sty ).visibility = "hidden";
    eval(doc + "." + OldFile + "_down" + sty ).visibility = "hidden";
    eval(doc + "." + OldFile + "_prev" + sty ).visibility = "hidden";
    eval(doc + "." + OldFile + "_next" + sty ).visibility = "hidden";
  }
//
// activate the layer corresponding to the new body file if the layers exist
//..........................................................................
  if (NewFile != "no_navigation") {
    eval(doc + "." + NewFile + "_up"   + sty ).visibility = "visible";
    eval(doc + "." + NewFile + "_down" + sty ).visibility = "visible";
    eval(doc + "." + NewFile + "_prev" + sty ).visibility = "visible";
    eval(doc + "." + NewFile + "_next" + sty ).visibility = "visible";
    }
  }
//
// store the current layer prefix
//-------------------------------
curBodyLayerPrefix = NewFile ;
}
//
//
//================================================================
// replace the string %20 string (blank under IE) by a real blank
//================================================================
function replaceStringBy(stringIE6, badtext)
{
var stringIE6length = stringIE6.length;
var badtextlength  = badtext.length;
var textblank       = " ";
var percent = "%";
if (stringIE6length==0) return stringIE6;
//
// first occrurence of the character "%" in the string
//----------------------------------------------------
var i = stringIE6.indexOf(percent);
//
// if the arguments are incorrect
//-------------------------------
if ((!i) && (badtext != stringIE6.substring(0,badtextlength))) return stringIE6; 
//
// there is no "%" in the string
//------------------------------
if (i == -1) return stringIE6; 
//
// there is a "%" in the string 
// initialise first replacement of badtext by a blank
//---------------------------------------------------
var newstringIE6 = stringIE6.substring(0,i) + textblank; 
//
// the number of characters left is enough to contain another occurrence of badtext
//---------------------------------------------------------------------------------
if (i+badtextlength < stringIE6length) {
//
// recursive call the the function
//................................
  newstringIE6 += replaceStringBy(stringIE6.substring(i+badtextlength,stringIE6length),badtext,textblank); 
  return newstringIE6;
  }
}
//
//
//===============================================================================
// go to the file indicated in the argument in the correct frame (main or mainsm)
//===============================================================================
function GoToBody(BodyFile)
{
//
// initialisation of variables
//----------------------------
var  textpercent = "%20";
//
// if search mode ==> the file is in the frame "DS_SEARCH"
//........................................................
if (DS_search) OldFileName = top.DS_SEARCH.location.href.toString();
//
// if not search mode ==> the file is in the frame "DS_SEARCH"
//........................................................
else {
//
// see if we are in split view mode or not and get the name of the current Body File
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  if (LocSmSplit) OldFileName = top.main.mainsm.location.href.toString();
  else            OldFileName = top.main.location.href.toString();
  }
//
// getting rid of the path info keeping only the name of the file
//---------------------------------------------------------------
OldFileName = OldFileName.substring(OldFileName.lastIndexOf("/") + 1, OldFileName.length);
//
// getting rid of the bookmark and/or of the suffix ".htm"
//--------------------------------------------------------
if (OldFileName.lastIndexOf("#") != -1) OldFileName= OldFileName.substring (0, OldFileName.lastIndexOf("#") - 4);
else                                    OldFileName= OldFileName.substring (0, OldFileName.length - 4);
//
// specific treatment in case BodyFile is an external link 
// in which case the first 9 or 12 characters are "../" and we are un RunTime mode
//--------------------------------------------------------------------------------
if (locRunTime) {
  extFile = BodyFile.toString();
// testing... 
//...........
  if (extFile.substring(0,9) == "../../../") {
// case link to external framework
// stripping string down to framework/module.doc/src/file.htm
//...........................................................
    if (extFile.substring(0,12) == "../../../../") {
      extFile = extFile.substring(12,extFile.length);
// stripping string down to module.doc/src/file.htm
//.................................................
      extFile = extFile.substring(extFile.indexOf("/") + 1,extFile.length);
      }
// case link module to module inside a same framework 
// stripping string down to module.doc/src/file.htm
//...................................................
    else extFile = extFile.substring(9,extFile.length);
// geting module name and adding the suffix at the same time
//..........................................................
    moduleName = extFile.substring(0, extFile.indexOf(".doc/src")) + locMediaSuffix + "/";
// getting file name
//..................
    extFileName =  extFile.substring(extFile.lastIndexOf("/") + 1, extFile.length);
    BodyFile = "../../" + moduleName + extFileName;
    }
  }
//
// changing the Body file
//-----------------------
// Search mode 
//............
if (DS_search)       top.DS_SEARCH.location.href = BodyFile;
//
// split viewing mode ==> the file to change is in "mainsm"
//.........................................................
else if (LocSmSplit) top.main.mainsm.location.href = BodyFile;
//
// full-frame viewing mode ==> the file to change is in "main"
//.........................................................
else                 top.main.location.href = BodyFile;
//
// History update
//---------------
  CurPos = Hist_href[0] + 1;
//alert('gotobod curpos = '+ CurPos);
//
// change the current position in the history
//...........................................
  Hist_href[0] = CurPos;
//
// change the length of the history
//.................................
  Hist_mode[0] = Hist_mode[0] +1 ;
//
// update the history with the href and mode 
//..........................................
  if (DS_search) {
//    Hist_href[CurPos] = top.DS_SEARCH.location.href;
    Hist_mode[CurPos] = "R";
    } 
  else if (LocSmSplit) {
//    Hist_href[CurPos] = top.main.mainsm.location.href;
//alert("gotobod href = "+ Hist_href[CurPos] + "   Bodyfile = "+ BodyFile);
    Hist_mode[CurPos] = "S";
    }
  else {
//    Hist_href[CurPos] = top.main.location.href;
    Hist_mode[CurPos] = "F";
    }
Hist_href[CurPos] = BodyFile;
//
// Activate the Back Button and deactivate the Forward button
//...........................................................
  if (NS)
  {
    document.getElementById("history_forward").style.visibility = "hidden";
    document.getElementById("history_back").style.visibility = "visible";
  }
  else
  {
    eval(doc + ".history_forward" + sty ).visibility = "hidden";
    eval(doc + ".history_back" + sty ).visibility = "visible";
  }
//
// and just in case...
//....................
  changeArray = true;
//
// changing the layer in the navigation file
//------------------------------------------
// convert BodyFile to character string
//.....................................
NavFileName = BodyFile.toString();
//
// if browser is IE, we replace the %20 string by a blank
//.....................................
if (IE)
  NavFileName = replaceStringBy(NavFileName, textpercent);
//
// we strip the BodyFile down to the file name only (eliminitation of the ../ etc.)
//.....................................
NavFileName = NavFileName.substring (NavFileName.lastIndexOf("/") + 1, NavFileName.length);
//
// finally changing the navigation file
//.....................................
// getting rid of the suffix ".htm"
//- - - - - - - - - - - - - - - - -
NewFileName = NavFileName.substring (0, NavFileName.length - 4);
// changing the layers 
//- - - - - - - - - - 
navigationLayerSwitch (OldFileName, NewFileName, NS) ;
//
// change the focus back to the Body
//..................................
if (!DS_search) {
  if (LocSmSplit  ) top.main.mainsm.focus();
  else            top.main.focus();
  }
}
//
//
//=============================================
// go back from the image file to the HTML file
//=============================================
function BackToBody()
{
changeArray = false;
//
// Update current Position in history
//-----------------------------------
Hist_href [0] = Hist_href [0] - 1 ;
CurPos = Hist_href [0];
//
// Changing the href of the Body File
//-----------------------------------
// Full-Window mode
//.................
if (Hist_mode[CurPos] == "F") {
//
// in case the "Back" changes the Split-window into the Full-window mode
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  if (LocSmSplit) LocSmSplit = false;
  top.main.location.href = Hist_href[CurPos];
  }
//
// Split-Window mode
//..................
else if (Hist_mode[CurPos] == "S") {
//
// in case the "Back" changes the Full-window into the Split-window mode
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  if (!LocSmSplit) {
    LocSmSplit = true;
    sitemap_path = Hist_href[CurPos].substring(0, Hist_href[CurPos].lastIndexOf("/") + 5);
    sitemap_href = sitemap_path + "ssm.htm";
    splitfr_href = sitemap_path + "smfrs.htm";
    top.main.location.href = sitemap_href;
    top.main.sitemap.location.href = splitfr_href;
    }
  top.main.mainsm.location.href = Hist_href[CurPos];
  }
//
// Search mode
//............
else {
  top.DS_SEARCH.location.href  = Hist_href[CurPos];
  }
//
// Update the lenght of the history
//---------------------------------
Hist_mode[0] = Hist_mode[0] - 1;
//
// Activate the Forward Button image
//----------------------------------
if (NS)
  document.getElementById("history_forward").style.visibility = "visible";
else
  eval(doc + ".history_forward" + sty ).visibility = "visible";
//
// Change focus back to the Body frame
//------------------------------------
if (DS-search)       top.DS_SEARCH.focus();
else if (LocSmSplit) top.main.mainsm.focus();
else                 top.main.focus();
}
//
//
//================================================
// History Back Button
//================================================
function BackButton()
{
changeArray = false;
//
// Update current Position in history
//-----------------------------------
Hist_href [0] = Hist_href [0] - 1 ;
CurPos = Hist_href [0];
//alert("backbutton CurPos  = "+ CurPos +"  href = "+ Hist_href[CurPos]);
//alert("length = "+ Hist_mode [0] + "   curpos = "+ CurPos +"   mdoe = "+ Hist_mode[CurPos]+"   href = "+ Hist_href[CurPos]);
//for (counthist= 1; counthist<= Hist_mode[0]; counthist++) {
//  alert("mode = " +Hist_mode[counthist]+ "      href = "+Hist_href[counthist]);
//  }
//
// if we have reached the first file ==> deactivate the "Back" button
//-------------------------------------------------------------------
if (CurPos == 2)
{
  if (NS)
    document.getElementById("history_back").style.visibility = "hidden";
  else
    eval(doc + ".history_back" + sty ).visibility = "hidden";
 } 
//
//
// Changing the href of the Body File
//-----------------------------------
// Search mode
//............
if (DS_search)       top.DS_SEARCH.location.href   = Hist_href[CurPos];
//
// Split-Window mode
//.................
else if (LocSmSplit) top.main.mainsm.location.href = Hist_href[CurPos];
//
// Full-Window mode
//.................
else                 top.main.location.href        = Hist_href[CurPos];
//
// Activate the Forward Button image
//----------------------------------
if (NS)
  document.getElementById("history_forward").style.visibility = "visible";
else
  eval(doc + ".history_forward" + sty ).visibility = "visible";
}
//
//
//================================================
// History Forward Button
//================================================
function ForwardButton()
{
changeArray = false;
//
// Update current Position in history
//-----------------------------------
Hist_href [0] = Hist_href [0] + 1 ;
CurPos = Hist_href [0];
//alert("curpos = "+ CurPos);
//alert("lenght = "+Hist_mode[0]+"       curpos = "+ CurPos+"    for href= "+ Hist_href [CurPos]);
//
//
// Activate the Back Button image
//----------------------------------
if (NS)
  document.getElementById("history_back").style.visibility = "visible";
else
  eval(doc + ".history_back" + sty ).visibility = "visible";
//
// Changing the href of the Body File
//-----------------------------------
//
// Search mode
//............
if (DS_search)       top.DS_SEARCH.location.href   = Hist_href[CurPos];
//
// Split-Window mode
//.................
else if (LocSmSplit) top.main.mainsm.location.href = Hist_href[CurPos];
//
// Full-Window mode
//.................
else                 top.main.location.href        = Hist_href[CurPos];
//
// if we have reached the last file ==> deactivate the Forward Button
//-------------------------------------------------------------------
  if (CurPos == Hist_mode[0])
  {
  if (NS)
    document.getElementById("history_forward").style.visibility = "hidden";
  else
    eval(doc + ".history_forward" + sty ).visibility = "hidden";
  } 
}
//
//
//======================================
// Load the appropriate background image
//======================================
function Nav_Background()
{
//
// render visible the correct div for the background image of the navigation
//--------------------------------------------------------------------------
  if (NS)
  {
    laynav = "nav_back_NS";
    document.getElementById(laynav).style.visibility = "visible";
  }
  else
    eval(doc + ".nav_back_IE" + sty ).visibility = "visible";
}
//
//
//================================================
//================================================
// Detect if we have to change the navigation file
//================================================
//================================================
function ChangeNav2()
{
//
// Determine if we are in the case of contextual 
// help access to CFY or XOM in which case we do nothing
//------------------------------------------------------
// --- PSC: IR 0518718A correction
// --- added "vm1ap*" (VPM V4 APIs) and "basst*" (CATIA spec trees) as docs with no navigation structure
if (top.specific_banner.location.href.indexOf('cfyug') > 0 ||
	top.specific_banner.location.href.indexOf('cfwug') > 0 ||
	top.specific_banner.location.href.indexOf('vm1ap') > 0 ||
	top.specific_banner.location.href.indexOf('basst') > 0 ||
	top.specific_banner.location.href.indexOf('xomug') > 0 ||
	top.specific_banner.location.href.indexOf('ucfug') > 0 ||
	top.specific_banner.location.href.indexOf('bascu') > 0)
	return;

//
// if we are in the case of full-text search and we are accessing a common doc: there is no navigation
//----------------------------------------------------------------------------------------------------
if (DS_search)
{
// --- PSC: IR 0518718A correction
// --- see explanaition above
	if (top.DS_SEARCH.location.href.indexOf('cfyug') > 0 ||
		top.DS_SEARCH.location.href.indexOf('cfwug') > 0 ||
		top.DS_SEARCH.location.href.indexOf('vm1ap') > 0 ||
		top.DS_SEARCH.location.href.indexOf('basst') > 0 ||
		top.DS_SEARCH.location.href.indexOf('xomug') > 0 ||
		top.DS_SEARCH.location.href.indexOf('ucfug') > 0 ||
		top.DS_SEARCH.location.href.indexOf('bascu') > 0)
		return;
}
//
// if we are in the case of full-text search and the user access CAA documentation (there is no MediaSuffix)
//----------------------------------------------------------------------------------------------------------
if (DS_search && top.DS_SEARCH.location.href.indexOf(locMediaSuffix) < 0) {
//
// we also test on the folder name
//................................
  if (top.DS_SEARCH.location.href.indexOf('CAASc') > 0 || top.DS_SEARCH.location.href.indexOf('interfaces') > 0 || top.DS_SEARCH.location.href.indexOf('vm1ap') > 0 ) {
//
// if the current navigation file is not "no_navigation.htm" we need to change it back to "no_navigation.htm" 
//...........................................................................................................
    if (top.nav_banner.location.href.indexOf('no_navigation.htm')<0) {
//
// access the common banner
//- - - - - - - - - - - - -
      bod_path = top.common_banner.location.href ; 
//
// getting rid of the file name
//- - - - - - - - - - - - - - -
      bod_path = bod_path.substring(0, bod_path.lastIndexOf("/")) ;
//
// change nav_path to "...../icons_X2/"
//- - - - - - - - - - - - - - - - - - - -
      bod_path = bod_path.substring(0, bod_path.lastIndexOf("/") + 1) + "icons" + locMediaSuffix + "/";
//
// finally changing the navigation file
//- - - - - - - - - - - - - - - - - - - -
      top.nav_banner.location.href = bod_path + "no_navigation.htm";
      }
    return ;
    }
  }
//
// declaration of variables
//-------------------------
var CurModName ;
var textpercent = "%20";
//
// in search mode, we need to compute the module name for later use
//-----------------------------------------------------------------
if (DS_search) {
  CurBodFileName = top.DS_SEARCH.location.href;
//
// the file is the Help file => there is no navigation associated
//................................................................
  if (CurBodFileName.indexOf('searchhelp.htm')>0 ) {
//
// if the current navigation file is not "no_navigation.htm" we need to change it back to "no_navigation.htm" 
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    if (top.nav_banner.location.href.indexOf('no_navigation.htm')<0) {
      bod_path = CurBodFileName.replace('searchhelp.htm','no_navigation.htm'); 
      top.nav_banner.location.href = bod_path;
      }
    return ;
    }
//
// the file is not the Help file => computing the module name
//...........................................................
  else {
//
// bod_path is "..../module_X2/xxxxx.htm"
//. . . . . . . . . . . . . . . . . . . .
    bod_path = CurBodFileName ; 
//
// change bod_path to "..../module_X2"
//. . . . . . . . . . . . . . . . . . .
    bod_path = bod_path.substring(0, bod_path.lastIndexOf("/")) ; 
//
// computing the name of the module (by eliminating the last 3 characters "_X2"
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    CurModName = bod_path.substring(bod_path.lastIndexOf("/") + 1, bod_path.length -3);
    }
  }
//
// the current navigation file is "no_navigation.htm" ==> we have to change it
//-----------------------------------------------------------------------------
if (top.nav_banner.location.href.indexOf('no_navigation.htm')>0) {
//
// we are not in the search mode ==> we are at the loading of the frameset 
// we need to change the navigation file to whatever it should be by looking at the name of the frameset
//......................................................................................................
  if (!DS_search) {
    CurBodFileName = top.main.location.href;
//
// computing the path
//- - - - - - - - - -
    nav_path = CurBodFileName.substring (0, CurBodFileName.lastIndexOf("/") + 1);
//
// computing the name of the module (first 5 letters of the name of the file (without the path)
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    CurModName = CurBodFileName.substring (CurBodFileName.lastIndexOf("/") + 1, CurBodFileName.lastIndexOf("/") + 6);
//
// changing the navigation file
//- - - - - - - - - - - - - - -
    top.nav_banner.location.href = nav_path + "_navigation/" + CurModName + "nav.htm";
    return;
    }
//
// if we are in search mode and the current navigation file is "no_navigation.htm"
// we need to change the navigation file to whatever it should be by looking at the name of the frameset
//......................................................................................................
  else {
//
// changing the navigation file
//- - - - - - - - - - - - - - -
    if (CurModName!='icons')
      top.nav_banner.location.href = bod_path + "/_navigation/" + CurModName + "nav.htm";
    return;
    }
  }
//
// if we are not in search mode get the current body file name
//------------------------------------------------------------
if (!DS_search) {
//
// are we still in split mode ?
//.............................
if (top.main.mainsm) LocSmSplit = true;
else                 LocSmSplit = false;
//
// getting the current body file name
//...................................
  if (LocSmSplit) CurBodFileName = top.main.mainsm.location.href.toString();
  else            CurBodFileName = top.main.location.href.toString();
//
// on DBCS, the TOC is slower to load, so just in case we test on the name of the file
// if it's the split site map frameset, we redefine the variables to say that we are in split viewing mode
//........................................................................................................
  if (CurBodFileName.substring(CurBodFileName.lastIndexOf("/") + 6, CurBodFileName.length)== "smfrs.htm") {
    LocSmSplit   = true ;
    CurBodFile = top.main.mainsm.location.href;
    CurBodFileName = CurBodFile.toString();
    }
  }
//
// to take into account a bug of IE ==> we change all the "%20" into a blank character
//-------------------------------------------------------------------------------------
if (IE)
  CurBodFileName = replaceStringBy(CurBodFileName, textpercent);
//
// the following instruction is in case the Body file was accessed through a bookmark
//-----------------------------------------------------------------------------------
if (CurBodFileName.lastIndexOf("#") != -1) CurBodFileName = CurBodFileName.substring (0, CurBodFileName.lastIndexOf("#"));
// 
// if body file is an image in which case we render visible the layer "back_navigation"
//-------------------------------------------------------------------------------------
bod_suffix = CurBodFileName.substring(CurBodFileName.length -3, CurBodFileName.length);
if (bod_suffix != 'htm'){
// 
// if the file hasn't changed from the last time ==> there is nothing to do
//.........................................................................
  TestBodName = CurBodFileName.substring (CurBodFileName.lastIndexOf("/") + 1, CurBodFileName.length - 4);
  if (TestBodName == top.contents.SaveBodName) return;
// 
// saving the body file
//.....................
  top.contents.SaveBodName = CurBodFileName.substring (CurBodFileName.lastIndexOf("/") + 1, CurBodFileName.length - 4);
// 
// changing the layer in the navigation
//.....................................
  OldFilename = curBodyLayerPrefix ;
  navigationLayerSwitch (OldFilename, "no_navigation", NS);
//
// History update
//...............
  CurPos = Hist_href[0] + 1;
  Hist_href[0] = CurPos;
//alert("chang 1 cur pos = "+CurPos);
// 
// if we are not in the case of the "back" or "forward" buttons we have to update the length of the history
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  if (changeArray)  Hist_mode[0] = Hist_href[0];
// 
// search mode
//- - - - - - 
  if (DS_search) {
    Hist_href[CurPos] = top.DS_SEARCH.location.href;
    Hist_mode[CurPos] = "R";
    } 
// 
// Split-view mode
//- - - - - - - - 
  else if (LocSmSplit) {
    Hist_href[CurPos] = top.main.mainsm.location.href;
    Hist_mode[CurPos] = "S";
    }
// 
// Full-window mode
//- - - - - - - - -
  else {
    Hist_href[CurPos] = top.main.location.href;
    Hist_mode[CurPos] = "F";
    }
//
// Activate the Back Button and deactivate the Forward button
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  if (NS)
  {
    document.getElementById("history_forward").style.visibility = "hidden";
    document.getElementById("history_back").style.visibility = "visible";
  }
  else
   {
    eval(doc + ".history_forward" + sty ).visibility = "hidden";
    eval(doc + ".history_back" + sty ).visibility = "visible";
    }
//
// re-initiate the history array "to be changed" variable
//- - - - - - - - - - - - - - - - - - - - - - - - - - - -
  changeArray = true;
// 
// exiting 
//........
  return;
  }
// 
// the file is not an image ==> reinitialize the variable SaveBodName
//-------------------------------------------------------------------
else {
  if (!DS_search)  top.contents.SaveBodName = '';
  }
//
// stripping the URLs down to the name of the Body
//------------------------------------------------
// We also get rid of the suffix "htm" (hence the -4)
//...................................................
CurBodFileName = CurBodFileName.substring (CurBodFileName.lastIndexOf("/") + 1, CurBodFileName.length - 4);
//
// the following instruction is in case the Body file was accessed through a bookmark
//.........................................................................
if (CurBodFileName.lastIndexOf("#") != -1) CurBodFileName = CurBodFileName.substring (0, CurBodFileName.lastIndexOf("#") - 4);
//
// test if the layer "CurBodFileName" exists in the navigation file
//-----------------------------------------------------------------
// if exists ==> we change the layers visibility
//..............................................
tempLayName = CurBodFileName+ "_up";
OldFilename = curBodyLayerPrefix ;
//alert("Old = "+OldFilename + "  New = " + CurBodFileName);
//
// case Netscape
//- - - - - - - -
if (NS && document.getElementById(tempLayName)) {
//
// changing the layer visibility
//. . . . . . . . . . . . . . . .
  if (OldFilename != CurBodFileName) navigationLayerSwitch (OldFilename , CurBodFileName, NS);
//
// History update
//. . . . . . . . 
  if (OldFilename != CurBodFileName && changeArray) {
    CurPos = Hist_href[0] + 1;
//alert("chang 2 cur pos = "+CurPos);
    Hist_href[0] = CurPos;
// 
// if we are not in the case of the "back" or "forward" buttons we have to update the length of the history
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    if (changeArray)  Hist_mode[0] = Hist_href[0];
// 
// search mode
//- - - - - - 
    if (DS_search) {
      Hist_href[CurPos] = top.DS_SEARCH.location.href;
       Hist_mode[CurPos] = "R";
      } 
// 
// Split-view mode
//- - - - - - - - 
    else if (LocSmSplit) {
      Hist_href[CurPos] = top.main.mainsm.location.href;
      Hist_mode[CurPos] = "S";
      }
// 
// Full-window mode
//- - - - - - - - -
    else {
      Hist_href[CurPos] = top.main.location.href;
      Hist_mode[CurPos] = "F";
      }
//
// Activate the Back Button and deactivate the Forward button
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    if (NS)
    {
      document.getElementById("history_forward").style.visibility = "hidden";
      if (CurPos > 2) document.getElementById("history_back").style.visibility = "visible";
     }
    else
    {
      eval(doc + ".history_forward" + sty ).visibility = "hidden";
      if (CurPos > 2) eval(doc + ".history_back" + sty ).visibility = "visible";
    }
    }
//
// re-initiate the history array "to be changed" variable
//- - - - - - - - - - - - - - - - - - - - - - - - - - - -
  changeArray = true;
  }
//
// other browsers
//- - - - - - - -
else if (eval(doc+"."+tempLayName)) {
//
// changing the layer visibility
//. . . . . . . . . . . . . . . .
    if (OldFilename != CurBodFileName)  navigationLayerSwitch (OldFilename , CurBodFileName, NS);
//
// History update
//. . . . . . . . 
  if (OldFilename != CurBodFileName && changeArray) {
    CurPos = Hist_href[0] + 1;
//alert("chang 3 cur pos = "+CurPos);
    Hist_href[0] = CurPos;
// 
// if we are not in the case of the "back" or "forward" buttons we have to update the length of the history
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    if (changeArray)  Hist_mode[0] = Hist_href[0];
// 
// search mode
//- - - - - - 
    if (DS_search) {
      Hist_href[CurPos] = top.DS_SEARCH.location.href;
       Hist_mode[CurPos] = "R";
      } 
// 
// Split-view mode
//- - - - - - - - 
    else if (LocSmSplit) {
      Hist_href[CurPos] = top.main.mainsm.location.href;
      Hist_mode[CurPos] = "S";
      }
// 
// Full-window mode
//- - - - - - - - -
    else {
      Hist_href[CurPos] = top.main.location.href;
      Hist_mode[CurPos] = "F";
      }
//
// Activate the Back Button and deactivate the Forward button
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    if (NS)
     {
      document.getElementById("history_forward").style.visibility = "hidden";
      if (CurPos > 2) document.getElementById("history_back").style.visibility = "visible";
      }
    else
     {
      eval(doc + ".history_forward" + sty ).visibility = "hidden";
      if (CurPos > 2) eval(doc + ".history_back" + sty ).visibility = "visible";
      }
    }
//
// re-initiate the history array "to be changed" variable
//- - - - - - - - - - - - - - - - - - - - - - - - - - - -
  changeArray = true;
  }
//
// if the layer does not exist
//............................
else {
//
// if search mode ==> we may have to change the module containing the navigation file
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  if (DS_search) {
//
// computing the module containing the navigation file (..../xxxyy_X2/_navigation/xxxyynav.htm)
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    nav_path = top.nav_banner.location.href;
//
// reducing it to ..../xxxyy
//. . . . . . . . . . . . . .
    nav_path = nav_path.substring(0, nav_path.lastIndexOf("/_navigation/") - 3);
//
// getting the module name xxxyy
//. . . . . . . . . . . . . . . .
    navModuleName = nav_path.substring(nav_path.lastIndexOf("/"), nav_path.length);
//
// the old and current modules are different ==> we change the navigation file
//. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    if (navModuleName != CurModName) { 
      new_nav = nav_path.substring(0, nav_path.lastIndexOf("/") + 1) + CurModName + locMediaSuffix + "/_navigation/" + CurModName + "nav.htm";
      top.nav_banner.location.href = new_nav;
      return;
      }
    }
//
// if not in search mode ==> render visible the "no_navigation" layer
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  else {  
    curBodyLayerPrefix = "no_navigation" ;
    navigationLayerSwitch (OldFilename, "no_navigation", NS);
    }
  }
//
// end of function
//----------------
}
//
//============================================================================================================
// this function is necessary because the variable smSplit in the frame contents is not updated quickly enough
//============================================================================================================
function ChangeNav()
{
// set the refresh
setTimeout('ChangeNav2()',700);
setTimeout('ChangeNav()',700);
}

