// loops

//FOR LOOP

for (let i=0 ; i< 10 ; i++){
    console.log(i)
}                               //print (0 to 9)

//WHILE LOOP

let a=10;
while (a>0){
    console.log(a);
    a--;                        //print (10 to 0)
}


//MULTIPLY OF 2

for (let i=0 ; i<= 10 ; i++){
    console.log(i*2)
}

//OR

for (let i=0 ; i<=20 ; i=i+2){
    console.log(i)
}

let a=20;
while (a>0 ; )


//DO-WHILE

let c=2;
do{
    console.log(c);
    c=c+2;
}while(c<=20);

//FOR IN LOOP

let names = "Ranji";
let tourist = ["Ram","som","kir","sid"];            //in gives index

for (let a in tourist){
    console.log(a);
}

//FOR OF LOOP (value of ARRAY)

for (let value of tourist){                 //of gives values
    console.log(value);
}


//FOR EACH LOOP

tourist.foreach((value,index)=>{        //the first parmeter accepts values of array and second parameter accepts the index of array
    console.log(value,index)                        // value and index r parameter
})
