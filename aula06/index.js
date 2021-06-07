function repeatedString(s, n) {
    // Write your code here
console.log(s,n)
while(s.length < n){
    s = s + s;
}
console.log(s,n)
let count = 0;
let slice = s.slice( 0,n);
console.log(slice)
    // slice.forEach(a => {
    //     console.log(a)
    //     if(a == 'a'){
    //         count++;
    //     }
    // })

  
    
    return count
    }

console.log(repeatedString('aba',10))