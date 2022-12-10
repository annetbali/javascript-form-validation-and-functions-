function validate(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if(document.form1.name.value == "" ){
        alert("Please fill all the values");
        document.form1.name.focus();
        return false;
    }

    if(document.form1.email.value == "" ){
        alert("Please fill all the values");
        document.form1.fname.focus();
        return false;
    }

    if(document.form1.password.value == "" ){
        alert("Please fill all the values");
        document.form1.fname.focus();
        return false;
    }
}