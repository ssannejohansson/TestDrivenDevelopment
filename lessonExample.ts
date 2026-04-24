// add.test.js

import { add } from "./add";

test("adds two numbers", () => {
    expect(add(2,3)).toBe(5);
});

// add.js
export const add = (a: number, b:number): number => {
    return a+b;
};

// example2 
// failing test first
test("reverses a string", () => {
    expect(reverse("hello")).toBe("olleh");
})

// create the function to pass the test
export const reverse = (str: string): string => {
    return str.split("").reverse().join("");
}