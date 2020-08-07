const converter = {
  toCelcius(farenheit) {
    return ((farenheit - 32) * 5) / 9;
  },
  toFarenheit(celcius) {
    return (celcius * 9) / 5 + 32;
  },
};

export default converter;
