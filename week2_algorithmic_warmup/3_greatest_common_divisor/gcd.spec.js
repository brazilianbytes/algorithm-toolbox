import test, { before } from 'ava';

import gcd from './gcd.js';

const profile = (label, fn, param) => {
    console.time(label);
    let result = fn(...param);
    console.timeEnd(label, result);
    return result;
}

// const streesTest = (maxSize, maxRandom) => Array(maxSize).fill(0).map(value => Math.floor(Math.random() * (maxRandom - 0 + 1) + 0));

before(t => {

    const TC = [];

    TC.push({"name":"gdc(18,35)","input":[18,35],"expected":1});
    TC.push({"name":"gdc(28851538,1183019)","input":[28851538,1183019],"expected":17657});
    TC.push({"name":"gdc(3918848,1653264)","input":[3918848,1653264],"expected":61232});
    TC.push({"name":"gdc(357,234)","input":[357,234],"expected":3});

    t.context.data = TC;
});

test('gdc(a,b)', t => {

    t.context.data.forEach(tc => {
        t.is(profile(`${t.title } - ${tc.name}`, gcd, tc.input), tc.expected);
    })

})



