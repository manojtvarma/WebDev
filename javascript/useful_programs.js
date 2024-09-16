//1.setTimeout function

var a = 10;
function fn(){
    console.log(a);
}
setTimeout(fn,2000);
console.log("done");

//2.Read and Write Operation
console.log(a);

/*output:
ReferenceError: a is not defined*/

a = 10;
console.log(a);

//3.Hoisting

console.log(a);
var a = 10;

//4.function scope

//a.
if(true){
  var a = 20;
}
console.log(a);

//b.
var value = 10;
function increment(value){
  value++;
}
increment(value);
console.log(value);


// == and ===

if("1" == 1){
  console.log("true");
}

//output: true

if("1" === 1){
  console.log("true");
}else{
  console.log("false");
}


//6.Hoisting
//i)
function foo(){
  console.log("foo called");
}
foo();

function foo(){
  console.log("foo redefined");
}
foo();

//ii)
var foo = function foo(){
  console.log("foo called");
}
foo();

foo = function foo(){
  console.log("foo redefined");
}
foo();












