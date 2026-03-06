//
//     ++++++++++++++++++++++++++++++++++++++++++++++++++
//     This JavaScript is included in common banner files
//     ++++++++++++++++++++++++++++++++++++++++++++++++++
//
//
var MediaSuffix = "";
var RunTime = false;
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
//========================================================================
// Determine wether we are in Build Time or Run Time environment
// and if we are in Run Time, determine the suffix specific to each media
//========================================================================
//
function RtBtSuffix()
{
  TimeView = document.location.href.toString();
  //
  // if there is the suffix ".doc/src" then we are in the Buid Time view
  //--------------------------------------------------------------------
  if (TimeView.indexOf(".doc") != -1)
  {
    RunTime = false;
  }
  //
  // if there is no ".doc/src" in the path 
  //--------------------------------------
  else
  {
    RunTime = true;
  }
  //
  // determination of the suffix
  //----------------------------
  if      (TimeView.indexOf("CATIAfr") != -1) MediaSuffix = "_C2";
  else if (TimeView.indexOf("xatfr")   != -1) MediaSuffix = "_C2";
  else if (TimeView.indexOf("catsfr")  != -1) MediaSuffix = "_C2";
  else if (TimeView.indexOf("icmfr")   != -1) MediaSuffix = "_C2";
  else if (TimeView.indexOf("DELMIAfr")!= -1) MediaSuffix = "_D2";
  else if (TimeView.indexOf("wdafr")   != -1) MediaSuffix = "_W2";
  else if (TimeView.indexOf("DMUfr")   != -1) MediaSuffix = "_E2";
  else if (TimeView.indexOf("vbafr")   != -1) MediaSuffix = "_V2";
  else if (TimeView.indexOf("omdfr")   != -1) MediaSuffix = "_O2";
  else if (TimeView.indexOf("lcafr")   != -1) MediaSuffix = "_L2";
//alert (RunTime + " Media = "+ MediaSuffix);
}
//
//================================================================
// replace the string %20 string (blank under IE) by a real blank
//================================================================
//
function replaceStringBy(stringIE6, badtext)
{
  var stringIE6length = stringIE6.length;
  var badtextlength  = badtext.length;
  var textblank       = " ";
  var percent = "%";
  if (stringIE6length==0)
    return stringIE6;
  //
  // first occrurence of the character "%" in the string
  var i = stringIE6.indexOf(percent);
  //
  // if the arguments are incorrect
  if ((!i) && (badtext != stringIE6.substring(0,badtextlength)))
    return stringIE6; 
  //
  // there is no "%" in the string
  if (i == -1)
    return stringIE6; 
  //
  // there is a "%" in the string 
  // initialise first replacement of badtext by a blank
  //---------------------------------------------------
  var newstringIE6 = stringIE6.substring(0,i) + textblank; 
  //
  // the number of characters left is enough to contain another occurrence of badtext
  //---------------------------------------------------------------------------------
  if (i+badtextlength < stringIE6length)
  {
    // recursive call the the function
    newstringIE6 += replaceStringBy(stringIE6.substring(i+badtextlength,stringIE6length),badtext,textblank); 
    return newstringIE6;
  }
}
//
//==============================================
// change the navigation file to "no_navigation"
//==============================================
//
function ConvTrade(filename)
{
  var textpercent     = "%20";
  var locMediaSuffix = top.common_banner.MediaSuffix;
  //
  // get the location of the common banner
  //--------------------------------------
  locBnrName = top.common_banner.location.href.toString();
  //
  // if browser is IE, we replace the %20 string by a blank
  //--------------------------------------------------------
  if (IE)
    locBnrName = replaceStringBy(locBnrName, textpercent);
  //
  // minus the name of the banner file
  //----------------------------------
  locBnrName = locBnrName.substring(0, locBnrName.lastIndexOf("/"));
  //
  // minus the name of the folder containing the banner file
  //--------------------------------------------------------
  locBnrName = locBnrName.substring(0, locBnrName.lastIndexOf("/"));
  //
  // computing the location of no_navigation.htm file
  //-------------------------------------------------
  nav_bann = locBnrName + "/icons" + locMediaSuffix + "/no_navigation.htm";
  //
  // changing the  navigation file
  //------------------------------
  top.nav_banner.location.href = nav_bann;
  //
  // saving the current body file
  //-----------------------------
  // obtention of the location
  //- - - - - - - - - - - - - -
  if (top.contents.smSplit =='YES')
  {
    top.contents.smSplit = 'NO';
    CurBodFile = top.main.mainsm.location.href;
  }
  else
  {
    CurBodFile = top.main.location.href;
  }
  CurBodFile = CurBodFile.toString();
  //
  // if browser is IE, we replace the %20 string by a blank
  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  if (IE)
    CurBodFile = replaceStringBy(CurBodFile, textpercent);
  //
  // eliminating the path (i.e. ../module_name etc.)
  //- - - - - - - - - - - - - - - - - - - - - - - - 
  CurBodFile = CurBodFile.substring (CurBodFile.lastIndexOf("/") + 1, CurBodFile.length - 4);
  //
  // in case it was accessed by bookmark
  //- - - - - - - - - - - - - - - - - - 
  if (CurBodFile.lastIndexOf("#") != -1)
    CurBodFile= CurBodFile.substring (0, CurBodFile.lastIndexOf("#") - 4);
  //
  // saving it in the TOC
  //- - - - - - - - - - -
  top.contents.SaveBodName = CurBodFile;
  //
  // computing the location of the target file 
  //------------------------------------------
  new_main = locBnrName + "/icons" + locMediaSuffix + "/" + filename;
  //
  // changing the file in the "main" frame
  //--------------------------------------
  top.main.location.href = new_main;
}

//
//==============================================
// Print function, wrote by JJY on 02 February 2006
// This function allows to print the current selected documentation frame/ Tested on IE and Mozilla
//==============================================
//
function printMainFrame()
{
  var printframe;
  try
  {
    if (parent.frames['main'])
    {
      // In case of we are in split mode
      if (parent.frames['main'].frames['mainsm'])
        printframe=parent.frames['main'].frames['mainsm']; 
      else
        printframe=parent.frames['main'];
    }
    else
    {
      if(parent.frames['DS_SEARCH'])
      printframe=parent.frames['DS_SEARCH']; else return;
    }
    printframe.focus(); 
    printframe.print();
  }
  catch(e)
  {
	 // The Frames have changed!!!
	 return;
  }
}
