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
 objet["enum"]["AccuracyType"]=0;
objet["enum"][0]="../DNBRobotInterfaces/enum_AccuracyType_23514.htm";
objet["enum"]["DNBAuxilliaryDeviceType"]=1;
objet["enum"][1]="../DNBRobotInterfaces/enum_DNBAuxilliaryDeviceType_42675.htm";
objet["enum"]["DNBTCPTraceLegends"]=2;
objet["enum"][2]="../DNBRobotInterfaces/enum_DNBTCPTraceLegends_31607.htm";
objet["enum"]["DNBTCPTraceReps"]=3;
objet["enum"][3]="../DNBRobotInterfaces/enum_DNBTCPTraceReps_26781.htm";
objet["enum"]["MotionBasis"]=4;
objet["enum"][4]="../DNBRobotInterfaces/enum_MotionBasis_22234.htm";
objet["interface"]["AuxDevicesMgt"]=0;
objet["interface"][0]="../DNBRobotInterfaces/interface_AuxDevicesMgt_27531.htm";
objet["interface"]["CalibOffsets"]=1;
objet["interface"][1]="../DNBRobotInterfaces/interface_CalibOffsets_26510.htm";
objet["interface"]["GenericAccuracyProfile"]=2;
objet["interface"][2]="../DNBRobotInterfaces/interface_GenericAccuracyProfile_43444.htm";
objet["interface"]["GenericMotionProfile"]=3;
objet["interface"][3]="../DNBRobotInterfaces/interface_GenericMotionProfile_39357.htm";
objet["interface"]["GenericObjFrameProfile"]=4;
objet["interface"][4]="../DNBRobotInterfaces/interface_GenericObjFrameProfile_42977.htm";
objet["interface"]["GenericToolProfile"]=5;
objet["interface"][5]="../DNBRobotInterfaces/interface_GenericToolProfile_35408.htm";
objet["interface"]["ParameterProfiles"]=6;
objet["interface"][6]="../DNBRobotInterfaces/interface_ParameterProfiles_33924.htm";
objet["interface"]["ParameterProfilesFactory"]=7;
objet["interface"][7]="../DNBRobotInterfaces/interface_ParameterProfilesFactory_48683.htm";
objet["interface"]["RRSSettingAtt"]=8;
objet["interface"][8]="../DNBRobotInterfaces/interface_RRSSettingAtt_27552.htm";
objet["interface"]["RobAnalysisHeartBeatUsageSettingAtt"]=9;
objet["interface"][9]="../DNBRobotInterfaces/interface_RobAnalysisHeartBeatUsageSettingAtt_80289.htm";
objet["interface"]["RobAnalysisSettingAtt"]=10;
objet["interface"][10]="../DNBRobotInterfaces/interface_RobAnalysisSettingAtt_41489.htm";
objet["interface"]["RobControllerFactory"]=11;
objet["interface"][11]="../DNBRobotInterfaces/interface_RobControllerFactory_39777.htm";
objet["interface"]["RobGenericController"]=12;
objet["interface"][12]="../DNBRobotInterfaces/interface_RobGenericController_39652.htm";
objet["interface"]["TCPTrace"]=13;
objet["interface"][13]="../DNBRobotInterfaces/interface_TCPTrace_22236.htm";
objet["interface"]["TCPTraceManager"]=14;
objet["interface"][14]="../DNBRobotInterfaces/interface_TCPTraceManager_30037.htm";
objet["interface"]["TCPTraceManagerGraphics"]=15;
objet["interface"][15]="../DNBRobotInterfaces/interface_TCPTraceManagerGraphics_45276.htm";
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
