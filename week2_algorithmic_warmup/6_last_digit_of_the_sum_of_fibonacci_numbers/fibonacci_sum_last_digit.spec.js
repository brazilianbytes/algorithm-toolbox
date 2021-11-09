import test, { before } from 'ava';

import getFibSumLastDigit from './fibonacci_sum_last_digit.js';

const profile = (label, fn, param) => {
    console.time(label);
    const result = fn(param);
    console.info(label, result);
    console.timeEnd(label);
    return result;
}

before(t => {

    const TC = [];

    TC.push({ name: '3', input: 3, expected: 4});
    TC.push({ name: '100', input: 100, expected: 5});

    t.context.data = TC;
});

test('Week 2 :: 6 Last Digit of the Sum of Fibonacci Numbers', t => {

    t.context.data.forEach(tc => {
        t.is(profile(`${t.title } - ${tc.name}`, getFibSumLastDigit, tc.input), tc.expected);
    })

})



