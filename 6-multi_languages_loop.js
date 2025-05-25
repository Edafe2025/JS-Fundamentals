const lines = ['C is fun', 'Python is cool', 'Javascript is amazing'];

let i = 0;
let result = '';

while (i < lines.length) {
    for(let j = 0; j < 1; j++){
        result += lines[i] + (i < lines.length - 1 ? '\n' : '');
    } 
    i++;
}
console.log(result);