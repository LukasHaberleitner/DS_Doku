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
 objet["enum"]["DNBActBehaviorType"]=0;
objet["enum"][0]="../DNBSimulationInterfaces/enum_DNBActBehaviorType_42895.htm";
objet["enum"]["DNBAnalysisLevel"]=1;
objet["enum"][1]="../DNBSimulationInterfaces/enum_DNBAnalysisLevel_39513.htm";
objet["enum"]["DNBHlnkBehaviorType"]=2;
objet["enum"][2]="../DNBSimulationInterfaces/enum_DNBHlnkBehaviorType_44798.htm";
objet["enum"]["DNBSimGraphUpdateMode"]=3;
objet["enum"][3]="../DNBSimulationInterfaces/enum_DNBSimGraphUpdateMode_48049.htm";
objet["enum"]["DNBSimInitStateAttr"]=4;
objet["enum"][4]="../DNBSimulationInterfaces/enum_DNBSimInitStateAttr_44620.htm";
objet["enum"]["DNBSimNavigationMode"]=5;
objet["enum"][5]="../DNBSimulationInterfaces/enum_DNBSimNavigationMode_46413.htm";
objet["enum"]["DNBVisualizationMode"]=6;
objet["enum"][6]="../DNBSimulationInterfaces/enum_DNBVisualizationMode_46796.htm";
objet["interface"]["AnalysisSettingAtt"]=0;
objet["interface"][0]="../DNBSimulationInterfaces/interface_AnalysisSettingAtt_46146.htm";
objet["interface"]["SimTraceSettingAtt"]=1;
objet["interface"][1]="../DNBSimulationInterfaces/interface_SimTraceSettingAtt_45841.htm";
objet["interface"]["SimulationInitState"]=2;
objet["interface"][2]="../DNBSimulationInterfaces/interface_SimulationInitState_47932.htm";
objet["interface"]["SimulationSettingAtt"]=3;
objet["interface"][3]="../DNBSimulationInterfaces/interface_SimulationSettingAtt_49986.htm";
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
