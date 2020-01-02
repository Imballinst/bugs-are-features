// Copyright (c) Tetrate, Inc 2019 All Rights Reserved.
import {
  findIndexOfRepeatingCharacter,
  removeDuplicatesFromArray,
  convertObjectToMap
} from "./";

it("findIndexOfRepeatingCharacter", () => {
  const text1 = "Hello";
  const text2 = "Firefox";
  const text3 = "Google Chrome";

  // Found case.
  expect(findIndexOfRepeatingCharacter(text1, "l")).toBe(3);
  expect(findIndexOfRepeatingCharacter(text2, "f")).toBe(4);
  expect(findIndexOfRepeatingCharacter(text3, "o", 3)).toBe(10);

  // Not found case.
  expect(findIndexOfRepeatingCharacter(text1, "z")).toBe(-1);
});

it("removeDuplicatesFromArray", () => {
  const duplicated = [1, 3, 2, 1, 4, 5, 1, 2, 3, 4, 4, 4, 1, 10, 15, 2, 4, 5];

  // The result does not have to be exactly in the same order.
  const expectedResult = [1, 3, 2, 4, 5, 10, 15];

  expect(removeDuplicatesFromArray(duplicated)).toEqual(expectedResult);
});

it("convertObjectToMap", () => {
  const object = {
    foo: "bar",
    bar: "baz"
  };
  const map = convertObjectToMap(object);

  expect(map.get("foo")).toEqual("bar");
  expect(map.get("bar")).toEqual("baz");
});
