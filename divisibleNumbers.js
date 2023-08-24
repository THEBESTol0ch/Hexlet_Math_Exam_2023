const start = 1;
const end = 10000;
const divisors = [3, 5, 6, 13];

function countNonDivisibleNumbersInRange(start, end, divisors) {
    let count = 0;
  
    for (let i = start; i <= end; i++) {
      let divisible = false;
  
      for (let divisor of divisors) {
        if (i % divisor === 0) {
          divisible = true;
          break;
        }
      }
  
      if (!divisible) {
        count++;
      }
    }
  
    return count;
  }

const nonDivisibleCount = countNonDivisibleNumbersInRange(start, end, divisors);
console.log(`The number of natural numbers not divisible by divisors is: ${nonDivisibleCount}`);