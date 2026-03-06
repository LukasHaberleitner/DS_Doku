//
//     ++++++++++++++++++++++++++++++++++++++++++++++++
//     This JavaScript is included in all the SSM files
//     ++++++++++++++++++++++++++++++++++++++++++++++++
//
//========================================
//To switch back to full page viewing mode
//========================================
//
function closeframe()
{
  top.contents.smSplit = 'NO';
  top.main.location.href = parent.mainsm.location.href ;
}
//
//=========================================================
//To recompute the position of the "back-to-full_page" icon
//=========================================================
//
function PositionNoSplit()
{
  var NS = false;
  var IE  = false; 
  //
  //----------------------------------------------
  // determination of the browser nature and level
  //----------------------------------------------
  //
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
  // get the width of the frame
  //----------------------------------------------------------------------
  xMax = document.body.offsetWidth; 
  //
  // if the browser is IE
  //---------------------
  if (IE)
  { 
    document.all['layermerge'].style.posLeft = xMax- 50; 
    document.all['layermerge'].style.posTop = document.body.scrollTop + 2; 
  } 
  //
  // if the browser is Netscape
  //-----------------------------
  else
  {
    document.getElementById('layermerge').style.left = xMax- 20; 
    document.getElementById('layermerge').style.top = document.body.scrollTop + 2; 
  }
  //
  // TimeOut to recompute the position every 1/10 second (in case the user scrolled the page)
  //-----------------------------------------------------------------------------------------
  setTimeout('PositionNoSplit()',100);
}
