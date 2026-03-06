//
//     +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     This JavaScript is included in every defaut & index files
//     +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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

// --- handle javascript exceptions
// --- solves IR 0517502A: when the status applet is not initialized, 
// --- moving over solution icons causes errors.
function errorhandler(err)
{
//	alert("Catched Exception: "+err);
	return true;
}
window.onerror = errorhandler;

// variable intialization
//=======================
// for firefox 3 support
//
// CATIA
//
var CAAScdBase = "yes";
var i1oug_C2 = "yes";
var basil_C2 = "yes";
var basug_C2 = "yes";
var pstug_C2 = "yes";
var rt1ug_C2 = "yes";
var phsug_C2 = "yes";
var psoug_C2 = "yes";
var cceug_C2 = "yes";
var ccfug_C2 = "yes";
var cciug_C2 = "yes";
var intug_C2 = "yes";
var itfug_C2 = "yes";
var df1ug_C2 = "yes";
var cd1ug_C2 = "yes";
var wpeug_C2 = "yes";
var td1ug_C2 = "yes";
var seeug_C2 = "yes";
var cwiug_C2 = "yes";
var dplug_C2 = "yes";
var dulug_C2 = "yes";
var dejug_C2 = "yes";
var dslug_C2 = "yes";
var delug_C2 = "yes";
var dalug_C2 = "yes";
var dglug_C2 = "yes";
var dtlug_C2 = "yes";
//
var prtug_C2 = "yes";
var cfoug_C2 = "yes";
var fr1ug_C2 = "yes";
var fm1ug_C2 = "yes";
var asmug_C2 = "yes";
var driug_C2 = "yes";
var draug_C2 = "yes";
var lo1ug_C2 = "yes";
var dysug_C2 = "yes";
var cd1ug_C2 = "yes";
var sr1ug_C2 = "yes";
var wfsug_C2 = "yes";
var smdug_C2 = "yes";
var sheug_C2 = "yes";
var aslug_C2 = "yes";
var sh1ug_C2 = "yes";
var fdtug_C2 = "yes";
var mtdug_C2 = "yes";
var ccvug_C2 = "yes";
var tdfug_C2 = "yes";
var wd1ug_C2 = "yes";
var ha1ug_C2 = "yes";
var cpdug_C2 = "yes";
var cpbug_C2 = "yes";
//
var fssug_C2 = "yes";
var fskug_C2 = "yes";
var sdgug_C2 = "yes";
var dssug_C2 = "yes";
var imaug_C2 = "yes";
var abfug_C2 = "yes";
var dseug_C2 = "yes";
var qsrug_C2 = "yes";
var rsoug_C2 = "yes";
var icmug_C2 = "yes";
var srfug_C2 = "yes";
var iaeug_C2 = "yes";
//
var estug_C2 = "yes";
var anlug_C2 = "yes";
var afcug_C2 = "yes";
var fmsug_C2 = "yes";
var elfug_C2 = "yes";
var femug_C2 = "yes";
var taaug_C2 = "yes";
//
var cbdug_C2 = "yes";
var efdug_C2 = "yes";
var elbug_C2 = "yes";
var ehiug_C2 = "yes";
var ewrug_C2 = "yes";
var ehfug_C2 = "yes";
var ec1ug_C2 = "yes";
var pidug_C2 = "yes";
var hvdug_C2 = "yes";
var eldug_C2 = "yes";
var tudug_C2 = "yes";
var wgdug_C2 = "yes";
var srtug_C2 = "yes";
var ssrug_C2 = "yes";
var ecrug_C2 = "yes";
var eqtug_C2 = "yes";
var rcdug_C2 = "yes";
var wavug_C2 = "yes";
var pipug_C2 = "yes";
var tubug_C2 = "yes";
var hvaug_C2 = "yes";
var hgrug_C2 = "yes";
var cnaug_C2 = "yes";
var sfdug_C2 = "yes";
var ploug_C2 = "yes";
var sddug_C2 = "yes";
//
var mfgug_C2 = "yes";
var ncgug_C2 = "yes";
var nvgug_C2 = "yes";
var mpaug_C2 = "yes";
var pmgug_C2 = "yes";
var smgug_C2 = "yes";
var mmgug_C2 = "yes";
var mpgug_C2 = "yes";
var amgug_C2 = "yes";
var lmgug_C2 = "yes";
var mlgug_C2 = "yes";
var stlug_C2 = "yes";
var mpsug_C2 = "yes";
var mtbug_C2 = "yes";
var prpug_C2 = "yes";
//
var kwrug_C2 = "yes";
var kwxug_C2 = "yes";
var kwoug_C2 = "yes";
var pktug_C2 = "yes";
var bktug_C2 = "yes";
var pfdug_C2 = "yes";
var dmnug_C2 = "yes";
var kinug_C2 = "yes";
var spaug_C2 = "yes";
var fitug_C2 = "yes";
var farug_C2 = "yes";
var dmoug_C2 = "yes";
var anrug_C2 = "yes";
var dt1ug_C2 = "yes";
var speug_C2 = "yes";
var speil_C2 = "yes";
var cprug_C2 = "yes";
var hbrug_C2 = "yes";
var hmeug_C2 = "yes";
var hpaug_C2 = "yes";
var haaug_C2 = "yes";
var i3pug_C2 = "yes";
//
// DELMIA
//
var prpug_D2 = "yes";
var msdug_D2 = "yes";
var prdug_D2 = "yes";
var dstug_D2 = "yes";
var smpug_D2 = "yes";
var apnug_D2 = "yes";
var bwpug_D2 = "yes";
var apsug_D2 = "yes";
var fdtug_D2 = "yes";
var ptpug_D2 = "yes";
var ehsug_D2 = "yes";
var mttug_D2 = "yes";
var asmug_D2 = "yes";
var prtug_D2 = "yes";
var dysug_D2 = "yes";
var rt1ug_D2 = "yes";
var wfsug_D2 = "yes";
var mtbug_D2 = "yes";
var tsaug_D2 = "yes";
var dprug_D2 = "yes";
var prmug_D2 = "yes";
var fr1ug_D2 = "yes";
var sdgug_D2 = "yes";
//
var wsqug_D2 = "yes";
var wsuug_D2 = "yes";
var arwug_D2 = "yes";
var rrsug_D2 = "yes";
var rstug_D2 = "yes";
var psyug_D2 = "yes";
var olpug_D2 = "yes";
var dbgug_D2 = "yes";
var eqtug_D2 = "yes";
var mrlug_D2 = "yes";
var ploug_D2 = "yes";
var ec1ug_D2 = "yes";
//
var dmnug_D2 = "yes";
var dt1ug_D2 = "yes";
var spaug_D2 = "yes";
var dmoug_D2 = "yes";
var farug_D2 = "yes";
var cprug_D2 = "yes";
var kinug_D2 = "yes";
//
var hbrug_D2 = "yes";
var haaug_D2 = "yes";
var hpaug_D2 = "yes";
var hmeug_D2 = "yes";
var mhtug_D2 = "yes";
//
var mfgug_D2 = "yes";
var ncgug_D2 = "yes";
var nvgug_D2 = "yes";
var mpaug_D2 = "yes";
var pmgug_D2 = "yes";
var lmgug_D2 = "yes";
var mpsug_D2 = "yes";
var smgug_D2 = "yes";
var mmgug_D2 = "yes";
var mlgug_D2 = "yes";
//
var driug_D2 = "yes";
var draug_D2 = "yes";
var wkiug_D2 = "yes";
var sorug_D2 = "yes";
var shfug_D2 = "yes";
//
var dplug_D2 = "yes";
var dulug_D2 = "yes";
var dslug_D2 = "yes";
var delug_D2 = "yes";
var dalug_D2 = "yes";
var dglug_D2 = "yes";
var dtlug_D2 = "yes";
var ddlug_D2 = "yes";
//
var lb1ug_D2 = "yes";
var hp1ug_D2 = "yes";
var dldug_D2 = "yes";
var le1ug_D2 = "yes";
var fb1ug_D2 = "yes";
var ll1ug_D2 = "yes";
var dc1ug_D2 = "yes";
//
var basil_D2 = "yes";
var basug_D2 = "yes";
var pstug_D2 = "yes";
var itfug_D2 = "yes";
var cceug_D2 = "yes";
var kwxug_D2 = "yes";
var pktug_D2 = "yes";
var dmrug_D2 = "yes";
//
// ENOVIA DMU Navigator
//
var basil_E2 = "yes";
var basug_E2 = "yes";
var rt1ug_E2 = "yes";
var phsug_E2 = "yes";
var psoug_E2 = "yes";
var pstug_E2 = "yes";
var dmnug_E2 = "yes";
var kinug_E2 = "yes";
var spaug_E2 = "yes";
var fitug_E2 = "yes";
var farug_E2 = "yes";
var dt1ug_E2 = "yes";
var dmoug_E2 = "yes";
var du3ug_E2 = "yes";
var anrug_E2 = "yes";
var cprug_E2 = "yes";
var hbrug_E2 = "yes";
var pr1ug_E2 = "yes";
var hmeug_E2 = "yes";
var hpaug_E2 = "yes";
var haaug_E2 = "yes";
var i1oug_E2 = "yes";
var dplug_E2 = "yes";
var dulug_E2 = "yes";
var dejug_E2 = "yes";
var ddlug_E2 = "yes";
var dslug_E2 = "yes";
var delug_E2 = "yes";
var dalug_E2 = "yes";
var dglug_E2 = "yes";
var dtlug_E2 = "yes";
//
// ENOVIA V5 VPM
//
var adkug_L2 = "yes";
var lroug_L2 = "yes";
var sanug_L2 = "yes";
var aedug_L2 = "yes";
var pasug_L2 = "yes";
var pvmug_L2 = "yes";
var pgtug_L2 = "yes";
var ecmug_L2 = "yes";
var dmtug_L2 = "yes";
var pimug_L2 = "yes";
var sptug_L2 = "yes";
var sdeug_L2 = "yes";
var lcnug_L2 = "yes";
var wdfug_L2 = "yes";
var wkmug_L2 = "yes";
var dcmug_L2 = "yes";
var cgmug_L2 = "yes";
var syaad_L2 = "yes";
var eaead_L2 = "yes";
var basil_L2 = "yes";
var phbug_L2 = "yes";
var i1oug_L2 = "yes";
//
var wpeug_L2 = "yes";
var ecvug_L2 = "yes";
var ewsug_L2 = "yes";
//
// ENOVIA 3d com
//
var ptlad_O2 = "yes";
var ptlug_O2 = "yes";
var basil_O2 = "yes";
var dplug_O2 = "yes";
var dulug_O2 = "yes";
var dejug_O2 = "yes";
var ddlug_O2 = "yes";
var dslug_O2 = "yes";
var delug_O2 = "yes";
var dalug_O2 = "yes";
var dglug_O2 = "yes";
var dtlug_O2 = "yes";
var pmlug_O2 = "yes";
var vplug_O2 = "yes";
//
// ENOVIA CES
//
var secug_V2 = "yes";
var sruug_V2 = "yes";
var slcug_V2 = "yes";
var slrug_V2 = "yes";
var ssgug_V2 = "yes";
var scgug_V2 = "yes";
var sciug_V2 = "yes";
var scaad_V2 = "yes";
var scail_V2 = "yes";
var shbad_V2 = "yes";
//
// DELMIA Automation
//
var basil_W2 = "yes";
var basug_W2 = "yes";
var pstug_W2 = "yes";
var cceug_W2 = "yes";
//
var spaug_W2 = "yes";
//
var wsuug_W2 = "yes";
var psyug_W2 = "yes";
var dbgug_W2 = "yes";
var mrlug_W2 = "yes";
//
var lb1ug_W2 = "yes";
var le1ug_W2 = "yes";
var fb1ug_W2 = "yes";
var ll1ug_W2 = "yes";
var cg1ug_W2 = "yes";
var sc1ug_W2 = "yes";
var lt1ug_W2 = "yes";
var su1ug_W2 = "yes";
var dldug_W2 = "yes";
var dc1ug_W2 = "yes";
var hp1ug_W2 = "yes";
//
var MediaSuffix;
//
// for the character string
//-------------------------
var singledot_string = ".";
var slash_string = "/";
var i_string = "i";
var no_string = "no";
gif_string = singledot_string + "gif"
//
// determining whether we are in Run Time or Build Time view and the Media suffix
//===============================================================================
TimeView = document.location.href.toString();
//
// determining the Media suffix
//-----------------------------
if      (TimeView.indexOf("CATIA_") != -1) MediaSuffix = "_C2";
else if (TimeView.indexOf("DELMIA_Automation_")!= -1) MediaSuffix = "_W2";
else if (TimeView.indexOf("DELMIA_")!= -1) MediaSuffix = "_D2";
else if (TimeView.indexOf("DMU_")   != -1) MediaSuffix = "_E2";
else if (TimeView.indexOf("ENOVIA_DMU_Navigator_")   != -1) MediaSuffix = "_E2";
else if (TimeView.indexOf("3dcom_") != -1) MediaSuffix = "_O2";
else if (TimeView.indexOf("ENOVIA_3d_com_") != -1) MediaSuffix = "_O2";
else if (TimeView.indexOf("LCAS_")  != -1) MediaSuffix = "_L2";
else if (TimeView.indexOf("ENOVIA_V5_VPM_")  != -1) MediaSuffix = "_L2";
else if (TimeView.indexOf("CES_")   != -1) MediaSuffix = "_V2";
else if (TimeView.indexOf("ENOVIA_CES_")   != -1) MediaSuffix = "_V2";
//
// if there is the suffix ".doc/src" then we are in the Buid Time view
//--------------------------------------------------------------------
if (TimeView.indexOf(".doc/src") != -1)
  RunTime = false;
