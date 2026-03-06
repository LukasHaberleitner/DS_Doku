var objet=new Array; 
     objet["class"]=new Array; 
     objet["exception"]=new Array; 
     objet["collection"]=new Array; 
     objet["notification"]=new Array; 
     objet["interface"]=new Array; 
     objet["struct"]=new Array; 
     objet["enum"]=new Array; 
     objet["define"]=new Array; 
     objet["typedef"]=new Array; 
     objet["function"]=new Array; 
 	var DSCharacteristic=new Array ; 
 objet["enum"]["CatDxfExportBlocksEnum"]=0;
objet["enum"][0]="../CATDdeSettingsInterfaces/enum_CatDxfExportBlocksEnum_53253.htm";
objet["enum"]["CatDxfExportModeEnum"]=1;
objet["enum"][1]="../CATDdeSettingsInterfaces/enum_CatDxfExportModeEnum_48823.htm";
objet["enum"]["CatDxfExportSheetsEnum"]=2;
objet["enum"][2]="../CATDdeSettingsInterfaces/enum_CatDxfExportSheetsEnum_53439.htm";
objet["enum"]["CatDxfExportVersionEnum"]=3;
objet["enum"][3]="../CATDdeSettingsInterfaces/enum_CatDxfExportVersionEnum_55969.htm";
objet["enum"]["CatDxfImportCreateEndPointsEnum"]=4;
objet["enum"][4]="../CATDdeSettingsInterfaces/enum_CatDxfImportCreateEndPointsEnum_77070.htm";
objet["enum"]["CatDxfImportDimensionsEnum"]=5;
objet["enum"][5]="../CATDdeSettingsInterfaces/enum_CatDxfImportDimensionsEnum_63469.htm";
objet["enum"]["CatDxfImportUnitEnum"]=6;
objet["enum"][6]="../CATDdeSettingsInterfaces/enum_CatDxfImportUnitEnum_49148.htm";
objet["enum"]["CatIg2ExportModeEnum"]=7;
objet["enum"][7]="../CATDdeSettingsInterfaces/enum_CatIg2ExportModeEnum_48510.htm";
objet["enum"]["CatIg2ExportSheetsEnum"]=8;
objet["enum"][8]="../CATDdeSettingsInterfaces/enum_CatIg2ExportSheetsEnum_53126.htm";
objet["enum"]["CatIg2ImportCreateEndPointsEnum"]=9;
objet["enum"][9]="../CATDdeSettingsInterfaces/enum_CatIg2ImportCreateEndPointsEnum_76757.htm";
objet["enum"]["CatIg2ImportDestinationViewEnum"]=10;
objet["enum"][10]="../CATDdeSettingsInterfaces/enum_CatIg2ImportDestinationViewEnum_77577.htm";
objet["enum"]["CatIg2ImportDimensionsEnum"]=11;
objet["enum"][11]="../CATDdeSettingsInterfaces/enum_CatIg2ImportDimensionsEnum_63156.htm";
objet["enum"]["CatIg2ImportUnitEnum"]=12;
objet["enum"][12]="../CATDdeSettingsInterfaces/enum_CatIg2ImportUnitEnum_48835.htm";
objet["interface"]["DxfSettingAtt"]=0;
objet["interface"][0]="../CATDdeSettingsInterfaces/interface_DxfSettingAtt_40438.htm";
objet["interface"]["Ig2SettingAtt"]=1;
objet["interface"][1]="../CATDdeSettingsInterfaces/interface_Ig2SettingAtt_40317.htm";
function getDsCharacteristic(name,itype) { 
     var dsCh = null; 
     if (name!=null && itype!=null && itype == "class") { 
         dsCh = DSCharacteristic[name]; 
     } 
     if (dsCh == null) { 
        dsCh=itype; 
    }   
    return dsCh; 
 } 
 function locateObject(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){      
   return 1; 
 }else{ 
    return 0; 
 } 
 } 
 function openLinkNP(name,itype,NorP){ 
 if(name==null || itype==null || NorP==null) return 0; 
 var type = getDsCharacteristic(name,itype);    
 var findnum=objet[type][name]; 
 var findobj;   
 if(NorP==1 && findnum!=null){ findobj=objet[type][findnum+1];} 
 else {findobj=objet[type][findnum-1];}       
 //alert(findobj); 
 if(findobj!=null){ 
     this.location=findobj; 
 } 
 }
