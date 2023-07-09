function validate(){
	var x=document.getElementById("first-name").value;
	var y=document.getElementById("last-name").value;
	var z=document.getElementById("contact-no").value;
    var deptno=document.getElementById("Department No").value;
	var noofpat=document.getElementById("No of Patients").value;
    
	var regex = /^[a-zA-Z]*$/;
	/*var b=document.getElementById("email").value;

	var regex = /^[a-zA-Z]*$/;
	var rno=document.getElementById("Registration Number").value;*/
	
	/*if(rno==""){
		alert("Please Enter Mandatory Field");
		return false;
	}*/
	if(isNaN(deptno)){
		alert("Please Enter Valid Number in deptno");
		return false;
	}
	if(isNaN(noofpat)){
		alert("Please Enter Valid Number in number of patients");
		return false;
	}
	if(x.length>=20){
		alert("Please Enter Only 20 Characters in first name");
		return false;
	}
	if(y.length>=20){
		alert("Please Enter Only 20 Characters in last name");
		return false;
	}
	if((z.length!=10) || (z.length>10)){
			alert("Please Enter Valid Contact Number");
			return false;
	}	
	if(!regex.test(x)) {
		alert("Please enter alphabets only in first name");
		return false;
	}
    if(!regex.test(y)) {
		alert("Please enter alphabets only in last name");
		return false;
	}
	
	
}