let a = "firstName lastName test test test";
let array = [];

let first = {
    1: "&",
    2: "5",
    3: "/",
    4: "+",
    5: "-"
}


a = a.replace(/\s/g, "~")
console.log(a)

// a = a.replace(/a/g, `a${first.1}b${first.2}c${first.3}d${first.4}e${first.5}`);
console.log(first);

for (let i = 0; i < a.length; i++) {
    array.push(a.charAt(i));
    for (let letter of array) {
        b = 0
        if (letter === "~") {
            b++
            console.log(b)
        }
    }
}

console.log(array)