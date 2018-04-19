const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = __dirname;
Given('given a website {string}', function (url) {

    console.log('Given');
    return 'passed';
});

When('access the website', function () {
    console.log('When');
    // return ((async () => {
    //     this.driver = await puppeteer.launch({headless:false});
    //     console.log(this.browser);
    //     const page = await this.driver.newPage();
    //     await page.goto('https://example.com');
    //     await page.screenshot({path: `${path}/example.png`});
    // })());

});

Then('capture a screen shot', function () {
    console.log('Then');
    //expect(fs.existsSync(`${path}/example.png`)).to.eql(true);

});

