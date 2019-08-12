var add=function(number1, number2){
return number1 + number2;
};
var number1=parseInt(prompt("Enter a number:"));
var number2=parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract=function(number1, number2){
  return number1-number2;
};
  var number1=parseInt(prompt("Enter a number:"));
  var number2=parseInt(prompt("Enter another number:"));
  var result=subtract(number1, number2);
  alert(result);

  function calculateBMI(weight_in_lbs, height_in_inches){
	return (weight_in_lbs/height_in_inches**2) * 703;
}

alert(calculateBMI(prompt("What is your weight in lbs?"), prompt("What is your height in inches?")))


var convertCtoF=function(celsius){
return (celsius*1.8) + 32;
};
var result=convertCtoF(prompt("Enter the temperature in Celsius:"));
alert(result);
