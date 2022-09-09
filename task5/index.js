function isEven(n) {
    if (n === 0) return true;
    if (n === 1) return false;
    if (n > 1) return isEven(n - 2);
}
console.log(isEven(50));
console.log(isEven(75));

function isEven(n) {
    if (n === 0) {
        return 'Четное';
    } else if (n === 1) {
        return 'Нечетное';
    } else {
        return isEven(n - 2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
