const bmi = ()=>{
    var adults = document.getElementById("select1");
    var children = document.getElementById("select2");
var height= (document.getElementById("height").value);
var heightunits =document.getElementById("h1").value;
var weight= (document.getElementById("weight").value);


if (weight =='' || height=='')
{
 alert("Enter your details");
}

if (heightunits==="inches") 
height/=39.3700787;

var BMI = weight/Math.pow(height,2);
BMI=Math.round(BMI*100)/100;
document.getElementById("output1").innerHTML=BMI;


if (BMI<18.5){
document.getElementById("output2").innerHTML="Underweight ! Maintain your diet. ";
}
else if (BMI>=18.5 && BMI<=25){
document.getElementById("output2").innerHTML="Normal ! Keep Going.";
}
else if (BMI>=25 && BMI<=30){
document.getElementById("output2").innerHTML="Obese ! Maintain your diet.";
} 
else if(BMI>30){
document.getElementById("output2").innerHTML="Overweight ! Stop eating excess.";
}
}



