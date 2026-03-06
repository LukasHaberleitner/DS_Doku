//
//     +++++++++++++++++++++++++++++++++++++++++++++++
//     This JavaScript is included in every SMFRS file
//     +++++++++++++++++++++++++++++++++++++++++++++++
//
//=================
// global variables
//=================
//
// computing if we are in split-window view mode or not
//-----------------------------------------------------
var LocSmSplit;
if (top.main.mainsm) LocSmSplit = true;
else                 LocSmSplit = false;
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
// get trigram and name of the SSM 
//--------------------------------
var sm_trig;
var smname;
smname = top.main.location.href.toString();
sm_trig = smname.substring (smname.lastIndexOf("/") + 1, smname.lastIndexOf("/") + 4);
smname = smname.substring (smname.lastIndexOf("/") + 1, smname.lastIndexOf("/") + 6) + "ssm.htm";
//  
// current URL of the body file
//-----------------------------
var saveURL = '';
//  
// path where to find the images
//------------------------------
var imgPathBullet;
var imgPathBlck;
if (locRunTime) {
  imgPathBullet = "../icons" + locMediaSuffix + "/common/sm_bullet.gif";
  imgPathBlck   = "../icons" + locMediaSuffix + "/common/iconblck.gif";
  }
else {
  imgPathBullet = "../../../ICONS/icons.doc/src/common/sm_bullet.gif";
  imgPathBlck   = "../../../ICONS/icons.doc/src/common/iconblck.gif";
  }
