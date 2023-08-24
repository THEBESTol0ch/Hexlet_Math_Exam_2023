const numbers = [26,    28,    41,    21,    61,    38,    49,    33,    74,    30,    33,    41,    31,    35,    41,    42,    37,    26,    34,    34];

function calculateStats(numbers) {
    // Calculate mean
    const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  
    // Calculate median
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    const median =
      sortedNumbers.length % 2 === 0
        ? (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2
        : sortedNumbers[middleIndex];
  
    // Calculate mode
    const numFrequency = {};
    numbers.forEach(num => {
      numFrequency[num] = (numFrequency[num] || 0) + 1;
    });
    let mode = null;
    let maxFrequency = 0;
    for (const num in numFrequency) {
      if (numFrequency[num] > maxFrequency) {
        mode = num;
        maxFrequency = numFrequency[num];
      }
    }
  
    // Calculate variance
    const squaredDifferences = numbers.map(num => (num - mean) ** 2);
    const variance = squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) / numbers.length;
  
    // Round variance to 2 digits after the decimal point
    const roundedVariance = parseFloat(variance.toFixed(2));
  
    // Calculate standard deviation
    const standardDeviation = Math.sqrt(variance);
  
    // Round standard deviation to 3 digits after the decimal point
    const roundedStandardDeviation = parseFloat(standardDeviation.toFixed(3));
  
    return {
      mean,
      median,
      mode,
      variance: roundedVariance,
      standardDeviation: roundedStandardDeviation
    };
  }

const stats = calculateStats(numbers);
console.log(stats);
  