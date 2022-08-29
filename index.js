var question = "What is your name?";
var defaultAnswer = "hamza";
var name = prompt(question, defaultAnswer);
console.log("Name = "+ name);


var question = "What is your age?";//22
var age = prompt(question);
var newAge = age + 5; // 
console.log("NewAge = "+ newAge); //225


var value1 = "1";
var value2 = "5";
var value3 = value1+value2;
console.log(value3);//15


var age = parseInt(prompt("What is your age"));//2
var num = 4;
var sum = age + num;
console.log(sum);//6


var usdollar=parseInt(prompt("Plz enter an amount in dollars"));
var riyal=parseInt(prompt("Plz enter amount in saudi riyal"));
document.write("<br>");
document.write("Amount of in PKR is :",((usdollar*177)+(riyal*48)));


var age = prompt("What is your age");//input 9.99
var num = 4;
var sum = parseFloat(age) + num;
console.log(sum); //13.5


var age = prompt("What is your age");//input 5.5
var num = 4;
var sum = age + Number(num);
console.log(sum); // result, 9.5


var a = Number(true); //1
var b = Number(false); //0
var c = Number("999"); //999
var d = Number("999 888"); //NAN
var e = Number("Hello"); //NAN


let num = 25.3852;
let a = num.toPrecision();//
let b = num.toPrecision(2);//25
let c = num.toPrecision(3);//25.3
let d = num.toPrecision(10);//25.38520000
let n = a + "<br>" + b + "<br>" + c + "<br>" + d;
document.write(n);


var a = 6;
console.log(a == 6); //return true
console.log(a === 6); //return true
console.log(a != 6); //return false
console.log(a !== 6); //return false
console.log(a > 6); //return false
console.log(a < 6); //return false
console.log(a >= 6); //return true
console.log(a <= 6); //return true


alert( true && true ); // true
alert( false&& true ); // false
alert( true && false ); // false
alert( false&& false ); // false


var a = 80;
var b = a > 50 && a < 70;
alert(b); // return false
var c = 20;
var d = c > 50 && c < 70;
alert(d); // return false


alert( true || true ); // true
alert( false|| true ); // true
alert( true || false ); // true
alert( false|| false ); // false
var a = 20;
var b = a < 50 || a > 70;
alert(b); // return true
var c = 30;
var d = c < 50 || c > 70;
alert(d); // return true


alert( !true ); // false
alert( !false ); // true
var a=40;
var b= !(a < 50);
alert(b); // return false
var c=40;
var d=!(c > 50);
alert(d); // return true


alert( !!1 ); // true
alert( !!0); // true