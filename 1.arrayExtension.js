(function solve() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        let array = this.slice()
        let nededNum = array.splice(n)
        return nededNum
    }

    Array.prototype.take = function (n) {
        let array = this.slice()
        let nededNum = array.splice(0, n)
        return nededNum
    }

    Array.prototype.sum = function () {
        let sum = this.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        return sum
    }

    Array.prototype.average = function () {
        return this.sum() / this.length;
    }

})();

let arr = [1, 2, 3, 4]
const asd = arr.last();
console.log(asd);
const asd1 = arr.skip(2);
console.log(asd1)
const asd2 = arr.take(3);
console.log(asd2)
const asd3 = arr.sum();
console.log(asd3)
const asd4 = arr.average();
console.log(asd4)



/*
last() - returns the last element of the array
 skip(n) - returns a new array which includes all original elements, except the first n elements; n is a
Number parameter
 take(n) - returns a new array containing the first n elements from the original array; n is a Number
parameter
 sum() - returns a sum of all array elements
 average() - returns the average of all array elements
*/