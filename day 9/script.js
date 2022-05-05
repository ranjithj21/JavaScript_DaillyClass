let map1 = new Map();

//how do we set values to map1
map1.set("name","Ravi");
map1.set("age",29);
map1.set(1,"one");
map1.set("phone",9874560122);
map1.set(true,"true");

console.log(map1.get("1"));
console.log(map1.get(1));
console.log(map1.get("name"));

console.log(map1.has("EMAIL"));

map1.delete(1);

map1.clear()

console.log(map1);
console.log(map1.size);


let set1 = new.set();
set.add("apple");
set.add("Banana");
set.add("Orange");
set.add("Grapes");
set.add("litchi");

console.log(set1);
console.log(set1.keys());
console.log(set1.entries());
console.log(set1.values());




for (let key of set1.keys()){
    console.log(key);
}

for (let value of set1.values()){
    console.log(key);
}

for (let entries of set1.entries()){
    console.log(key);
}