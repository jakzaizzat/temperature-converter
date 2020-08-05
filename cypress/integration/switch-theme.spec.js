context('Window', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('cy.window() - get the global window object', () => {
        // https://on.cypress.io/window

        cy.get('#root').should('have.class', 'theme-light')
        cy.get('button[data-testid="theme-toggle"]').click()
        cy.get('#root').should('have.class', 'theme-dark')


    })

})
