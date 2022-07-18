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
    
}

obj1.print();
obj1.display(); 

arr1 = ["python", 3]

console.log(arr1.indexOf("python"));