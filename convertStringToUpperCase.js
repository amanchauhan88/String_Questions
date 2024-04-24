

var str = "Hello"
var lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz"
var capitalCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var bag = ""

for(var i=0; i<str.length; i++){

    var currentElement = str[i]
    var flagMan = false

    for(var j=0; j<lowerCaseLetter.length; j++){
           
        if(currentElement===lowerCaseLetter[j]){
            bag = bag + capitalCaseLetter[j]
            flagMan = true
            break
        }
        
    }
    
    if(!flagMan){
        bag = bag + currentElement
    }
    
}

console.log(bag) 