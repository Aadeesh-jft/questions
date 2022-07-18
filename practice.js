function f1() {
    console.log(this);
}
//f1();

let obj1 = {

    name: "Aadeesh",
    age: "19",
    print: function() {
        console.log(this);
    },
    display: () => {console.log(this)},
    obj2: {print: () => {console.log(this)}}
    
}

obj1.obj2.print();
obj1.display(); 

/*
let d = { REACT: 3, PYTHON: 6, "ANSI-C": 8, JAVASCRIPT: 5, JAVA: 5, ANGULAR: 2 };

console.log(Object.values(d).sort().reverse());

var items = Object.keys(d).map(function(key) {
    return [key, d[key]];
});
console.log(items);
array = []
for (key in d) {
    tempArr = [d[key], key];
    //console.log(key);
    //console.log(tempArr);
    array.push(tempArr);
}
console.log(array);
console.log(array.sort().reverse());
*/