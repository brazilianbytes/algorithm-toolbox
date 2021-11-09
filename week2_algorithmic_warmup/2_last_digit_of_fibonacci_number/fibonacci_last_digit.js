// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}


function fib(n) {
    const buffer = [0n, 1n];
    let last = 1;

    if (n < 2) {
        last = buffer[n];
    } else {
        for (let times = 0; times < n - 1; times++) {
            last = (buffer[0] + buffer[1]) % 10n;
            buffer[0] = buffer[1];
            buffer[1] = last;
        }
    }
    
    return Number(last);
}

module.exports = fib;
