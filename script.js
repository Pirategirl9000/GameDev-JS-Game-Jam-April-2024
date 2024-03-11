const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
let FPS = //-----------------

document.addEventListener("keydown", (e) => {keyPress(e.key);});
document.addEventListener("keyup", (e) => {keyRelease(e.key);});

function update() {
    if (alive == 0) {return;}
    
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.beginPath();
    //----------------
    ctx.closePath();
}

function keyDown(key) {
    if (alive == 0) {return;}
}

function keyRelease(key) {
    if (alive == 0) {return;}
}

function collision(obj1, obj2) { //requires objects with x, y, width, height attributes
    if (
         (((obj1.x >= obj2.x && obj1.x <= obj2.x + obj2.width) ||
         (obj1.x + obj1.width >= obj2.x && obj1.x + obj1.width <= obj2.x + obj2.width)) &&
         ((obj1.y >= obj2.y && obj1.y <= obj2.y + obj2.height) ||
         (obj1.y + obj1.height >= obj2.y && obj1.y + obj1.height <= obj2.y + obj2.height)))
        ) {return true;}
}

let alive = setInterval(() => {update();}, FPS * 1000);