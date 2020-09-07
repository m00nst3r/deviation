import sd, { arithmeticMean, Pow } from "./index"

test("Should calculate standard deviations", () => {
    const Arr = [172.3, 170.4, 169.4, 169, 167, 173];
    const expected = sd(Arr);
    expect(expected).toBe(2.0251886057572257);
});

test("Get arithmetic mean", () => {
  const mean = arithmeticMean([1, 2, 4, 6]);
  expect(mean).toBe(3.25);
})

test("Should return base of mean array", () => {
  const expected = Pow([5, 4], 2);
  expect(expected).toBe(13);
})
