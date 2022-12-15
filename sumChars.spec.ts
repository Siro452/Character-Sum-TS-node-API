import { sumChars } from "./sumChars";
import { describe, expect, it } from "@jest/globals";
const errorNegative = {
  error: "number cannot be a negative",
};
const errorWrongChar = {
  error: "invalid character",
};

describe("sum normal", () => {
  it("normal conditions and input", () => {
    expect(sumChars("civic", 2014)).toStrictEqual({ carvalue: "$6614" });
  });
});

describe(" only numbers ", () => {
  it("Numbers only is ok", () => {
    expect(sumChars("911", 2020)).toStrictEqual({ carvalue: "$2020" });
  });
});

describe("negative values", () => {
  it("Negative year gives wrong error", () => {
    expect(sumChars("a", -987)).toStrictEqual(errorNegative);
  });
});

describe("values are wrong types", () => {
  it("Wrong data type gives wrong error", () => {
    expect(sumChars("C200", "twenty twenty")).toStrictEqual(errorWrongChar);
  });
});

describe("inverse value types in wrong positions", () => {
  it("if string and number were inverse values gives error", () => {
    expect(sumChars("213123", "fatcar")).toStrictEqual(errorWrongChar);
  });
});

describe("special characters or spaces", () => {
  it("special character or string in wrong position will give error, spaces are ignored", () => {
    expect(sumChars("ci vic^", "2014$%)")).toStrictEqual(errorWrongChar);
  });
});
