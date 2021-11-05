// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    let result = 0;
    if (arr.length >= 2) {
        arr.sort((a,b)=>a-b);
        result = arr[arr.length-1]*arr[arr.length-2];
    } else if (arr.length === 1) {
        result = arr[0];
    }

    return result;
}

module.exports = max;
