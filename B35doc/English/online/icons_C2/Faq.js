//
//     +++++++++++++++++++++++++++++++++++++++++++++
//     This JavaScript is included in every FAQ file
//     +++++++++++++++++++++++++++++++++++++++++++++
//
var faqwin;
faqwin = false;
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
//=============================================================
// Open the link in a window postioned under the first current
// window and filling out the height that is left on the screen
//=============================================================
//
function openFaqLink(linkName)
{
  // variable declaration
  //---------------------
  var curWinPosX;
  var curWinPosY;
  var curWinHeight;
  var curWinWidth;
  var screenHeight;
  var curLoc;
  var targetName;
  screenHeight = window.screen.availHeight;
  if (NS)
  {
    curWinPosX   = window.screenX;
    curWinPosY   = window.screenY;
    curWinHeight = top.window.innerHeight;
    curWinWidth  = top.window.innerWidth;
  }
  else
  {
    curWinPosX   = top.window.screenLeft;
    curWinPosY   = top.window.screenTop;
    curWinHeight = top.document.body.clientHeight;
    curWinWidth  = top.document.body.clientWidth;
  }
  //
  // position the window to the top of the screen
  //---------------------------------------------
  if (curWinPosY !=0)
  {
    top.window.moveTo(curWinPosX, 0);  
    if (IE)
      curWinPosY = 111;
    else
      curWinPosY = 0;
  }
  //
  //compute the dimensions of the target window and its positioning
  //---------------------------------------------------------------
  if (IE)
  {
    newWinWidth   = curWinWidth + 3;
    newWinHeight  = screenHeight - curWinHeight - curWinPosY - 52;
    newWinPosX    = curWinPosX  - 4;
    newWinPosY    = curWinPosY + curWinHeight + 25;
    }
  else
  {
    newWinWidth   = curWinWidth + 3;
    newWinHeight  = screenHeight - curWinHeight - curWinPosY - 160;
    newWinPosX    = curWinPosX  - 1;
    newWinPosY    = curWinPosY + curWinHeight + 132;
  }
  //
  // if the height of the window is less than 1/3 of the height of the screen  
  // ==> we set it at 1/3 of the height of the screen and the Y position is thus a 2/3
  //----------------------------------------------------------------------------------
  if (newWinHeight < screenHeight / 3)
  {
    newWinHeight = screenHeight / 3;
    newWinPosY   = newWinHeight * 2 - 25;
  }
  //
  // if the target window is already opened 
  // ==> we close it so as to reopen it with the correct dimensions & position
  //--------------------------------------------------------------------------
  if (faqwin)
  {
    testwin.close();
    faqwin = false;
  }
  //
  // conversion of the Build Time adress to Run-Time if necessary
  //-------------------------------------------------------------
  locMediaSuffix = top.common_banner.MediaSuffix;
  TimeView = document.location.href.toString();
  targetName = linkName;
  // we are in the Run Time environment (in which case there is no string .doc/src in the address)
  // and the link has a Build Time format we'll have to convert it to its Run Time format
  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  if (TimeView.indexOf(".doc/src") == -1  && linkName.substring(0,6) == "../../")
  {
    //
    // case link to a module of another framework
    //...........................................
    if (linkName.substring(0,9) == "../../../")
    {
      //
      // getting rid of the first 9 characters ("../../../")
      //. . . . . . . . . . . . . . . . . . . . . . . . . . .
      linkName = linkName.substring(9,linkName.length);
      //
      // changing the string from "framework/module.doc/src/file" to "module.doc/src/file"
      //. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
      linkName = linkName.substring(linkName.substring(linkName.indexOf("/") + 1,linkName.length));
    }
    //
    // case link to a module of the same framework
    // getting rid of the first 6 characters ("../../") ==> the linkName is then module.doc/src/file
    //..............................................................................................
    else
      linkName = linkName.substring(6,linkName.length);
    //
    // changing the string "module.doc/src/file" to ../module_X2/file"
    //................................................................
    targetName = "../" + linkName.substring(0,linkName.indexOf(".doc/src")) + top.common_banner.MediaSuffix + "/" + linkName.substring(linkName.lastIndexOf("/") + 1, linkName.length);
    }
  //
  // opening the target window
  //--------------------------
  testwin = window.open(targetName,'ds_doc2','toolbar=0,scrollbars=1,resizable=1,width='+newWinWidth+',height='+newWinHeight+',top='+newWinPosY+',screenY='+newWinPosY+',left='+newWinPosX+',screenX='+newWinPosX+',status=0');
  faqwin = true;
}