//
// if there is no ".doc/src" in the path then we are in the Run Time view 
//-----------------------------------------------------------------------
else
  RunTime = true;
//
// determining the path wher to find the image
//============================================
// Run Time view ==> the image is in icons_X2/home/homelogo
//---------------------------------------------------------
if (RunTime)
{
  path_string = "icons" + MediaSuffix + "/home/homelogo"
}
//
// Build Time view ==> the image is in ICONS/icons.doc/src/home/homelogo
//----------------------------------------------------------------------
else
{
  path_string = "../../../ICONS/icons.doc/src/home/homelogo"
}
//
//====================================================================
// highlight the image of a doc when the mouse is hovering above the icon
//====================================================================
function imgIn(imgName,layName,prod,status)
{
  // Run Time View
  //--------------
  if (RunTime)
  {
    // the doc is present
    //- - - - - - - - - -
    if ( status == "yes" )
    {
      document[imgName].src = path_string + imgName.substring(3, imgName.length) + i_string + gif_string;
    } 
    // the doc is absent
    //- - - - - - - - - -
    else
    {
      imgNo(imgName,layName);
    }
  }
  //
  // Build Time View
  //----------------
  else
    document[imgName].src = path_string + imgName.substring(3, imgName.length) + i_string + gif_string;
}
//
//===========================================
// put the image of a doc to its normal state 
//===========================================
//
function imgOut(imgName,layName,prod,status)
{
  // Run Time View
  //--------------
  if (RunTime)
  {
    // the doc is present
    //- - - - - - - - - -
    if ( status == "yes" )
    {
	    document[imgName].src = path_string + imgName.substring(3, imgName.length) + gif_string;
    }
    // the doc is absent
    //- - - - - - - - - -
    else
    {
      imgNo(imgName,layName);
    }
  }
  //
  // Build Time View
  //----------------
  else
  {
    document[imgName].src = path_string + imgName.substring(3, imgName.length) + gif_string;
  }
}
//
//=================================
// image of a doc when it is absent
//=================================
//
function imgNo(imgName,layName)
{
  document[imgName].src = path_string + imgName.substring(3, imgName.length) + no_string + gif_string;
}
//
//=========================================================================
// highlight the image of a solution when the mouse is hovering above the icon
//=========================================================================
//
function imgInSN()
{
  imgName = imgInSN.arguments[0];
  layName = imgInSN.arguments[1];
  document[imgName].src = eval(imgName + "in.src");
}
//
//================================================
// put the image of a solution to its normal state
//================================================
//
function imgOutSN()
{
  imgName = imgOutSN.arguments[0];
  layName = imgOutSN.arguments[1];
  document[imgName].src = eval(imgName + "out.src");
}
//
//=============================================================
// render visible the layer containing the docs of the 
// solution and compute the acccessibility of those docs
//=============================================================
//
var menuState = 0;
function title_select()
{
  //
  // decoding the variables (1)
  //---------------------------
  // first argument is the number of the layer
  //- - - - - - - - - - - - - - - - - - - - - -
  menunumber=title_select.arguments[0];
  //
  // deduce the name of the layer
  //- - - - - - - - - - - - - - - 
  layName = "menu" + menunumber;
  //
  // compute number of docs on the layer: nb_Doc = (nb_arg - 1) /2
  //--------------------------------------------------------------
  nbDoc = title_select.arguments.length - 1;
  nbDoc = nbDoc / 2; 
  //
  // evaluate & visualize the image for all the docs on the layer (arguments 2 to n/2)
  //----------------------------------------------------------------------------------
  for (Count = nbDoc + 1; Count <= title_select.arguments.length -1; Count++)
  {
    prodName = title_select.arguments[Count];
    trigram  = prodName.substring(0, 3);

    // fmf, 20dec04, img name computation rewritten
    // image name, by default, is img + trigram
    imgName  = "img" + trigram;

    // special case for install and admin guides
    if (prodName.substring(3, 5) == "il")
	    imgName = "img" + trigram + "l";
    else if (prodName.substring(3, 5) == "ad")
	    imgName = "img" + trigram + "a";
  
    // special case for basil product
    // it has different icons for each brand
    if ( prodName.substring(0, 5) == "basil" )
    {
	    if ( MediaSuffix == "_O2" )
	      imgName = "imgbaso";
      else if ( MediaSuffix == "_L2" )
	      imgName = "imgbase";
	    else
	      imgName = "imgbasl"; // the standard name for install guides
    }

  // visualising the image
  //- - - - - - - - - - - 
  imgOut(imgName, layName, prodName, title_select.arguments[Count - nbDoc]);
  }
}
//
//========================================================
// Specific function to 1 menu pages within NS7 or Mozilla
//========================================================
//
function visualize_div()
{
  //
  // decoding the variables (1)
  //---------------------------
  // first argument is the number of the layer
  //- - - - - - - - - - - - - - - - - - - - - -
  menunumber = visualize_div.arguments[0];
  //
  // deduce the name of the layer
  //- - - - - - - - - - - - - - - 
  layName = "menu" + menunumber;
  //
  // if the previously visible layer is not the selected layer ==> render it invisible
  //----------------------------------------------------------------------------------
  if (menuState)
  {
    if (NS)
    {
      layTemp = "menu" + menuState;
      document.getElementById(layTemp).style.visibility = "hidden";
    }
    else
    {
      eval(doc + ".menu" + menuState + sty ).visibility = "hidden";
    }
  }
  //
  // make the selected layer visible
  //--------------------------------
  if (NS)
  {
    document.getElementById(layName).style.visibility = "visible";
  }
  else
  {
    eval(doc + "." + layName + sty ).visibility = "visible";
  }
  //
  // compute number of docs on the layer: nb_Doc = nb_arg - 1
  //---------------------------------------------------------
  nbDoc = visualize_div.arguments.length - 1;
  //
  // evaluate & visualize the image for all the docs on the layer (arguments 2 to n/2)
  //----------------------------------------------------------------------------------
  for (Count = 2; Count <= nbDoc; Count++)
  {
    prodName = visualize_div.arguments[Count];
    trigram  = prodName.substring(0, 3);

    // fmf, 20dec04, img name computation rewritten
    // image name, by default, is img + trigram
    imgName  = "img" + trigram;

    // special case for install and admin guides
    if (prodName.substring(3, 5) == "il")
	    imgName = "img" + trigram + "l";
    else if (prodName.substring(3, 5) == "ad")
	    imgName = "img" + trigram + "a";
  
    // special case for basil product
    // it has different icons for each brand
    if ( prodName.substring(0, 5) == "basil" )
    {
	    if ( MediaSuffix == "_O2" )
	      imgName = "imgbaso";
	    else if ( MediaSuffix == "_L2" )
	      imgName = "imgbase";
	    else
	      imgName = "imgbasl"; // the standard name for install guides
    }

    // visualising the image
    //- - - - - - - - - - - 
	  document[imgName].src = path_string + imgName.substring(3, imgName.length) + gif_string;
  }
  //
  // store the number of the current layer
  //-------------------------------------
  menuState = menunumber;
}
//
//============================================
// Specific function to open CAA documentation
//============================================
//
function openCAA()
{
  location.href='CAAScdBase/CAAScdAutomationHome.htm';
}
//
//==================================================
// read the INDEXFile to see if the product is there
//==================================================
//
function product(prod, status, cible)
{
  if ( status == "yes" )
  {
    if (prod=="CAAScdBase")
      location.href='CAAScdBase/CAAScdAutomationHome.htm';
    else
      window.location = cible.href;
  } 
  else
  {
//START QUOTE TRANSLATABLE
    alert ("This product has not been installed.");
//END QUOTE TRANSLATABLE
  }
}
