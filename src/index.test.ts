import sd from "./index"

test("Should calculate standard deviations", () => {
    const Arr = [172.3, 170.4, 169.4, 169, 167, 173];
    const expected = sd(Arr);
    expect(expected).toBe(2.0251886057572257);
});
