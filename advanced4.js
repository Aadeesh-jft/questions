let i = 0;

while (i < 101) {
    if (((i % 7) == 0) && ((i % 4) == 0)) {
        console.log("jellyfish");
    }
    if (((i % 7) == 0)) {
        console.log("fish");
    }
    if (((i % 4) == 0)) {
        console.log("jelly");
    }
    console.log(i);
    i++;
    
}