context("Toggle theme", () => {
  beforeEach(() => {
    cy.visit("https://temperature-converter-peatix.vercel.app/");
  });

  it("cy.window() - get the global window object", () => {
    cy.get("#root").should("have.class", "theme-light");
    cy.get('button[data-testid="theme-toggle"]').click();
    cy.get("#root").should("have.class", "theme-dark");
  });
});
