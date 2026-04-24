// Red, failing test.
test("listen and silent are anagrams", () => {
    expect(isAnagram("listen", "silent")).toBe(true);
});

test("hello and world are not anagrams", () => {
    expect(isAnagram("hello", "world")).toBe(false);
});

test("is case insensitive", () => {
    expect(isAnagram("Listen", "Silent")).toBe(true);
});

// Green, make it pass.
export const isAnagram = (a: string, b: string): boolean => {
    const sort = (s: string) => s.toLowerCase().split("").sort().join("");
    return sort(a) === sort(b);
};
