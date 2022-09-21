function sqrt(a) {
    var x,
        x1 = a / 2;
        
    do {
        x = x1;
        x1 = (x + (a / x)) / 2;
    } while (x !== x1);
    return x;
}

console.log(sqrt (2)); // 1.414
console.log(sqrt (9)); // 3
console.log(sqrt (25)); // 5