//
//     +++++++++++++++++++++++++++++++++++++++++++++
//     This JavaScript is included in every TOC file
//     +++++++++++++++++++++++++++++++++++++++++++++
//
var file_before_split = '';
var smSplit = 'NO'; 
var SaveBodName = '';
var locMediaSuffix;
tempSuffix = top.common_banner.location.href.toString();
locMediaSuffix = tempSuffix.substring(tempSuffix.lastIndexOf("_"), tempSuffix.lastIndexOf("_") + 3);
//
//==================================================
// relocating a Build Time link into a Run Time link
//==================================================
//
function relocLink (BTLink, RTLink)
{
  // get rid of the first 9 characters ("../../..")
  //-----------------------------------------------
  BTName = BTLink.toString();
  BTName = BTName.substring(9,BTName.length);
  //
  // the string is now "framework/module.doc/src/file" ==> get rid of the framework name
  //------------------------------------------------------------------------------------
  BTName = BTName.substring(BTName.indexOf("/") + 1,BTName.length);
  //
  // converting BTName from "module.doc/src/file" to RTLink "../module_X2/file"
  //---------------------------------------------------------------------------
  RTLink = "../" + BTName.substring(0,BTName.indexOf(".doc/src")) + locMediaSuffix + "/" + BTName.substring(BTName.lastIndexOf("/") + 1, BTName.length);
}
//
//===========================================================================
// change the focus to the main frame instead of the frame comtaining the TOC 
//===========================================================================
//
function openwin(targetfile)
{
  targetname = targetfile.toString();
  //
  // if targetfile is an Build Time link (first 9 characters are "../../../")
  //-------------------------------------------------------------------------
  if (targetname.substring(0,9) == "../../../")
  {
    // 
    // test if we are  in Run Time ==> need to relocate the link
    //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    if (top.common_banner.RunTime)
    {
      BTName = targetname.substring(9,targetname.length);
      BTName = BTName.substring(BTName.indexOf("/") + 1,BTName.length);
      RTLink = "../" + BTName.substring(0,BTName.indexOf(".doc/src")) + locMediaSuffix + "/" + BTName.substring(BTName.lastIndexOf("/") + 1, BTName.length);
      parent.main.location.href = RTLink;
    }
    else
      parent.main.location.href = targetfile;
  }
  //
  // changing the file in the frame "main"
  //--------------------------------------
  else
    parent.main.location.href = targetfile;
  //
  // changing the focus to the frame "main"
  //---------------------------------------
  parent.main.focus();
  smSplit = 'NO';
}
//
//=================================================================
// switch to split frame viewing mode with the Site Map (SM) on top
//=================================================================
//
function splitsmvar(targetfile)
{
  //
  // initialise the variable
  //------------------------
  file_before_split = top.main.location.href;
  //
  // convert the href of the file in the main frame to a character string
  //---------------------------------------------------------------------
  parentloc = parent.main.location.href;
  parentlocname = parentloc.toString();
  //
  // get rid of everything except the real name
  //-------------------------------------------
  parentlocname = parentlocname.substring (parentlocname.lastIndexOf("/") + 1, parentlocname.length);
  //
  // test to see if the file in the main frame belong to the allowed module
  //-----------------------------------------------------------------------
  ext_ok = true;
  //
  // get the path and name to the TOC
  //- - - - - - - - - - - - - - - - -
  toc_trig = top.contents.location.href;
  //
  // strip it down to the file name keeping only the first 3 characters
  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  toc_trig = toc_trig.substring (toc_trig.lastIndexOf("/") + 1, toc_trig.lastIndexOf("/") + 4);
  //
  // get trigram of the current body file
  //- - - - - - - - - - - - - - - - - - - 
  parent_trig = parentlocname.substring(0, 3); 
  //
  // the file is not in the same module
  //- - - - - - - - - - - - - - - - - -
  if (toc_trig != parent_trig)
  {
    //
    // and it is not in the module of BAS, CFY, ICO, XOM or UCF
    //- - - - - - - - - - - - - - - - - - - - - - - -
    if (parent_trig != "bas" && parent_trig != "cfy" && parent_trig != "ucf" && parent_trig != "xom" && parent_trig != "ico")
    {
      ext_ok = false;
//START QUOTE TRANSLATABLE
      alert("Impossible to switch to split view mode with an external file"); 
//END QUOTE TRANSLATABLE
    }
  }
  //
  // test to see if the file in the main frame is not the splitted frameset
  //-----------------------------------------------------------------------
  if (parentlocname != targetfile && ext_ok)
  {
    //
    // change the "main" frame to the smfrs file
    //- - - - - - - - - - - - - - - - - - - - - -
    parent.main.location.href = targetfile;
    //
    // change the focus
    //- - - - - - - - -
    parent.main.focus();
    smSplit = 'NO';
  }
}
