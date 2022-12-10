// No.3
var linebreak = "<br></br>"
const num1 = prompt("Enter a number: ");
document.write("First number: ",num1,linebreak);
const num2 = prompt("Enter a number: ");
document.write("Second number: ",num2,linebreak);
const num3 = prompt("Enter a number: ");
document.write("Third number: ",num3,linebreak);

function maximumNumber(){
    let maxNumber = 0;
    if (num1>num2 && num2>num3) {
        document.write(maxNumber=num1)
    }else{
        document.write("Maximum is: ",maxNumber=Math.max(num1,num2,num3))
    }

}
maximumNumber()