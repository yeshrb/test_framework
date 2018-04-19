var {After, Before} = require('cucumber');

// Synchronous
Before(function () {
    console.log('Before');
});

After(function () {
    console.log('After');
return  this.browser.then((p) => {console.log(p)})

});