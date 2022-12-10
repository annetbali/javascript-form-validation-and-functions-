function getFormvalue() {   
    var x = document.forms["form1"]["fname"].value;   
    var y = document.forms["form1"]["lname"].value;   
    document.getElementById("value").innerHTML=fname+"<br>"+lname;
    
    return false;
        
    }