function reverseStringArray(s){
    let len = s.length;
    let half = Math.floor(len/2);
    for(let i=0; i<half; i++){
        [s[i],s[len-1-i]] = [s[len-1-i],s[i]];
    }
    return s;
}

let s = ['s','r','i','k','a','n','t','h'];

console.log(reverseStringArray(s))