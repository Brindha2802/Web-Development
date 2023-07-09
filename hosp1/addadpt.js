function validate(){
	var deptn=document.getElementById("Department-name").value;
	var regex = /^[a-zA-Z]*$/;
	var noofdoc=document.getElementById("nodoc").value;
	var d=document.getElementById("Department-Discription").value;
    if(!deptn.match(regex)) {
		alert("Please enter alphabets only");
		return false;
	}
	if(deptn.length>=30){
		alert("Please Enter Only 30 Characters");
		return false;
	}
	if(isNaN(noofdoc)){
		alert("Please Enter Numbers");
		return false;
	}
	if(d.length>=50){
		alert("Please Enter Only 50 Characters");
		return false;
	}
	return true;

}