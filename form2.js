function validate(){
    var numericvalue = document.myform1.number1.value;
    if (isNaN(numericvalue)){
        document.getElementById("number").innerHTML="Please enter a number!";
        return false;
    }
    else
    {
        return true;
    }

}