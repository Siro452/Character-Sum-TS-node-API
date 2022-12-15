"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sumChars_1 = require("./sumChars");
const globals_1 = require("@jest/globals");
const errorNegative = {
    error: "number cannot be a negative",
};
const errorWrongChar = {
    error: "invalid character",
};
(0, globals_1.describe)("sum normal", () => {
    (0, globals_1.it)("normal conditions and input", () => {
        (0, globals_1.expect)((0, sumChars_1.sumChars)("civic", 2014)).toStrictEqual({ carvalue: "$6614" });
    });
});
(0, globals_1.describe)(" only numbers ", () => {
    (0, globals_1.it)("Numbers only is ok", () => {
        (0, globals_1.expect)((0, sumChars_1.sumChars)("911", 2020)).toStrictEqual({ carvalue: "$2020" });
    });
});
(0, globals_1.describe)("negative values", () => {
    (0, globals_1.it)("Negative year gives wrong error", () => {
        (0, globals_1.expect)((0, sumChars_1.sumChars)("a", -987)).toStrictEqual(errorNegative);
    });
});
(0, globals_1.describe)("values are wrong types", () => {
    (0, globals_1.it)("Wrong data type gives wrong error", () => {
        (0, globals_1.expect)((0, sumChars_1.sumChars)("C200", "twenty twenty")).toStrictEqual(errorWrongChar);
    });
});
(0, globals_1.describe)("inverse value types in wrong positions", () => {
    (0, globals_1.it)("if string and number were inverse values gives error", () => {
        (0, globals_1.expect)((0, sumChars_1.sumChars)("213123", "fatcar")).toStrictEqual(errorWrongChar);
    });
});
(0, globals_1.describe)("special characters or spaces", () => {
    (0, globals_1.it)("special character or string in wrong position will give error, spaces are ignored", () => {
        (0, globals_1.expect)((0, sumChars_1.sumChars)("ci vic^", "2014$%)")).toStrictEqual(errorWrongChar);
    });
});
