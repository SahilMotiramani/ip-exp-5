// Basic Calculator with Promises
function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        switch (operation) {
            case 'add':
                resolve(num1 + num2);
                break;
            case 'subtract':
                resolve(num1 - num2);
                break;
            case 'multiply':
                resolve(num1 * num2);
                break;
            case 'divide':
                if (num2 === 0) {
                    reject('Error: Division by zero');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Error: Invalid operation');
        }
    });
}

// Handling calculator UI
document.getElementById('calculate').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    calculator(num1, num2, operation)
        .then(result => {
            document.getElementById('calcResult').innerText = `Result: ${result}`;
        })
        .catch(error => {
            document.getElementById('calcResult').innerText = error;
        });
});

// Custom Iterator for Squaring Numbers
class SquareIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    next() {
        if (this.index < this.array.length) {
            const value = this.array[this.index++];
            return { value: value * value, done: false };
        }
        return { done: true };
    }
}

// Handling square numbers UI
document.getElementById('squareButton').addEventListener('click', () => {
    const input = document.getElementById('squareNumbers').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    const squareIterator = new SquareIterator(numbers);
    const squaresList = document.getElementById('squaresList');
    squaresList.innerHTML = '';

    let result;
    while (!(result = squareIterator.next()).done) {
        const li = document.createElement('li');
        li.innerText = result.value;
        squaresList.appendChild(li);
    }
});

// Prime Number Generator
function* primeGenerator(limit) {
    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

// Handling prime numbers UI
document.getElementById('generatePrimes').addEventListener('click', () => {
    const limit = parseInt(document.getElementById('primeLimit').value);
    const primesList = document.getElementById('primesList');
    primesList.innerHTML = '';

    const primes = primeGenerator(limit);
    for (const prime of primes) {
        const li = document.createElement('li');
        li.innerText = prime;
        primesList.appendChild(li);
    }
});
