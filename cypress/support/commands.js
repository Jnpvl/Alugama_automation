// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
const user = Cypress.env('USER');
const password = Cypress.env('PASSWORD');
 Cypress.Commands.add('login', () => { 
    cy.get('#sades_user').type(user);
    cy.get('#sades_pass').type(password);
    cy.get('#Ingresar').click();
    cy.get('#NombreUsuario', { timeout: 10000 }).should('be.visible')
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })