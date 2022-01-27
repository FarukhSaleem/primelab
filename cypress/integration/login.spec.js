export default describe('Sign up Page', () => {
    it('Fetcing Signup Page', () => {
      cy.visit('http://localhost:3000/login');
    });
  
    it('Submitting Signup form - With errors', () => {
      cy.get('button[type="submit"]').click();
    });
    it('Filling Signup form', () => {
      cy.get('input[name="email"]').type('test@email.com').should('have.value', 'test@email.com');
      cy.get('input[name="password"]').type('Abc123456#').should('have.value', 'Abc123456#');
    });
    it('Submitting Signup form', () => {
      cy.get('button[type="submit"]').click();
    });
  });