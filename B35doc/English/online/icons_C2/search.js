var index_file_data = "";
var ModuleNumber = [];
var DocIndex = [];
var PartNumber = [];
var nb_doc = 0;
var k1=0;
var mod_name="";
var mod_name_list=[];
var longVal = new Long(1, 1);
var current_module;
var ResultSet = [];
var Resultsetdata = [];
var filter;
var result_final = [];
var old_word = "";
var old_filter = "";
var index_file = "";
var old_product_search_list = [];
var installedMod = [];

// ----------------------------------------------------------------------------------------
function isfound(modnum, index, partnum) {
    var flag = false;
    for (i = 0 ; i < nb_doc ; i++) {
        if ((ModuleNumber[i] == modnum) && (DocIndex[i] == index) && (PartNumber[i] == partnum)) {
            flag = true;
            break;
        }
    }
    if (flag) return 0;
    return -1;
}

// ----------------------------------------------------------------------------------------
function ajoute(modnum, index, partnum, rs) {
    ModuleNumber[nb_doc] = modnum;
    DocIndex[nb_doc] = index;
    PartNumber[nb_doc] = partnum;
    mod_name_list[k1] = mod_name;
    var doc_no = rs.length;
	
	if(ModToCheck.indexOf(mod_name) >=0 )
		rs[doc_no] = partTitlesForModuleS[ModToCheck.indexOf(mod_name)];
    rs[doc_no] = rs[doc_no] + " " + "-" + " " + current_module.TitleList[index];
	rs[doc_no] = rs[doc_no] + ":" + mod_name + "/" + current_module.FileList[index];
    nb_doc++;
    k1++;
}

// ----------------------------------------------------------------------------------------
function add_result(modno, word, Bits, rs) {
    var DocIndex = 0;
    for (BitIndex = 0; BitIndex < Bits.length; BitIndex++) {
        var CurrentBits = Bits[BitIndex];
        for (var Shift = 0; Shift < 32; Shift++) {
            if ((CurrentBits & (longVal.low)) != 0) {
                var PartNumber = 0;
                if (DocIndex >= 1) {
                    PartNumber = 0;
                }
                var trouve = isfound(modno, DocIndex, PartNumber);
                if (trouve != 0) {
                    ajoute(modno, DocIndex, PartNumber, rs);
                }
            }
            CurrentBits >>>= 1;
            DocIndex++;
        }
    }
    return 0;
}

// ----------------------------------------------------------------------------------------
function Intersection(result_temp) {
    var x = 0;
    var temp = [];
    for (i2 = 0 ; i2 < result_final.length ; i2++) {
        for (i = 0 ; i < result_temp.length ; i++) {
            if (result_final[i2] == result_temp[i]) {
                temp[x] = result_temp[i];
                x++;
                break;
            }
        }
    }
    result_final = [];
    result_final.push.apply(result_final, temp);
}

// ----------------------------------------------------------------------------------------
function SearchString(word, modno, match,ModToCheckList) {
    var x = 10;
    var Bits = [];
	mod_to_search = (Object.keys(index_file_data)).indexOf(ModToCheckList[modno]);
    current_module = index_file_data[Object.keys(index_file_data)[mod_to_search]];
    mod_name = Object.keys(index_file_data)[mod_to_search];
	var Modfound = false;
	
	//check if module is installed
	for (i = 0; i < ModToCheckList.length; i++) {
		if((ModToCheckList[i].toLowerCase()) == (mod_name.toLowerCase())) {
			Modfound = true;
			break;
		}
    }
	
	if(Modfound == true) {
		var wordlist = current_module.WordList;
		var result_temp = [];
		result_final = [];
		for (z = 0; z < word.length; z++) {
			result_temp = [];
			if (filter != MODE2) {
				nb_doc = 0;
				ModuleNumber = [], DocIndex = [], PartNumber = [];

			}
			for (var key in wordlist) {
				if (wordlist.hasOwnProperty(key)) {
					if (match == false && key.toLowerCase().indexOf(word[z].toLowerCase()) !== -1) {
						Bits = wordlist[key];
						add_result(modno, word, Bits, result_temp);
					}
					else {
						if (key.toLowerCase() == (word[z].toLowerCase())) {
							Bits = wordlist[key];
							add_result(modno, word, Bits, result_temp);
						}
					}
				}
			}
			if (filter == MODE1 || filter == MODE3) {
				if (z == 0) {
					result_final.push.apply(result_final, result_temp);
				}
				else {
					if (result_temp.length != 0)
						Intersection(result_temp);
					else {
						result_final = [];
						break;
					}
				}
			}
			else {
				ResultSet.push.apply(ResultSet, result_temp);
			}
		}
		if (result_final.length != 0) {
			ResultSet.push.apply(ResultSet, result_final);
		}
	}
}

// ----------------------------------------------------------------------------------------
function process_exact_phrases(input_string) {
    input_string = input_string.join("");
    var url = window.location.href;
    var ResultSet_final = [];
    var z = 0;
    for (k = 0; k < ResultSet.length; k++) {
        url = url.substring(0, url.indexOf("online"));
        url = url + "online/" + ResultSet[k].substr((ResultSet[k]).lastIndexOf(":") +1);
		console.log(url);
        var htmstr = loadFile_mod(url, "txt");
        htmstr = htmstr.replace(/ /g, '');
        var index = (htmstr.toLowerCase()).indexOf(input_string.toLowerCase());
        if (index > 0) {
            ResultSet_final[z] = ResultSet[k];
            z++;
        }
    }
    ResultSet = [];
    ResultSet.push.apply(ResultSet, ResultSet_final);
    ResultSet_final = [];
}

// ----------------------------------------------------------------------------------------
function Search(mybrand, mode, product_search_list) {
    var index_file_name = mybrand + "_index.json";
    var iString = $('#usersearch').val();
    if (iString == "")
        return;
    filter = $("#select_class :selected").text();
    var match = $('#match').is(":checked");
    var input_string = [];
    input_string = iString.split(" ");

    var prod_count = 0;
    ResultSet = [];

    if (index_file == "")
        index_file = loadFile_mod(index_file_name, "txt");

    if (index_file_data == "")
        index_file_data = JSON.parse(index_file);
    var flag_prod = false;

    if (product_search_list != undefined && product_search_list != null && product_search_list.length != 0) {
		if(mode == 2) {
			for (j = 0; j < indexModuleToCheckSolution; j++) {
            flag_prod = false;
            for (q = 0; q < product_search_list.length; q++) {
                if (product_search_list[q].text == partTitlesForModuleSSolution[j]) {
                    flag_prod = true;
                    break;
                }
            }
            if (flag_prod)
                SearchString(input_string, j, match, ModToCheckSolution);
			}
		}
		else if(mode == 3) {
			for (j = 0; j < indexModuleToCheck; j++) {
            flag_prod = false;
            for (q = 0; q < product_search_list.length; q++) {
                if (product_search_list[q].text == partTitlesForModuleS[j]) {
                    flag_prod = true;
                    break;
                }
            }
            if (flag_prod)
                SearchString(input_string, j, match, ModToCheck);
			}
		}
    }
    else {
        for (j = 0; j < indexModuleToCheck; j++) {
            SearchString(input_string, j, match, ModToCheck);
        }
    }

    if (filter == MODE3) {
        process_exact_phrases(input_string);
    }

    old_word = iString;
    old_filter = filter;
    if (product_search_list != null && product_search_list != undefined && product_search_list.length != 0)
        old_product_search_list.push.apply(old_product_search_list, product_search_list);
    ModuleNumber = [];
    PartNumber = [];
    DocIndex = [];
    nb_doc = 0;
}
