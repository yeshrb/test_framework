const { setWorldConstructor } = require('cucumber');
const puppeteer = require('puppeteer');

class CustomWorld {
    constructor() {
        console.log('world intering ')
        let self = this;
        this.browser= setBrowser();

    }

    get driver() {
        return this.browser;
    }
    set driver(bw) {
        this.browser = bw;
    }
}
async function setBrowser(){
    return  await puppeteer.launch({headless:false});
}
setWorldConstructor(CustomWorld)