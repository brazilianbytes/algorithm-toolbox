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

    const pair = [-1,-1];

    for (let pointer = 0; pointer < arr.length; pointer++) {

        const who = pair[0] < pair[1] ? 0: 1; 

        if (pair[who] === undefined || pair[who] < arr[pointer]) {
            pair[who] = arr[pointer];
        }
    }

    return pair[pair.length-1]*pair[pair.length-2];
}

module.exports = max;
