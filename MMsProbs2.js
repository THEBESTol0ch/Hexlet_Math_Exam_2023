function candyProbabilities(iraRed, iraBlue, lenaRed, lenaBlue) {
    const totalIraCandies = iraRed + iraBlue;
    const totalLenaCandies = lenaRed + lenaBlue;

    const probabilitySameColor = (iraRed / totalIraCandies) * (lenaRed / totalLenaCandies) +
                                 (iraBlue / totalIraCandies) * (lenaBlue / totalLenaCandies);

    const probabilityIraBlue = (iraBlue / totalIraCandies) * (lenaRed / totalLenaCandies);
    const probabilityIraRed = (iraRed / totalIraCandies) * (lenaBlue / totalLenaCandies);
    const probabilityLenaBlue = (iraRed / totalIraCandies) * (lenaBlue / totalLenaCandies);
    const probabilityLenaRed = (iraBlue / totalIraCandies) * (lenaRed / totalLenaCandies);

    return {
        probabilitySameColor: probabilitySameColor.toFixed(4),
        probabilityIraBlue: probabilityIraBlue.toFixed(4),
        probabilityIraRed: probabilityIraRed.toFixed(4),
        probabilityLenaBlue: probabilityLenaBlue.toFixed(4),
        probabilityLenaRed: probabilityLenaRed.toFixed(4)
    };
}

const iraRedCandies = 8;
const iraBlueCandies = 6;
const lenaRedCandies = 7;
const lenaBlueCandies = 5;

const probabilities = candyProbabilities(iraRedCandies, iraBlueCandies, lenaRedCandies, lenaBlueCandies);
console.log(probabilities);