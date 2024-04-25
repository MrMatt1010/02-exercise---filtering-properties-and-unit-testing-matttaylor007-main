const filterProperties = require("./filterProperties");
const properties = require("./properties.json");

it("should filter out private properties", () => {
  const result = filterProperties(properties);
  const expected = [properties[0], properties[2]];

  expect(result).toEqual(expected);
});
