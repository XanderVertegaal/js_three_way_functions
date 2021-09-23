function functionDeclaration(x, y) {
    return (x * x + y * y) * (x * x + y * y);
}

const functionExpression = function (x, y) {
    return (x * x + y * y) * (x * x + y * y);
}

const arrowFunction = (x, y) => {
    return (x * x + y * y) * (x * x + y * y);
};

console.log(functionDeclaration(2, 5));
console.log(functionExpression(2, 5));
console.log(arrowFunction(2, 5));