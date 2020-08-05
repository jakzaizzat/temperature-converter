context('Window', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('cy.window() - get the global window object', () => {
        // https://on.cypress.io/window
        cy.get('input[name="celcius"]')
            .type('10000', { delay: 100 }).should('have.value', '10000')

        cy.get('input[name="farenheit"]').should('have.value', 18032)
    })

    it('cy.window() - get the global window object', () => {
        // https://on.cypress.io/window
        cy.get('input[name="farenheit"]')
            .clear()
            .should('have.value', '0')

        cy.get('input[name="farenheit"]')
            .type('221', { delay: 100 }).should('have.value', '221')

        cy.get('input[name="celcius"]').should('have.value', 105)
    })

})
