
describe('Login Page', () => {
    it('Fetcing Login Page', () => {
      cy.visit('http://localhost:3000/login');
    });
  
    it('Submitting Login form - With errors', () => {
      cy.get('[data-cy=login-submit]').click();
    });
    it('Filling Login form', () => {
      cy.get('input[name="email"]').type('test@email.com').should('have.value', 'test@email.com');
      cy.get('input[name="password"]').type('Abc123456#').should('have.value', 'Abc123456#');
    });
    it('Submitting Login form', () => {
      cy.get('button[type="submit"]').click();
    });
  });