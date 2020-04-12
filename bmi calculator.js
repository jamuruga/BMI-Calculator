var adults = document.getElementById("adult");
    var children = document.getElementById("child");

var height= (document.getElementById("height").value);
var heightunits =document.getElementById("h1").value;
var weight= (document.getElementById("weight").value);

function bmi(){
if (heightunits=="inches") 
height/=39.3700787;

var BMI = weight/Math.pow(height,2);
BMI=Math.round(BMI*100)/100;
document.getElementById("output1").innerHTML=BMI;


if (BMI<18.5){
document.getElementById("output2").innerHTML="Underweight";
}
else if (BMI>=18.5 && BMI<=25){
document.getElementById("output2").innerHTML="Normal";
}
else if (BMI>=25 && BMI<=30){
document.getElementById("output2").innerHTML="Obese";
} 
// else (BMI>70)
document.getElementById("output2").innerHTML="Overweight";
}
// else (document.getElementById="child")
//     if (BMI<18.5){
//         document.getElementById("output2").innerHTML="Underweight";
//         }
//         else if (BMI>=18.5 && BMI<=25){
//         document.getElementById("output2").innerHTML="Normal";
//         }
//         else if (BMI>=25 && BMI<=30){
//         document.getElementById("output2").innerHTML="Obese";
//         } 
//         else (BMI>30)
//         document.getElementById("output2").innerHTML="Overweight";
