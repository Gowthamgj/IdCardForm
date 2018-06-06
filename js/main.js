function formSubmit(){
    firstNameCheck();
    fullNameCheck();
    designationCheck();
    employeeCodeCheck();
    bloodGroupCheck();
    //validateDate();
    emailValidate();
    phoneNumValidate();
}
var formvalue;
function firstNameCheck(){
    var name=$("#firstname").val();
    if(name==""){
        addErrorMessage("firstNameError","firstname","first name cant be null");        
    }
    else{
        removeErrorMessage("firstname","firstNameError");
    }
}
function fullNameCheck(){
    var name=$("#fullname").val();
    if(name==""){
        addErrorMessage("fullNameError","fullname","full name cant be null");
    }
    else{
        removeErrorMessage("fullname","fullNameError");
    }
}
function designationCheck(){
    formvalue=$("#designation").val();
    if(formvalue==""){
        addErrorMessage("designationerror","designation","select respective role");
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
    }
    else{
        removeErrorMessage("empcode","empcodeerror");
    }
}
function bloodGroupCheck(){
    formvalue=$("#bloodgroup").val();
    if(formvalue==""){
        addErrorMessage("bloodgrouperror","bloodgroup","enter a valid blood group");
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
    }
    else{
        removeErrorMessage("mobnum","mobnumerror");
    }
    formvalue=$("#emernum").val();
    out=formvalue.match(/^[1-9][0-9]{9}/);
    if(out==null){
        addErrorMessage("emernumerror","emernum","enter a valid mobile number")
    }
    else{
        removeErrorMessage("emernum","emernumerror");
    }
}
function addErrorMessage(spanId,inputFieldId,message){
    $("#"+spanId).removeClass("spanHide");
    $("#"+spanId).html(message);
    $("#"+inputFieldId).css("border-color","red");
}
function removeErrorMessage(inputFieldId,spanId){
    $("#"+spanId).hide();
    $("#"+inputFieldId).css("border-color","green");
}