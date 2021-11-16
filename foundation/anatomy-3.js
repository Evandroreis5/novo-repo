//functinon expression
const increment1 = function(n){
    return n + 1
}
//function arrow always anonymous
const increment2 = (n)=>{
    return n + 1
}
const increment4 = n=>  n + 1

const sum = (a, b) => a + b
console.log(sum(6,9)) 
    
console.log(increment1(4))
console.log(increment2(8))

console.log(increment4(24))