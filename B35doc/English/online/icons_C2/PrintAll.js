/* COPYRIGHT DASSAULT SYSTEMES 2006 */
/* Last released 2006 june 30th     */
/* To be used in conjunction with : */
/* - LoadDiv.js                     */
/* - dsprint.css                    */
/* - CATIAbnr.htm                   */
/* Test to perform when delivering one of these files :          */
/* - open a page with links to other products                    */
/* - print preview : check every link, images, page breaks, cuts */

// 29th July 2009:
// VD1:   IR A0659980.   
//        some pages display twice when we open print-preview
//        Fix: Modified code to check duplicate links.
//        Case 1: Shared folder in local installation. Replace %20 with space.
//        Case 2: Installation on remote system (file:// and not http://)

/*---------------------------------------------------------------- */
function removeNode(n)
{
  if (n.hasChildNodes())
  {
    for (var i=0; i<n.childNodes.length; i++)
      n.parentNode.insertBefore(n.childNodes[i].cloneNode(true),n);
  }
  n.parentNode.removeChild(n);
}

/*---------------------------------------------------------------- */
function loadDiv(the_iframe,the_div)
{
  var FrameBody = document.getElementById(the_iframe).contentWindow.document.body;
  do
  {
    var a = FrameBody.getElementsByTagName("A");
    var an = a.length;
    for (var i=0; i<a.length; i++)
      removeNode(a[i]);
  } while (an>0);
  var FrameSource = FrameBody.innerHTML;
  var Link = document.getElementById(the_iframe).src;
  var relPath_Link = Link.substring(0,Link.lastIndexOf('/')+1);
  FrameSource = FrameSource.replace(/src=\"/g,'src=\"'+relPath_Link);
  document.getElementById(the_div).innerHTML = FrameSource;
  document.printedpages = document.printedpages+1;
  if (document.npages <= document.printedpages) {window.focus();window.print();} 
}

/*---------------------------------------------------------------- */
function printAllPages()
{ 
  try
  {
	 var x = new Array(10);
    var link="";
    var index=0;
    var found=0;
    var IFrameSource="";
    var allLinks ="";
    var docTitle ="";
    var contentPageLink ="";
    var printframe;
    var hash;
    var mainPageLink;
    
    if (parent.frames['main'])
    {
      if (parent.frames['main'].frames['mainsm'])
        printframe = parent.frames['main'].frames['mainsm']; 
      else
        printframe = parent.frames['main'];
    }
    else
    {
      if (parent.frames['DS_SEARCH'])
        printframe=parent.frames['DS_SEARCH'];
      else return;
    }
    
    mainPageLink = document.URL;
    mainPageLink=mainPageLink.replace(/\\/g,"/");
    printframe.focus();
    allLinks = printframe.document.getElementsByTagName('a');
    docTitle = printframe.document.title;
	
    contentPageLink = printframe.document.URL;
    hash = contentPageLink.indexOf("#");
    if (hash>0)
      contentPageLink = contentPageLink.substring(0,hash);
    if (contentPageLink.match("//")&&(!contentPageLink.match("///")))
      contentPageLink = contentPageLink.replace(/\/\//,"///");
	 contentPageLink = contentPageLink.replace(/\\/g,"/");
    if (contentPageLink.match("http:///"))
      contentPageLink = contentPageLink.replace(/http:\/\/\//,"http://");

    x[index] = contentPageLink;
    FinalSource = getIFrameSource(index,contentPageLink);
    index++;
    
    for (var i=0; i<allLinks.length; i++)
    {
      var linksText = "" + allLinks[i].href;
      var htmlTest = linksText.substring(linksText.lastIndexOf("."),linksText.lastIndexOf(".")+4);
      if ((linksText.length <= 0)||(htmlTest!=".htm"))
        continue;
    
      hash = linksText.indexOf("#");
      if (hash>0)
        linksText = linksText.substring(0,hash);
        
      found = 0;
      for (var j=0; j<index; j++)
      {
        // VD1 : IR A0659980
        // Case 1: Shared folder in local installation. Replace %20 with space.
        var isFound=true;
		    do{
			      if(linksText.match('%20')!=null)
				      linksText=linksText.replace('%20',' ');
			      else
				      isFound=false;
		    }while(isFound)
        // Case 2: Installation on remote system (file:// and not http://)
        if (x[j].replace('/////','//')==linksText)
        {
          found = 1;
          break;
        }
        // VD1 : IR A0659980
      }
      if (found==0)
      {
        x[index] = linksText;
        IFrameSource = getIFrameSource(index,linksText);
        FinalSource = FinalSource+IFrameSource;
        index++;
      }
    }
    
    // computing the media suffix to access style sheet
    //-------------------------------------------------
    var locMediaSuffix = "";
    tempSuffix = top.common_banner.location.href.toString();
    locMediaSuffix = tempSuffix.substring(tempSuffix.lastIndexOf("_"), tempSuffix.lastIndexOf("_") + 3);
    
    var loadDivScript="function loadDiv(the_iframe,the_div)";
    loadDivScript+="{";
    loadDivScript+=" var FrameBody = document.getElementById(the_iframe).contentWindow.document.body;";
    loadDivScript+="  do";
    loadDivScript+="  {";
    loadDivScript+="    var a = FrameBody.getElementsByTagName('A');";
    loadDivScript+="    var an = a.length;";
    loadDivScript+="    for (var i=0; i<a.length; i++)";
    loadDivScript+="      removeNode(a[i]);";
    loadDivScript+="  } while (an>0);";
    loadDivScript+="  var FrameSource = FrameBody.innerHTML;";
    loadDivScript+="  var Link = document.getElementById(the_iframe).src;";
    loadDivScript+="  var relPath_Link = Link.substring(0,Link.lastIndexOf('/')+1);";
    loadDivScript+="  FrameSource = FrameSource.replace(/src=\"/g,'src=\"'+relPath_Link);";
    loadDivScript+="  document.getElementById(the_div).innerHTML = FrameSource;"
    loadDivScript+="  document.printedpages = document.printedpages+1;";
    loadDivScript+="  if (document.npages <= document.printedpages) {window.focus();window.print();} ";
    loadDivScript+="}";
    loadDivScript+="function removeNode(n)";
    loadDivScript+="{";
    loadDivScript+="  if (n.hasChildNodes())";
    loadDivScript+="  {";
    loadDivScript+="    for (var i=0; i<n.childNodes.length; i++)";
    loadDivScript+="      n.parentNode.insertBefore(n.childNodes[i].cloneNode(true),n);";
    loadDivScript+="  }";
    loadDivScript+="  n.parentNode.removeChild(n);";
    loadDivScript+="}";

    var scriptSrcLink = mainPageLink.substring(0,mainPageLink.lastIndexOf('/')+1);
    var npagesscript = "<scr"+"ipt language='Javascript'>document.printedpages=0; document.npages="+index+"</scr"+"ipt>\n";
    TheNewWin = window.open('','printFrame','height=510,width=700,toolbar=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes');
    TheNewWin.document.open();
    TheNewWin.document.write("<html><head><title>"+docTitle+"</title>");
    TheNewWin.document.write("<link rel='stylesheet' href='..\\icons"+locMediaSuffix+"\\dsprint.css' type='text/css' />");
    TheNewWin.document.write("<scr"+"ipt language='Javascript' >"+loadDivScript+"</scr"+"ipt>"+npagesscript);
    TheNewWin.document.write("</head><body>"+FinalSource+"</body></html>");
    TheNewWin.document.close();
  } catch (e) {return;}
}

/*---------------------------------------------------------------- */
function getIFrameSource(index,link)
{
  var ifid = "iframe_"+index;
  var divid = "div_"+index;
  var framesrc = "";
 
  if (index != 0)
    framesrc += "<div class='pbreak'></div>";
  framesrc += "<IFRAME onLoad='loadDiv(\""+ifid+"\",\""+divid+"\");' src='"+link+"' id='"+ifid+"' WIDTH='0' HEIGHT='0' frameborder='0' SCROLLING='NO'></IFRAME><div id='"+divid+"'></div>"; 
  return framesrc;
}
