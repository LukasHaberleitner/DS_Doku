/* COPYRIGHT DASSAULT SYSTEMES 2006 */
/* Last released 2006 may 15th */

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

function removeNode(n)
{
  if (n.hasChildNodes())
  {
    for (var i=0; i<n.childNodes.length; i++)
      n.parentNode.insertBefore(n.childNodes[i].cloneNode(true),n);
  }
  n.parentNode.removeChild(n);
}
