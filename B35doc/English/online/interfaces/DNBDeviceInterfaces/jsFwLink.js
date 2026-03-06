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
 objet["interface"]["BasicDevice"]=0;
objet["interface"][0]="../DNBDeviceInterfaces/interface_BasicDevice_26765.htm";
objet["interface"]["D5Device"]=1;
objet["interface"][1]="../DNBDeviceInterfaces/interface_D5Device_24004.htm";
objet["interface"]["DOFState"]=2;
objet["interface"][2]="../DNBDeviceInterfaces/interface_DOFState_24034.htm";
objet["interface"]["DevAnalysisSettingAtt"]=3;
objet["interface"][3]="../DNBDeviceInterfaces/interface_DevAnalysisSettingAtt_43218.htm";
objet["interface"]["DeviceJointRelations"]=4;
objet["interface"][4]="../DNBDeviceInterfaces/interface_DeviceJointRelations_41326.htm";
objet["interface"]["DeviceSim"]=5;
objet["interface"][5]="../DNBDeviceInterfaces/interface_DeviceSim_24872.htm";
objet["interface"]["HomePosition"]=6;
objet["interface"][6]="../DNBDeviceInterfaces/interface_HomePosition_28339.htm";
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
