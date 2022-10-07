let x = 10;
let y = 1
for (let index = 1; index < 10; index++) {
    y = y * index
    console.log(y);
    
}
let a = 0
let b = 1
while (a < 10) {
    a++
    b = b * a
    console.log(b);
}

let c = 0;
let d = 1;

while (true) {
    c++
    d = d * c
    // console.log(a);
        console.log(d);
    if (c == 10) {
        break;
    }
}