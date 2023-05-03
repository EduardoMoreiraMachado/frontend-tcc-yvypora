export const calculateResult = (num1, num2) => {
    const result = (num1 * num2).toFixed(2);
    const updatedResult = result.toString().replace(/\./g, ",");
    return updatedResult;
}
