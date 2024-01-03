// compare two JSON?

let obj1 = {
    name:"Person1",
    age:5,
}

let obj2 = {
    age:5,
    name:"Person1",
}

let objstring1 = JSON.stringify(obj1);
let objstring2 = JSON.stringify(obj2);

//console.log(objstring1)
//console.log(objstring2)

if (objstring1 == objstring2){
    console.log("Both are Same");
}else{
    console.log("Both are different");
}