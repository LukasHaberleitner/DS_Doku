
var isNet = (navigator.appName.indexOf("Netscape") != -1);
var isIE  = (navigator.appName.indexOf("Microsoft") != -1);
var win;

//-------------------------------------------------------------------
function ouvre(im)
{
  // var paramdebug = "width=" + w + ",height=" + h + ",top=0,left=0,resizable=yes,scrollbars=yes,location=yes,status=yes";
  if ( win )
  {
    if ( win.closed == false ) win.close();
  }

  var ima = new Image;
  ima.src = im;
  w = ima.width;
  h = ima.height;
  // alert ("w : " + w); 
  // alert ("h : " + h); 
  if (( w == 0 ) || ( h == 0 )) 
  {
	  w = 800;
	  h = 400;
  }
  else
  {
  	w += 5;
  	h += 5;
  }
  var param = "width=" + w + ",height=" + h + ",top=0,left=0,resizable=yes,scrollbars=yes,location=no";
  win = window.open ("","IMAGE", param);

  win.document.write("<html>\
<head>\
<STYLE TYPE=\"text/css\">\
img  {position:absolute; left:0px; top:0px; width: auto; visibility:visible;}\
</style>\
</head>\
<body onBlur=\"window.close()\">\
<a href=\"#\" onClick=\"window.close();return false\">\
<img name=\"IMA\" src=\"");
  win.document.write(im);
  win.document.write('"></a>\
</body>\
</html>');
  win.document.close();
  win.focus();
  
}
//-------------------------------------------------------------------
function IsIcon(contenu)
{
	if ( (index = contenu.lastIndexOf("_small")) != -1) 
	{
      contenu = contenu.substring(0, index) + contenu.substring(index + 6);
      ouvre(contenu);
   }
   else if ( (index = contenu.lastIndexOf("_s")) != -1 ) 
   {
      contenu = contenu.substring(0, index) + contenu.substring(index + 2);
      ouvre(contenu);
   }
}

//-------------------------------------------------------------------
function handler(e)
{
	if ( isNet )
	{
		if ( e.target.tagName == "IMG" )
		{
		 	var contenu = e.target.src;
			IsIcon(contenu);

		} 
 		return true;
	}

	else if ( isIE )
	{
		if ( event.srcElement.tagName == "IMG" )
		{
		 	var contenu = event.srcElement.src;
			IsIcon(contenu);
		} 
		window.event.cancelBubble = true;
     		return true;
	}
}

//-------------------------------------------------------------------
for ( var d = 0; d < document.images.length; d++ )
{
	document.images[d].onclick = handler;
}
