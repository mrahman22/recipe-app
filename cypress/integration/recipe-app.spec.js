describe('Checking if url is going to the correct page', () => {
    it('Checks URL is correct', () => {
      cy.visit('https://github.com/mrahman22');
      cy.contains('Repositories').click();
      cy.url().should('include', '?tab=repositories')
    })
  })