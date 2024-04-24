let names = ["Nathan", "John", "Alice", "Nancy", "Bob"]
let count = 0;


for(let i = 0; i < names.length; i++){
    let firstChar = names[i][0];
    if(firstChar === 'n' || firstChar === 'N' ){
        count++;
    }
}
console.log(count);