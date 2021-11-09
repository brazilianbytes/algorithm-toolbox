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

    TC.push({ name: '3', input: 3, expected: 2});
    TC.push({ name: '100', input: 100, expected: 5});
    TC.push({ name: '139', input: 139, expected: 1});
    TC.push({ name: '91239', input: 91239, expected: 6});
    TC.push({ name: '331', input: 331, expected: 9});
    TC.push({ name: '327305', input: 327305, expected: 5});
    TC.push({ name: '627305', input: 627305, expected: 5});
    TC.push({ name: '999999', input: 999999, expected: 6});
    
    t.context.data = TC;
});

const SECOND = 1000;
const MINUTE = 60 * SECOND;

test('Last Digit of Fibonacci', t => {
    t.timeout(2 * MINUTE);
    t.context.data.forEach(tc => {
        t.is(profile(`${t.title } - fib(${tc.input})`, fib, tc.input), tc.expected);
    })

})



