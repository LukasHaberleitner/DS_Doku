function xrefToc(element, val) {
  //return xref('../CAAScdBase/CAAScdTocXrefs.htm', val);
  // -- retrieve or create div to display
   var xrefWindow=document.getElementById('xrefWindow');
  if ( ! xrefWindow ) {
	  xrefWindow=document.createElement("div");
	  xrefWindow.id='xrefWindow';
	  xrefWindow.style.position="fixed";
          xrefWindow.style.background="#fefefe";
          xrefWindow.style.width="auto";
          // div.style.max-width="15%";
          xrefWindow.style.height="auto";
          // div.style.max-height="85%";
          xrefWindow.style.border="1px solid #ddd";
          xrefWindow.style.padding="5px";
          xrefWindow.style.color="#333";
          xrefWindow.style.overflow="auto";
  }
  else {
	  xrefWindow.style.visibility="visible";
	  xrefWindow.innerHTML="";
  }
  xrefWindow.style.top=element.offsetTop.toString()+'px'; // "50px";
  xrefWindow.style.left=element.offsetLeft.toString()+'px';

  // -- Data
  xtable  = { 
     HybridShape:      [ 4, 6], 
     Parameter:        [ 0, 1, 2, 4, 7, 8, 9, 10, 11], 
     Relation:         [ 0, 1, 3, 4, 7, 8, 10, 11], 
     GeometricElement: [ 1, 4, 5, 11], 
     Sketch:           [ 4, 6] };

  tocs = [ 
      "../CAAScdAniTechArticles/CAAAniTocAnalysisDocument.htm", 
      "../CAAScdDriTechArticles/CAADriTocDrawingDocument.htm", 
      "../CAAScdKniTechArticles/CAAKniTocOptimizations.htm", 
      "../CAAScdKniTechArticles/CAAKniTocParameter.htm", 
      "../CAAScdMmrTechArticles/CAAMmrTocPartDocument.htm", 
      "../CAAScdMmrTechArticles/CAAMmrTocSketch.htm", 
      "../CAAScdPriTechArticles/CAAPriTocShapes.htm", 
      "../CAAScdPstTechArticles/CAAPstTocProductDocument.htm",
      "../CAAScdMaiTechArticles/CAAMaiTocManufacturingActivity.htm",
      "../CAAScdFsiTechArticles/CAAFsiTocFunctionalDocument.htm",
      "../CAAScdDmiTechArticles/CAADmiTocActivity.htm",
      "../CAAScd2dlTechArticles/CAA2dlToc2DLayout.htm"
   ];
  
   titles  = [ 
      "Analysis Document Automation Objects", 
      "Drafting Automation Objects", 
      "Optimizations Automation Objects", 
      "Parameters Automation Objects", 
      "Part Document Automation Objects", 
      "Sketch Automation Objects", 
      "Shape Automation Objects", 
      "Product Document Automation Objects",
      "Manufacturing Automation Objects",
      "Functional Document Automation Objects",
      "Process Document Automation Objects",
      "2D Layout for 3D Design Automation Objects"
   ];

  // -- Create Div content
  var ltab=xtable[val];
  var lsam=tocs;
  var ltit=titles;

  var tbl     = document.createElement("table"); 
  var tblBody = document.createElement("tbody");

  row = document.createElement("tr");
  cell = document.createElement("td");    
  cell.className='tech';
  cell.innerHTML='<a name="TechArt"></a><strong><em>Object Models found ('+val+')</em></strong>&nbsp;<button onclick="javascript:xrefWindow.style.visibility=\'hidden\'">X</button>';
  row.appendChild(cell);
  tblBody.appendChild(row);

  // rows creation
  for (var ii=0; ii<ltab.length; ii++) {
     row = document.createElement("tr");
     cell = document.createElement("td");    
     cell.innerHTML='<a href="'+lsam[ltab[ii]]+'">'+ltit[ltab[ii]]+'</a>';
     row.appendChild(cell);
     tblBody.appendChild(row);
    }
  tbl.appendChild(tblBody);
  xrefWindow.appendChild(tbl);
  document.body.appendChild(xrefWindow);
}
