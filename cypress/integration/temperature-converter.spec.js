context("Temperature converter", () => {
  beforeEach(() => {
    cy.visit("https://temperature-converter-peatix.vercel.app/");
  });

  it("convert the celcius to fahrenheit", () => {
    cy.get('input[name="celcius"]')
      .type("36", { delay: 500 })
      .should("have.value", "36");

    cy.get('input[name="farenheit"]').should("have.value", 96.8);
  });

  it("convert the fahrenheit to celcius", () => {
    cy.get('input[name="farenheit"]')
      .clear()
      .type("122")
      .should("have.value", "122");
    cy.get('input[name="celcius"]').should("have.value", 50);
  });
});
