//method 1
let names = [3,'ranj',true,3.7]

console.log(names)


//method 2

let frnds = [];
frnds [0] = 'ranjit';
frnds [1] = 'ran';
frnds [2] = 'ranji';

console.log(frnds)

let frndss = [];
frndss [0] = 'ranjit';
frndss [1] = 'ran';
frndss [2] = 'ranji';
frndss [5] = 'ranjith';   // empty*2 are created

console.log(frndss)


//method 3

let name3 = new Array ('ram','raj','ranji')

console.log(name3)

//PUSH : Adds value to the last position.

name3.push('ram')
console.log(name3)

//POP : Removes values at last position.


name3.pop();
console.log(name3)

//shift : it removes from 1st position.

name3.shift();



//Unshift : it adds value to 1st position.

name3.unshift("ram");

//length

console.log(name3.length);

//indexof
//lastindexof 

let num1 = [1,2,3,4,5,6,6];
let num2 = [7,8,9,10];

console.log(num1.indexOf(5));
console.log(num1.lastIndexOf(6));


//concat/join do not changes the original array
console.log(num1.concat(num2));
console.log(num1.join(" "));

//reverse
console.log(num1.reverse());

//sort
let num3 = [9,6,7,4,5,3,1,2];
// console.log(num3.sort());

//using sort followed by reverse give u values arranged in descending order.

console.log(games.sort().reverse());


//splice 
//first val gives the index and second val gives the num of values to be removed

// num3.splice(3,1,77,65);
// console.log(num3);

//slice - starting index is inclusive and the last index is exclusive(not included).

console.log(num3.slice(1,7));