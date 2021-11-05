import test, { before } from 'ava';

import lcm from './lcm.js';

const profile = (label, fn, param) => {
    console.time(label);
    const result = fn(...param);
    console.info(label, result);
    console.timeEnd(label);
    return result;
}

// const streesTest = (maxSize, maxRandom) => Array(maxSize).fill(0).map(value => Math.floor(Math.random() * (maxRandom - 0 + 1) + 0));

before(t => {

    const TC = [];

    TC.push({"name":"lcm (6,8)","input":[6,8],"expected":24});
    TC.push({"name":"lcm (28851538,1183019)","input":[28851538,1183019],"expected":1933053046});

    t.context.data = TC;
});

test('lcm(a,b)', t => {

    t.context.data.forEach(tc => {
        t.is(profile(`${t.title } - ${tc.name}`, lcm, tc.input), tc.expected);
    })

})



