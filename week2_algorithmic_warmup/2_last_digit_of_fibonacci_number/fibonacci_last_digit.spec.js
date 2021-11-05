import test, { before } from 'ava';

import fib from './fibonacci_last_digit.js';

const profile = (label, fn, param) => {
    console.time(label);
    const result = fn(param);
    console.info(label, result);
    console.timeEnd(label);
    return result;
}

// const streesTest = (maxSize, maxRandom) => Array(maxSize).fill(0).map(value => Math.floor(Math.random() * (maxRandom - 0 + 1) + 0));

before(t => {

    const TC = [];

    TC.push({ name: 'Fibonacci Last Digit - 3', input: 3, expected: "2"});
    TC.push({ name: 'Fibonacci Last Digit - 100', input: 100, expected: "5"});
    TC.push({ name: 'Fibonacci Last Digit - 139', input: 139, expected: "1"});
    TC.push({ name: 'Fibonacci Last Digit - 91239', input: 91239, expected: "6"});

    t.context.data = TC;
});

test('Fibonacci Last Digit', t => {

    t.context.data.forEach(tc => {
        t.is(profile(`${t.title } - ${tc.name}`, fib, tc.input), tc.expected);
    })

})



