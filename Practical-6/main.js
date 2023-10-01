Array.prototype.add = function () {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        total += this[i];
    }
    return total;
};

const numbers = [21, 22, 62];
console.log(numbers.add());
