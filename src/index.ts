const arithmeticMean = (arr: number[]): number => {
    return arr.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);
}

const Pow = (arr: number[], mean: number): number => {
    return arr.reduce((previousValue, currentValue) => {
        return previousValue + Math.pow(currentValue - mean, 2);
    }, 0);
}

export const deviation = (arr: number[]): number => {
    const mean = arithmeticMean(arr) / arr.length;
    return Math.sqrt(Pow(arr, mean) / arr.length);
}

export default deviation;
