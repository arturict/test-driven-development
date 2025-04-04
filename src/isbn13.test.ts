import { isValid } from "./isbn13";

describe("ISBN-13 Validation", () => {
  it("should return true for a valid ISBN-13", () => {
    expect(isValid("9780306406157")).toBe(true);
  });

  it("should return false for an invalid ISBN-13", () => {
    expect(isValid("9780306406158")).toBe(false);
  });

  it("should return false for an ISBN-13 with invalid characters", () => {
    expect(isValid("978-0-306-40615-7")).toBe(false);
  });

  it("should return false for an ISBN-13 with incorrect length", () => {
    expect(isValid("978030640615")).toBe(false);
  });

  it("should return false for an ISBN-13 with incorrect length", () => {
    expect(isValid("97803064061571")).toBe(false);
  });

  it("should return true for another valid ISBN-13", () => {
    expect(isValid("9783161484100")).toBe(true);
  });

  it("should return false for another invalid ISBN-13", () => {
    expect(isValid("9783161484101")).toBe(false);
  });

  it("should return false for an invalid ISBN-13 starting with 979", () => {
    expect(isValid("9791234567898")).toBe(false);
  });
});
