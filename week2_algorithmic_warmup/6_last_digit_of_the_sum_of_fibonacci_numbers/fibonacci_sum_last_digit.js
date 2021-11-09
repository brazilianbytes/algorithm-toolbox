// by Alexander Nikolskiy

const { argv0 } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

const paramRegex = /^(?<n>\d+)$/;

function readLine(line) {
    if (line !== "\n") {
        const parameter = paramRegex.exec(line);
        if (parameter.groups) {
            const n = parseInt(parameter.groups.n, 10);
    
            console.log(getFibSumLastDigit(n));
        }
        process.exit();
    }
}

function* fibonacci() {
    let n = 0;
    const buffer = [0n, 1n];
    let last;

    while (true) {
        if (n < 2) {
            last = buffer[n];
        } else {
            last = buffer[0] + buffer[1];
            buffer[0] = buffer[1];
            buffer[1] = last;
        }
    
        n++;
        yield last;
    }

}

function getFibSumLastDigit(n) {
    const generator = fibonacci();
    const all = [];
    [...Array(n+1)].forEach(_ => all.push(generator.next().value));

    return Number(all.reduce((prev, curr) => prev + curr) % 10n);
}

module.exports = getFibSumLastDigit;
