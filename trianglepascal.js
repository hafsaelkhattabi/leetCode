function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function combination(n, k) {
    if (n < k) {
        return "error";
    }
    return factorial(n) / (factorial(k) * factorial(n - k));
}
function generatePascalsTriangle(rows) {
    let triangle = [];
    
    for (let n = 0; n < rows; n++) {
        let row = [];
        for (let k = 0; k <= n; k++) {
            row.push(combination(n, k)); // Calculate combination for each position
        }
        triangle.push(row); // Add the row to the triangle
    }
    
    return triangle;
}
let pascalTriangle = generatePascalsTriangle(5);
console.log(pascalTriangle);
