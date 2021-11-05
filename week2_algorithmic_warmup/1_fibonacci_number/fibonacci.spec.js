import test, { before } from 'ava';

import fib from './fibonacci.js';

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

    TC.push({ name: 'Fibonacci - 10', input: 10, expected: 55});

    t.context.data = TC;
});

test('Fibonacci', t => {

    t.context.data.forEach(tc => {
        t.is(profile(`${t.title } - ${tc.name}`, fib, tc.input), tc.expected);
    })

})



