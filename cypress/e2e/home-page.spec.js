describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should visit app successfully', () => {
    cy.contains('Learn React').should('exist');
  })
});