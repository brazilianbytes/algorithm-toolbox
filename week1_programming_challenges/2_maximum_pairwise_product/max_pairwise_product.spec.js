import test, { before } from 'ava';

import maxJS from './max_pairwise_product_code';
import maxCode from './max_pairwise_product_code';

const profile = (label, fn, param) => {
    console.time(label);
    const result = fn(param);
    console.info(label, result);
    console.timeEnd(label);
    return result;
}

const streesTest = (maxSize, maxRandom) => Array(maxSize).fill(0).map(value => Math.floor(Math.random() * (maxRandom - 0 + 1) + 0));

before(t => {

    const TC = [];

    TC.push({ name: 'Sample 1', input: [1,2,3], expected: 6});
    TC.push({ name: 'Sample 2', input: [7,5,14,2,8,8,10,1,2,3], expected: 140});

    const allIn = Array(2*Math.pow(10,5)).fill(undefined);
    allIn.forEach((value, index) => allIn[index] = index + 1);
    TC.push({ name: 'mpp all-in', input: allIn, expected: 39999800000})

    const st = streesTest(10, 100000); 

    TC.push({ name: 'mpp stress-test', input: st, expected: maxJS(st) })


    t.context.data = TC;
});

test('mpp', t => {

    t.context.data.forEach(tc => {
        t.is(profile(`${t.title } - ${tc.name}`, maxCode, tc.input), tc.expected, tc.name);
    })

})



