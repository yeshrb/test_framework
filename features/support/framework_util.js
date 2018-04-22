
function funcChain(head, funcs) {
    let fun = funcs.reduce((pre, curr) => {
        return function f() {
            return pre().then((value) => curr(value));
        }
    }, head);
    return fun;
}
module.exports = funcChain;
