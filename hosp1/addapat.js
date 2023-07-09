function validate(){
	var fn=document.getElementById("first-name").value;
	var ln=document.getElementById("last-name").value;
    var regex = /^[a-zA-Z]*$/;
    var father=document.getElementById("father-name").value;
    var sp=document.getElementById("spouse-name").value;
    var z=document.getElementById("contact-no").value;
	/*var fasp=document.getElementById("father-name").value;
	var z=document.getElementById("contact-no").value;*/
	
	if(!regex.test(fn)) {
		alert("Please enter alphabets only in first name");
		return false;
	}
	if(!regex.test(ln)) {
		alert("Please enter alphabets only in last name");
		return false;
	}
	if(!regex.test(father)) {
		alert("Please enter alphabets only in father name");
		return false;
	}
    if(!regex.test(sp)) {
		alert("Please enter alphabets only in spouse name");
		return false;
	}
	if(fn.length>=30){
		alert("Please Enter Only 30 Characters in first name");
		return false;
	}
	if(ln.length>=30){
		alert("Please Enter Only 30 Characters in last name");
		return false;
	}
	if(father.length>=30){
		alert("Please Enter Only 30 Characters in father name");
		return false;
	}
    if(sp.length>=30){
		alert("Please Enter Only 30 Charactersin spouse name");
		return false;
	}
	if((z.length!=10) || (z.length>10)){
			alert("Please Enter Valid Contact Number");
			return false;
	}
}