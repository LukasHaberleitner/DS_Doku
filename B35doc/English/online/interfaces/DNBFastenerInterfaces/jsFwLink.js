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
 objet["enum"]["DNBAssignStatus"]=0;
objet["enum"][0]="../DNBFastenerInterfaces/enum_DNBAssignStatus_33591.htm";
objet["enum"]["DNBPPRRemoveStatus"]=1;
objet["enum"][1]="../DNBFastenerInterfaces/enum_DNBPPRRemoveStatus_38393.htm";
objet["interface"]["CurveFastener"]=0;
objet["interface"][0]="../DNBFastenerInterfaces/interface_CurveFastener_33702.htm";
objet["interface"]["DNBFastenerItemServices"]=1;
objet["interface"][1]="../DNBFastenerInterfaces/interface_DNBFastenerItemServices_51744.htm";
objet["interface"]["DNBFastenerManagement"]=2;
objet["interface"][2]="../DNBFastenerInterfaces/interface_DNBFastenerManagement_47202.htm";
objet["interface"]["DNBFastenerNewMfgPosServices"]=3;
objet["interface"][3]="../DNBFastenerInterfaces/interface_DNBFastenerNewMfgPosServices_64306.htm";
objet["interface"]["Fastener"]=4;
objet["interface"][4]="../DNBFastenerInterfaces/interface_Fastener_28479.htm";
objet["interface"]["FastenerGroup"]=5;
objet["interface"][5]="../DNBFastenerInterfaces/interface_FastenerGroup_33814.htm";
objet["interface"]["FastenerSet"]=6;
objet["interface"][6]="../DNBFastenerInterfaces/interface_FastenerSet_31212.htm";
objet["interface"]["FastenerWorkBench"]=7;
objet["interface"][7]="../DNBFastenerInterfaces/interface_FastenerWorkBench_39285.htm";
objet["interface"]["PointFastener"]=8;
objet["interface"][8]="../DNBFastenerInterfaces/interface_PointFastener_33714.htm";
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
