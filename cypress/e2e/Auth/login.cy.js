describe('Inicio de Sesion', () => {

  beforeEach(() => {
    const url = Cypress.env('URL');
    cy.visit(url);
  });

  const user = Cypress.env('USER');
  const password = Cypress.env('PASSWORD');
  it('Inicio Correcto', () => {
    cy.get('#sades_user').type(user);
    cy.get('#sades_pass').type(password);
    cy.get('#Ingresar').click();
    cy.get('#NombreUsuario', { timeout: 10000 }).should('be.visible')

  })
})