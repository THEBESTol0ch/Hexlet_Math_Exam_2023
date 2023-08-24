function calculateProbabilities(reds, yellows, blues) {
    const total = reds + yellows + blues;
    
    const probabilityBothRed = ((reds / total) * ((reds - 1) / (total - 1))).toFixed(4);
    const probabilityBothYellow = ((yellows / total) * ((yellows - 1) / (total - 1))).toFixed(4);
    const probabilityBothBlue = ((blues / total) * ((blues - 1) / (total - 1))).toFixed(4);
    
    const probabilitySameColor = (Number(probabilityBothRed) + Number(probabilityBothYellow) + Number(probabilityBothBlue)).toFixed(4);
    
    const probabilityAtLeastOneRed = (1 - ((yellows / total) * (blues / (total - 1))) - ((blues / total) * (yellows / (total - 1)))).toFixed(4);
    const probabilityAtLeastOneYellow = (1 - ((reds / total) * (blues / (total - 1))) - ((blues / total) * (reds / (total - 1)))).toFixed(4);
    const probabilityAtLeastOneBlue = (1 - ((reds / total) * (yellows / (total - 1))) - ((yellows / total) * (reds / (total - 1)))).toFixed(4);
    
    const probabilityExactlyOneRed = ((reds / total) * ((total - reds) / (total - 1)) + 
                                    (yellows / total) * (reds / (total - 1)) + 
                                    (blues / total) * (reds / (total - 1))).toFixed(4);
    const probabilityExactlyOneYellow = ((yellows / total) * ((total - yellows) / (total - 1)) + 
                                       (reds / total) * (yellows / (total - 1)) + 
                                       (blues / total) * (yellows / (total - 1))).toFixed(4);
    const probabilityExactlyOneBlue = ((blues / total) * ((total - blues) / (total - 1)) + 
                                      (reds / total) * (blues / (total - 1)) + 
                                      (yellows / total) * (blues / (total - 1))).toFixed(4);
    
    return {
        probabilityBothRed,
        probabilityBothYellow,
        probabilityBothBlue,
        probabilitySameColor,
        probabilityAtLeastOneRed,
        probabilityAtLeastOneYellow,
        probabilityAtLeastOneBlue,
        probabilityExactlyOneRed,
        probabilityExactlyOneYellow,
        probabilityExactlyOneBlue
    };
}

// Example usage
const probabilities = calculateProbabilities(15, 6, 3);
console.log(probabilities);