//reaady function
$(document).ready(function(){
    $(".glyphicon").hide();
   // $(".wrong").hide();
    
});
var valid={
    isValid:0,
}
var details={};
function formSubmit(){
    firstNameCheck();
    fullNameCheck();
    designationCheck();
    employeeCodeCheck();
    bloodGroupCheck();
    //validateDate();
    emailValidate();
    phoneNumValidate();
    if(valid.isValid==1){
        insertIntoFire();
    }
}
var formvalue;
function firstNameCheck(){
    var name=$("#firstname").val();
    if(name==""){
        addErrorMessage("firstNameError","firstname","first name cant be null");
        valid.isValid=1; 
        $(".tick").hide();
        $(".wrong").show()
        gly
    }
    else{
        removeErrorMessage("firstname","firstNameError");
        $(".wrong").hide();
        $(".tick").show();
    }
}
function fullNameCheck(){
    var name=$("#fullname").val();
    if(name==""){
        addErrorMessage("fullNameError","fullname","full name cant be null");
        valid.isValid=1;  
        glyphAddError("fulltick","fullwrong");
        // $(".fulltick").hide();
        // $(".fullwrong").show()      
    }
    else{
        removeErrorMessage("fullname","fullNameError");
        glyphRemError("fulltick","fullwrong");
        // $(".fullwrong").hide();
        // $(".fulltick").show();
    }
}
function designationCheck(){
    formvalue=$("#designation").val();
    if(formvalue==""){
        addErrorMessage("designationerror","designation","select respective role");
        valid.isValid=1;         
    }
    else{
        removeErrorMessage("designation","designationerror")
    }
}
function employeeCodeCheck(){
    formvalue=$("#empcode").val();
    var match=formvalue.match(/[0-9]{6,7}/);
    if(match==null){
        addErrorMessage("empcodeerror","empcode","empcode does not consist of alphabets");
        valid.isValid=1;         
    }
    else{
        removeErrorMessage("empcode","empcodeerror");
    }
}
function bloodGroupCheck(){
    formvalue=$("#bloodgroup").val();
    if(formvalue==""){
        addErrorMessage("bloodgrouperror","bloodgroup","enter a valid blood group");
        valid.isValid=1;            
    }
    else{
        removeErrorMessage("bloodgroup","bloodgrouperror")
    }
}
// function validateDate(){
//     formvalue=$("#joiningdate").val();
//     console.log(formvalue);
//     if(formvalue=="<br>"){
//         addErrorMessage("dateError","joiningdate","enter a proper date");
//     }
//     else{
//         removeErrorMessage("joiningdate","dateError");
//     }
// }
function emailValidate(){
    formvalue=$("#email").val();
    var out=formvalue.match(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/);
    if(out==null){
        addErrorMessage("emailerror","email","enter validate virtusa email id");
        valid.isValid=1;               
    }
    else{
        removeErrorMessage("email","emailerror");
    }
}
function phoneNumValidate(){
    formvalue=$("#mobnum").val();
    var out=formvalue.match(/^[1-9][0-9]{9}/);
    if(out==null){
        addErrorMessage("mobnumerror","mobnum","enter a valid mobile number");
        valid.isValid=1;        
    }
    else{
        removeErrorMessage("mobnum","mobnumerror");
    }
    formvalue=$("#emernum").val();
    out=formvalue.match(/^[1-9][0-9]{9}/);
    if(out==null){
        addErrorMessage("emernumerror","emernum","enter a valid mobile number");
        valid.isValid=1;           
    }
    else{
        removeErrorMessage("emernum","emernumerror");
    }
}
function insertIntoFire(){
    data["fname"]=$("#firstname").val();
    data["fullname"]=$("#fullname").val();
    data["designation"]=$("#designation").val();
    data["empcode"]=$("#empcode").val();
    data["bloodgroup"]=$("#bloodgroup").val();
    data["joiningdata"]=$("#joiningdate").val();
    data["email"]=$("#email").val();
    data["mobnum"]=$("#mobnum").val();
    data["emernum"]=$("#emernum").val();
    $.ajax({
        method:'POST',
        url:"https://formvalidation-84d8e.firebaseio.com/",
        data:details,
        type:JSON,
        success:(res)=>{
            console.log(res);
        },
        error:(err)=>{

        }
    });
}
function addErrorMessage(spanId,inputFieldId,message){
    $("#"+spanId).removeClass("spanHide");
    $("#"+spanId).html(message);
    $("#"+inputFieldId).css("border-color","red");
    //$("#"+"lfname").addClass("has-error");
}
function removeErrorMessage(inputFieldId,spanId){
    $("#"+spanId).hide();
    $("#"+inputFieldId).css("border-color","green");
}
function glyphAddError(tick,wrong){
    $("."+tick).hide();
    $("."+wrong).show();
}
function glyphRemError(tick,wrong){
    $("."+tick).show();
    $("."+wrong).hide();
}