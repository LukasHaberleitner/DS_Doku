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
 objet["enum"]["HTSActivityGroupMotionBasis"]=0;
objet["enum"][0]="../DNBHumanSimInterfaces/enum_HTSActivityGroupMotionBasis_58869.htm";
objet["enum"]["HTSBodyPoseOptions"]=1;
objet["enum"][1]="../DNBHumanSimInterfaces/enum_HTSBodyPoseOptions_38380.htm";
objet["enum"]["HTSEndEffector"]=2;
objet["enum"][2]="../DNBHumanSimInterfaces/enum_HTSEndEffector_31528.htm";
objet["enum"]["HTSHand"]=3;
objet["enum"][3]="../DNBHumanSimInterfaces/enum_HTSHand_24202.htm";
objet["enum"]["HTSManikinReferential"]=4;
objet["enum"][4]="../DNBHumanSimInterfaces/enum_HTSManikinReferential_44030.htm";
objet["enum"]["HTSMotionBasis"]=5;
objet["enum"][5]="../DNBHumanSimInterfaces/enum_HTSMotionBasis_31574.htm";
objet["enum"]["HTSPickType"]=6;
objet["enum"][6]="../DNBHumanSimInterfaces/enum_HTSPickType_27819.htm";
objet["enum"]["HTSSearchIntensity"]=7;
objet["enum"][7]="../DNBHumanSimInterfaces/enum_HTSSearchIntensity_38568.htm";
objet["enum"]["HTSStrideOptions"]=8;
objet["enum"][8]="../DNBHumanSimInterfaces/enum_HTSStrideOptions_34944.htm";
objet["enum"]["HTSSwingOptions"]=9;
objet["enum"][9]="../DNBHumanSimInterfaces/enum_HTSSwingOptions_33406.htm";
objet["enum"]["HTSWalkMotionBasis"]=10;
objet["enum"][10]="../DNBHumanSimInterfaces/enum_HTSWalkMotionBasis_37917.htm";
objet["interface"]["AutoWalkActivity"]=0;
objet["interface"][0]="../DNBHumanSimInterfaces/interface_AutoWalkActivity_38079.htm";
objet["interface"]["CollisionFreeWalk"]=1;
objet["interface"][1]="../DNBHumanSimInterfaces/interface_CollisionFreeWalk_39068.htm";
objet["interface"]["HtsCCPSettingAtt"]=2;
objet["interface"][2]="../DNBHumanSimInterfaces/interface_HtsCCPSettingAtt_37318.htm";
objet["interface"]["HtsGeneralSettingAtt"]=3;
objet["interface"][3]="../DNBHumanSimInterfaces/interface_HtsGeneralSettingAtt_44892.htm";
objet["interface"]["HtsJointSpeedSettingsAtt"]=4;
objet["interface"][4]="../DNBHumanSimInterfaces/interface_HtsJointSpeedSettingsAtt_53919.htm";
objet["interface"]["HtsTaskDisplaySettingAtt"]=5;
objet["interface"][5]="../DNBHumanSimInterfaces/interface_HtsTaskDisplaySettingAtt_53950.htm";
objet["interface"]["HumanActivityGroup"]=6;
objet["interface"][6]="../DNBHumanSimInterfaces/interface_HumanActivityGroup_41658.htm";
objet["interface"]["HumanActivityGroupFactory"]=7;
objet["interface"][7]="../DNBHumanSimInterfaces/interface_HumanActivityGroupFactory_57145.htm";
objet["interface"]["HumanActsFactory"]=8;
objet["interface"][8]="../DNBHumanSimInterfaces/interface_HumanActsFactory_37873.htm";
objet["interface"]["HumanCallTask"]=9;
objet["interface"][9]="../DNBHumanSimInterfaces/interface_HumanCallTask_33099.htm";
objet["interface"]["HumanProgram"]=10;
objet["interface"][10]="../DNBHumanSimInterfaces/interface_HumanProgram_32167.htm";
objet["interface"]["HumanTask"]=11;
objet["interface"][11]="../DNBHumanSimInterfaces/interface_HumanTask_28950.htm";
objet["interface"]["HumanTaskList"]=12;
objet["interface"][12]="../DNBHumanSimInterfaces/interface_HumanTaskList_33341.htm";
objet["interface"]["MoveToPostureActivity"]=13;
objet["interface"][13]="../DNBHumanSimInterfaces/interface_MoveToPostureActivity_47790.htm";
objet["interface"]["PickActivity"]=14;
objet["interface"][14]="../DNBHumanSimInterfaces/interface_PickActivity_32411.htm";
objet["interface"]["PlaceActivity"]=15;
objet["interface"][15]="../DNBHumanSimInterfaces/interface_PlaceActivity_33635.htm";
objet["interface"]["WalkActivity"]=16;
objet["interface"][16]="../DNBHumanSimInterfaces/interface_WalkActivity_32421.htm";
objet["interface"]["WorkerActivity"]=17;
objet["interface"][17]="../DNBHumanSimInterfaces/interface_WorkerActivity_35111.htm";
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
