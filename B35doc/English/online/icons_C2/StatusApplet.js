// =======================================================================
// === Functions to load list of all the products and its installed or not installed status
// === Copyright © Dassault Systemes / Chandak Rashmi (Aug 19 2016)
// =======================================================================
// === This JavaScript is replacement for the StatusApplet.jar
// === It is responsible for the functionality of status Applet.
// =======================================================================

function loadProduct(mybrand)
{
	var install_list = mybrand+"_INDEXFile.SOLidx";
	var product_list = loadFile_mod(install_list, "txt");
	var module = product_list.replaceAll('\r','').split('\n');

	var default_page = mybrand+"_default.htm";
	var htmstr = loadFile_mod(default_page, "txt");
	
	var product = $(htmstr).find('a[onclick]');
	for(var i=0; i < product.length; i++) {
			var str = product[i].getAttribute('onclick');
			var name = str.substring(9,str.indexOf("'",9));
			var n = module.indexOf(name);
			if(n != -1)
				window[name] = "yes";
			else
				window[name] = "no";
	};
}
