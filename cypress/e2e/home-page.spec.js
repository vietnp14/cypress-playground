describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should visit app successfully', () => {
    cy.contains('Learn React').should('exist');
  })

  it('should be failed', () => {
    cy.contains('Failed test').should('exist');
  })
});