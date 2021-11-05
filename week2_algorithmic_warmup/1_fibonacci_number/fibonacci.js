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
    const buffer = [0, 1];
    let last = 1;

    if (n < 2) {
        last = buffer[n];
    } else {
        for (let times = 1; times < n - 1; times++) {
            buffer[0] = buffer[1];
            buffer[1] = last;
            last = buffer[0] + buffer[1];
        }
    }

    return last;
}

module.exports = fib;
