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
 objet["interface"]["CallRobotTaskActivity"]=0;
objet["interface"][0]="../DNBIgpSetupInterfaces/interface_CallRobotTaskActivity_47697.htm";
objet["interface"]["DeviceTask"]=1;
objet["interface"][1]="../DNBIgpSetupInterfaces/interface_DeviceTask_30057.htm";
objet["interface"]["DeviceTaskFactory"]=2;
objet["interface"][2]="../DNBIgpSetupInterfaces/interface_DeviceTaskFactory_39720.htm";
objet["interface"]["GenericAction"]=3;
objet["interface"][3]="../DNBIgpSetupInterfaces/interface_GenericAction_33519.htm";
objet["interface"]["GenericActionFactory"]=4;
objet["interface"][4]="../DNBIgpSetupInterfaces/interface_GenericActionFactory_45366.htm";
objet["interface"]["MountActivity"]=5;
objet["interface"][5]="../DNBIgpSetupInterfaces/interface_MountActivity_33988.htm";
objet["interface"]["MountManager"]=6;
objet["interface"][6]="../DNBIgpSetupInterfaces/interface_MountManager_32281.htm";
objet["interface"]["MoveActionActivity"]=7;
objet["interface"][7]="../DNBIgpSetupInterfaces/interface_MoveActionActivity_41788.htm";
objet["interface"]["Operation"]=8;
objet["interface"][8]="../DNBIgpSetupInterfaces/interface_Operation_29349.htm";
objet["interface"]["OperationProfile"]=9;
objet["interface"][9]="../DNBIgpSetupInterfaces/interface_OperationProfile_38046.htm";
objet["interface"]["RobotMotion"]=10;
objet["interface"][10]="../DNBIgpSetupInterfaces/interface_RobotMotion_31344.htm";
objet["interface"]["RobotTask"]=11;
objet["interface"][11]="../DNBIgpSetupInterfaces/interface_RobotTask_29205.htm";
objet["interface"]["RobotTaskCloneFactory"]=12;
objet["interface"][12]="../DNBIgpSetupInterfaces/interface_RobotTaskCloneFactory_47317.htm";
objet["interface"]["RobotTaskFactory"]=13;
objet["interface"][13]="../DNBIgpSetupInterfaces/interface_RobotTaskFactory_38140.htm";
objet["interface"]["TCPTraceActivity"]=14;
objet["interface"][14]="../DNBIgpSetupInterfaces/interface_TCPTraceActivity_38105.htm";
objet["interface"]["Tag"]=15;
objet["interface"][15]="../DNBIgpSetupInterfaces/interface_Tag_25741.htm";
objet["interface"]["TagFactory"]=16;
objet["interface"][16]="../DNBIgpSetupInterfaces/interface_TagFactory_30308.htm";
objet["interface"]["TagGroup"]=17;
objet["interface"][17]="../DNBIgpSetupInterfaces/interface_TagGroup_28451.htm";
objet["interface"]["TagGroupFactory"]=18;
objet["interface"][18]="../DNBIgpSetupInterfaces/interface_TagGroupFactory_36658.htm";
objet["interface"]["UnmountActivity"]=19;
objet["interface"][19]="../DNBIgpSetupInterfaces/interface_UnmountActivity_36914.htm";
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
