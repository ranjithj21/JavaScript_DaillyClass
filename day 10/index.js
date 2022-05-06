//creating object

let mobile = {
    brand : "samsung",
    weight : 200,
    isworking : true,
    11 :"Android version",
    displayInfo : function() {
        console.log(`mobile is ${mobile.brand} and weight is ${moblie.weight} which is working working condition,also android version of ${mobile.working} working condition , also android version of ${11}`);
    },
    displayInfo1 : function(){
        console.log(`The brand of mobile`);
    }
}

console.log(mobile);
mobile.camera ="32px";
console.log(mobile);

function Mobile (brand,weight,camera){
    this.brand = brand ;
    this.weight = weight ;
    this.camera = camera ;
}

let apple = new Mobile ("Apple",190)


