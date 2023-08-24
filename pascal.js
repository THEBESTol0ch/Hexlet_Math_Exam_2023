const targetPoint = 4;
const targetRow = 17;

function pascalsTrianglePathCount(row, point) {
    if (point < 0 || point > row) {
      return 0; // Invalid point
    }
    
    if (row === 0 || point === 0 || point === row) {
      return 1; // Base cases
    }
    
    // Recursive case: sum of paths from the two points above
    return pascalsTrianglePathCount(row - 1, point - 1) + pascalsTrianglePathCount(row - 1, point);
  }

const paths = pascalsTrianglePathCount(targetRow, targetPoint);
console.log(`Number of paths leading to point (${targetPoint}, ${targetRow}): ${paths}`);