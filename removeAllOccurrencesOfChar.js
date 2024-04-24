let str = "banana";
let result = "";

for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (currentChar !== 'a') {
        result += currentChar;
    }
}

console.log(result); 
// Output: bnn