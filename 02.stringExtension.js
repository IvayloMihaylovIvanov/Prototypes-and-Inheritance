(function solve() {


    String.prototype.ensureStart = function (str) {
        const actualString = this.toString();
        if (!actualString.startsWith(str)) {
            return `${str}${actualString}`;
        }

        return actualString;
    }

    String.prototype.ensureEnd = function (str) {
        const actualString = this.toString();
        if (!actualString.endsWith(str)) {
            return `${actualString}${str}`;
        }

        return actualString;
    }

    String.prototype.isEmpty = function () {
        return this.toString().length === 0;
    };

    String.prototype.truncate = function (n) {
        const ELPISIS = '...';
        const SINGLE_POIN = '.';
        const strValue = this.toString();   
        if (n <= 3) {
            return SINGLE_POIN.repeat(n)
        }

        if (strValue.length <= n) {
            return strValue
        }

        const lastIndex = strValue.substr(0, n - 2).lastIndexOf(' ');
        if (lastIndex !== -1) {
            return `${strValue.substr(0, lastIndex)}${ELPISIS}`;
        }

        return `${strValue.substr(0, n - 3)}${ELPISIS}`;
    }

    String.format = function (str, ...params) {
        // let string = str;
        for (let i = 0; i < params.length; i++) {
            let index = str.indexOf(`{${i}}`);
            
            while(index !== -1) {
                str = str.replace(`{${i}}`, params[i]);
                index = str.indexOf(`{${i}}`) 
            }
            
        }

        return str
    }



})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str)

str = str.ensureStart('hello ');
console.log(str)

str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
    console.log(str)
str = String.format('jumps {0} {1}',
    'dog');
    console.log(str)


/*
 ensureStart(str) – if the current string doesn't start with the str parameter, return a new string in
which str parameter appended to the beginning of the current string, otherwise returns the original string
 ensureEnd(str) – if the current string doesn't end with str parameter, return a new string in which str
parameter appended to the end of the current string, otherwise returns the original string
 isEmpty() - return true if the string is empty and false otherwise
 truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis
(three periods) to the end. If a string is less than n characters long, return the same string. If it is longer, split
the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n.
If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n
amount of periods.
 format(string, …params) - static method to replace placeholders with parameters. A placeholder is a
number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not
modify it. Note static methods are attached to the String object instead of its prototype. See the examples
for more info.
Note strings are immutable, so your functions will return new strings as a result.*/