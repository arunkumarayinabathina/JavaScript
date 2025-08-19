const str = process.argv[2];
for (let i = 0; i < str.length; i++) {
    let str1 = "";
    for (let j = i; j < str.length; j++) {
        str1 += str[j];
        console.log(str1)
    }
    break;
}

console.log("------------------------------------------")

for (let i = 0; i <= 5; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += "*";
    }
    console.log(str);
}

console.log("------------------------------------------")

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        str += "*";
    }
    console.log(str);
}


console.log("------------------------------------------")
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        if ((i + j) % 2 == 0) {
            str += "*";
        } else {
            str += " ";
        }
    }
    console.log(str);
}


console.log("------------------------------------------")

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5 - i; j++) {
        row += " ";
    }
    for (let k = 1; k <= i; k++) {
        row += "*";
    }
    console.log(row);
}
