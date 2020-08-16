context('FirstTest', () => {
	beforeEach(() => {
		cy.visit('http://localhost:8080')
	})

	it('First color should be active by deafult', () => {
		// https://on.cypress.io/type
		cy.get('.Colors__mainColor').first().should("have.class", "Colors__mainColor--active");
		cy.get('.Colors__mainColor').eq(1).should("not.have.class", "Colors__mainColor--active");

		cy.get('.Colors__mainColor').eq(1).click().should("have.class", "Colors__mainColor--active")
		cy.get('.Colors__mainColor').first().should("not.have.class", "Colors__mainColor--active");
		// .should('have.value', 'slow.typing@email.com')
	});
});

