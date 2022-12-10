// No.2
var linebreak = "<br></br>"
function square_numbers(number, numberlength){
    for (a = number; a <= numberlength; a++){
        document.write("The square of " + a + " is " + a*a, linebreak);
    }
}
square_numbers(1,10)
