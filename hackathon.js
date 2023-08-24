const programmers = 9; // Change this value if needed
const sysadmins = 6;   // Change this value if needed
const teamSize = 4;     // Change this value if needed
const programmersOnTeam = 3;

function calculateProbability(programmers, sysadmins, teamSize, programmersOnTeam) {
    // Calculate the total number of ways to select a team of the given size
    const totalWays = binomialCoefficient(programmers + sysadmins, teamSize);

    // Calculate the number of ways to select a team with exactly programmersOnTeam programmers
    const waysWith4Programmers = binomialCoefficient(programmers, programmersOnTeam) * binomialCoefficient(sysadmins, teamSize - programmersOnTeam);

    // Calculate the probability
    const probability = waysWith4Programmers / totalWays;

    return probability.toFixed(3);
}

function binomialCoefficient(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }

    let result = 1;
    for (let i = 1; i <= k; i++) {
        result *= (n - i + 1) / i;
    }

    return result;
}

const probability = calculateProbability(programmers, sysadmins, teamSize, programmersOnTeam);
console.log(`The probability is: ${probability}`);