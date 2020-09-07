export const arithmeticMean = (arr: number[]): number => {
    const mean = arr.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, 0);

    return mean / arr.length;
}

export const Pow = (arr: number[], mean: number): number => {
    return arr.reduce((previousValue, currentValue) => {
        return previousValue + Math.pow(currentValue - mean, 2);
    }, 0);
}

const deviation = (arr: number[]): number => {
    const mean = arithmeticMean(arr);
    return Math.sqrt(Pow(arr, mean) / arr.length);
}

export default deviation;
