//ARROW FUNCTION : Function is replaced by const or let 

const addition = (par1,par2) => {
    console.log("addition is done here")
}
addition (arg1,arg2)


//FUNCTION EXPRESSION : 

const subtraction = function (){
    console.log("subtraction is done")
}
subtraction(arg1,arg2);

function multiply (num1,num2){
  let result = num1 * num2 ;
  return result;  
}
multiply (7,9);

//lexical environment and scope chain :

let i=5;
function one (){
    console.log(i);
    two();
    function two (){
        console.log(i)
    }
}
one();

//block scope and shadowing

let f=2;
const g=2;
var h=2;

console.log(f);
console.log(g);
console.log(h);

{
    let f=3;
    const g=3;
    var h=3;
    console.log(f);
    console.log(g);
    console.log(h);  
}
console.log(f);
console.log(g);
console.log(h);

let m = 4;
console.log(m);   //4
{
    let m= 5
    console.log(m);  //5

}
console.log(m);   //4

const n = 4;
console.log(n);   //4
{
    const n= 5
    console.log(n);   //5

}
console.log(n);   //4

