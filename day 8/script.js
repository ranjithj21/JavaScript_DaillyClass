let numbers = [2,3,4,5,6,7]

console.log(numbers);

numbers.map((item)=>{console.log(item)})


let res = numbers.filter((item)=>{
    return item >3
})
console.log(res);


//adding

let res1 = numbers.reduce((acc,cur)=> acc = acc + cur,0);

console.log(res1)

//multipy

let res1 = [2,3,4,5,6,7];

let res1 = numbers.reduce((acc,cur)=> acc = acc * cur,1);

console.log(res1)


//srings

//charAt

let str = "Ranjith";
console.log(str.length);
console.log(str.charAt(2));

// endswith

console.log(str.endsWith("h"));

//includes  (true or false)

let sentance = "hello world";
console.log(sentance.includes("world"));

//indexof   (tells the index)

console.log(sentance.indexOf("o"));
console.log(sentance.lastindexOf("o"));

//length

console.log(str.length)

//replace     it will not replace the original string

console.log(str.replace("ranjith","ranji"));

//search

console.log(str.search("ji"));

//substr  (first value is inclusive,last value is exclusive)

console.log(sentance.substr(1,4))
console.log(sentance.substr(0,7))
console.log(sentance.substr(1,4))

