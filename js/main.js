let a = "firstName lastName test test test";
let array = [];

let first = {
    a: "µ",
    b: "5",
    c: "/",
    d: "+",
    e: "-"
}


a = a.replace(/\s/g, "~")
// console.log(a)

a = a.replace(/[a]{1}/g, `r${first.a}b${first.b}c${first.c}d${first.d}e${first.e}`);
// console.log(a)


for (let i = 0; i < a.length; i++) {
    array.push(a.charAt(i));
    for (let letter of array) {
        b = 0
        if (letter === "~") {
            b++
            // console.log(b)
        }
    }
}
// console.log(array)

/*----------------------------------------------*/

let test2 = "test text dghfghfGaGfdghfgh words";

test2 = test2.replace(/[a]{1}/g, `r${first.a}b${first.b}c${first.c}d${first.d}e${first.e}`);

let regex = RegExp(`[.${first.a}.${first.b}.${first.c}.${first.d}.${first.e}]{1}`, "g");

if (regex.test(test2)) {
    console.log("yes");
    test2 = test2.replace(RegExp, `a`);
    console.log(test2);
}