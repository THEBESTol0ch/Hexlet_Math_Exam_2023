function calculateProbability(numQuestions, probabilityOfSuccess, k) {
    const binomialCoefficient = (n, k) => {
        if (k === 0 || k === n) {
            return 1;
        } else {
            return binomialCoefficient(n - 1, k - 1) * n / k;
        }
    };

    return binomialCoefficient(numQuestions, k) * Math.pow(probabilityOfSuccess, k) * Math.pow(1 - probabilityOfSuccess, numQuestions - k);
}

function solveMathTest() {
    const numQuestions = 10;
    const passingScore = 0.80;
    const probabilityOfSuccess = 0.25; // Probability of guessing correctly

    // Probability of passing (getting at least 70% correct)
    let probabilityPassing = 0;
    for (let k = Math.ceil(numQuestions * passingScore); k <= numQuestions; k++) {
        probabilityPassing += calculateProbability(numQuestions, probabilityOfSuccess, k);
    }

    // Probability of answering at least one question correctly
    const probabilityAtLeastOneCorrect = 1 - calculateProbability(numQuestions, probabilityOfSuccess, 0);

    // Probability of answering none of the questions correctly
    const probabilityNoneCorrect = calculateProbability(numQuestions, 1 - probabilityOfSuccess, numQuestions);

    return {
        probabilityPassing: probabilityPassing.toFixed(5),
        probabilityAtLeastOneCorrect: probabilityAtLeastOneCorrect.toFixed(5),
        probabilityNoneCorrect: probabilityNoneCorrect.toFixed(5),
    };
}

const results = solveMathTest();
console.log("Probability of passing:", results.probabilityPassing);
console.log("Probability of answering at least one question correctly:", results.probabilityAtLeastOneCorrect);
console.log("Probability of answering none of the questions correctly:", results.probabilityNoneCorrect);