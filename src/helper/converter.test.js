import converter from "./converter";

describe('coverter helper', function () {
    it('should able to convert celcius to farenheit', () => {
        const celcius = 123
        const farenheit = converter.toFarenheit(celcius)
        expect(farenheit).toBe(253.4)
    });

    it('should able to convert farenheit to celcius', () => {
        const farenheit = 100
        const celcius = converter.toCelcius(farenheit)
        expect(celcius).toBe(37.77777777777778)
    });
});
