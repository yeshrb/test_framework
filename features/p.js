'use strict';
const puppeteer = require('puppeteer');
const funcChain  = require('../features/support/framework_util');


let funcs_a = [
    async (page) => {
        await page.goto('https://cn.bing.com/', {waitUntil: 'networkidle2'});
        await page.screenshot({path: `${__dirname}/test_outputs/sc1.png`});
        console.log(1);

        return page;
    },
    async (page) => {
        await page.goto('https://www.baidu.com/', {waitUntil: 'networkidle2'});
        await page.screenshot({path: `sc2.png`});
        console.log(2);
        return page;

    },
    async (page) => {
        await page.goto('https://www.csdn.net/', {waitUntil: 'networkidle2'});
        await page.screenshot({path: `sc3.png`});
        console.log(3);
        return page

    },

];

async function head() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    return page;
}


// function funcChain(head, funcs) {
//     let fun = funcs.reduce((pre, curr) => {
//         return function f() {
//             return pre().then((value) => curr(value));
//         }
//     }, head);
//     return fun;
// }


funcChain(head, funcs_a)()
    .catch((err) => console.log(err));





