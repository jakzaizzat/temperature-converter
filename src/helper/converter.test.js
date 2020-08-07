import converter from "./converter";

describe("coverter helper", () => {
  it("should able to convert celcius to farenheit", () => {
    const celcius = 36;
    const farenheit = converter.toFarenheit(celcius);
    expect(farenheit).toBe(96.8);
  });

  it("should able to convert farenheit to celcius", () => {
    const farenheit = 122;
    const celcius = converter.toCelcius(farenheit);
    expect(celcius).toBe(50);
  });
});
