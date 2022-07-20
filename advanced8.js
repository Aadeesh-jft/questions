if(!localStorage.getItem("numKey")) {
    localStorage.setItem("numKey", "2");
}
let startNum = localStorage.getItem("numKey");
alert(startNum);
startNum = String(Number(startNum) * 2);
localStorage.setItem("numKey", startNum);