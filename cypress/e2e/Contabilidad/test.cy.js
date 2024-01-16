describe('Inicio de Sesion', () => {

  beforeEach(() => {
    const url = Cypress.env('URL');
    cy.visit(url);
  });

  it('passes', () => {
    cy.get('#sades_user').type('JVARGAS');
    cy.get('#sades_pass').type('JVARGAS');
    cy.get('#Ingresar').click();
  })
})