//
//
//
//
//================================================================================================
// get the href of the file that was in the main frame before the switch to the split view mode
// and update the variable smSplit in the table of contents and change the file in the frame below
//================================================================================================
function GetLocBefore()
{
var LocMainsm = parent.contents.file_before_split;
var LocsmSplit = parent.contents.smSplit;
//
// if there was a file name stored and we were not in split viewing mode
//----------------------------------------------------------------------
if (LocMainsm != '' && LocsmSplit=='NO') {
// change the file in the bottom frame 
  top.main.mainsm.location.href = parent.contents.file_before_split;
// update the Split status variable
  parent.contents.smSplit = 'YES';
  }
}
//
//================================================================
// replace the string %20 string (blank under IE6) by a real blank
//================================================================
//
function replaceStringBy(stringIE6, badtext)
{
// variables initialisation
//-------------------------
var stringIE6length = stringIE6.length;
var badtextlength   = badtext.length;
var textblank       = " ";
var percent = "%";
if (stringIE6length==0) return stringIE6;
//
// first occrurence of the character "%" in the string
var i = stringIE6.indexOf(percent);
//
// if the arguments are incorrect
if ((!i) && (badtext != stringIE6.substring(0,badtextlength))) return stringIE6; 
//
// there is no "%" in the string
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
// recursive call the the function
  newstringIE6 += replaceStringBy(stringIE6.substring(i+badtextlength,stringIE6length),badtext,textblank); 
  return newstringIE6;
  }
}
//
//
//
//========================================================================================
// reposition the Site Map according to the file that is in the frame underneath it (Body)
//========================================================================================
function repositSM()
{
var char_icon = "../icons" ;
//
// get the href of the file Body
//------------------------------
// --- PSC+: check frames exist
if(top.main == null || top.main.mainsm == null)
{
	setTimeout('repositSM()',100);
	return;
}
// --- PSC-

var currentURL = top.main.mainsm.location.href ;
//
// reduction of the Body URL to its simplest form for later
//---------------------------------------------------------
// convert the Body href to a character string
//- - - - - - - - - - - - - - - - - - - - - - 
filename = currentURL.toString();
//
// the following instruction is in case the Body file was accessed through a bookmark
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
if (filename.lastIndexOf("#") != -1) {
  filename = filename.substring (0, filename.lastIndexOf("#"));
// update the variable currentURL without he bookmark so as to avoid having to do useless repositioning 
// in multiple-bookmark access in a same file as well as to correct a problem when using afterward the navigation in the frame
  currentURL = filename;
  }
//
// test if body file is not an html file (image or whatever else)
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
file_type = filename.substring (filename.length -3, filename.length) ;
if (file_type == 'htm') {
//
// get rid of everything except the name of the file
// We also get rid of the suffix "htm" (hence the -4)
//- - - - - - - - - - - - - - - - - - - - - - - - - -
  filename = filename.substring (filename.lastIndexOf("/") + 1, filename.length - 4);
//
// test if the Body belong to an allowed module (i.e. same module or of "bas*" or "cfy*" or "ucf*" or "xom*" or "ico*")
//---------------------------------------------------------------------------------------------------------------------
// get the trigram of the file
//- - - - - - - - - - - - - - -
  file_trig = filename.substring(0, 3);
//
// check if the body trigram is the same as the ssm trigram or if it is allowed (common module)
//.............................................................................................
  if (file_trig != sm_trig) {
    if (file_trig != "bas" && file_trig != "cfy" && file_trig != "ucf" && file_trig != "xom" && filename != "conventions") {
      top.main.location.href = top.main.mainsm.location.href ;
      parent.contents.smSplit = 'NO';
      return;
      }
    }
//
// compute the name of the image in front of the link by adding the suffix "_img"
//-------------------------------------------------------------------------------
  imgname = filename + "_img" ;
//
// --- PSC+: that musn't be done here! the icon image keeps reloading!
// change the image in front of the link from iconblck.gif to sm_bullet.gif
//-------------------------------------------------------------------------
//  top.main.sitemap.document.images[imgname].src = imgPathBullet ;
// --- PSC-
//
// if the Body URL is different from the stored value ==> we have to reposition the Site Map
//------------------------------------------------------------------------------------------
  if (currentURL != saveURL  && saveURL != "") {
// --- PSC+: put bullet icon in front of the active link
  top.main.sitemap.document.images[imgname].src = imgPathBullet ;
// --- PSC-

//
// we put back the suffix ".htm" 
//- - - - - - - - - - - - - - - 
    filename = filename + ".htm"
//
// the actual repositioning of the Site Map
//- - - - - - - - - - - - - - - - - - - - -
// --- PSC+: Instead of reloading the page (with anchor reference), let's just "scroll into view" the image object
//    top.main.sitemap.location = smname+ "#" + filename ; 
	var container = top.main.sitemap.document.body;
	var imgobj = top.main.sitemap.document.images[imgname];
//alert("Document URL has changed from ["+saveURL+"] to ["+currentURL+"]. ScrollPos:"+container.scrollTop+" / Client Height: "+container.clientHeight+" / obj position: "+obj.offsetTop);
	if(imgobj.offsetTop < container.scrollTop)
		// --- obj is above scroll view
		container.scrollTop = imgobj.offsetTop;
	else if(imgobj.offsetTop + imgobj.offsetHeight > container.scrollTop + container.clientHeight)
		// --- obj is under scroll view
		container.scrollTop = imgobj.offsetTop + imgobj.offsetHeight - container.clientHeight;
// --- PSC-

//
// convert the old Body href to a character string to put the image in front of it from sm_bullet.gif back to iconblck.gif
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
    oldImgName = saveURL.toString();
//
// stripping the old URL down
//- - - - - - - - - - - - - -
    oldImgName = oldImgName.substring (oldImgName.lastIndexOf("/") + 1, oldImgName.length - 4);
//
// getting rid of any access thru a bookmark
//- - - - - - - - - - - - - - - - - - - - - 
    if (oldImgName.lastIndexOf("#") != -1) oldImgName = oldImgName.substring (0, oldImgName.lastIndexOf("#") - 4);
//
// adding the suffix "_img"
//- - - - - - - - - - - - -
    oldImgName = oldImgName + "_img" ;
//
// finally changing the image to transparent
//- - - - - - - - - - - - - - - - - - - - - 
    top.main.sitemap.document.images[oldImgName].src = imgPathBlck;
//
// ending the case we need to change anything
//- - - - - - - - - - - - - - - - - - - - - -
    }
//
// update the variable 
//--------------------
  saveURL = currentURL;
//
// ending the case where the body file is an html file and not an image
//---------------------------------------------------------------------
  }
//
// set up a recall in case the user has navigated in the Body/Navigation file 
//---------------------------------------------------------------------------
setTimeout('repositSM()',100);
}

