import { createRandomUserData } from '../../../support/randomEmpleados';


describe('Inicio de Sesion', () => {

  beforeEach(() => {
    const url = Cypress.env('URL');
    cy.visit(url);
    cy.login()

  });

  it('Generar Empleados random', () => {
    const numberOfEmployees = 5; 

    for (let i = 0; i < numberOfEmployees; i++) {
      cypressIngresar();
      const randomEmpleado = createRandomUserData();
      fillUserData(randomEmpleado);
      cy.wait(1000); 
    }
  });
});


function cypressIngresar() {
  cy.visit('https://sades.alugama.dev/rrhh/empleados');
  cy.get('#btnNuevoEmpleado', { timeout: 10000 }).should('be.visible').click();
}

function fillUserData(userData) {
  cy.get('#nombreEmpleado').type(userData.nombre);
  cy.get('#aPaterno').type(userData.aPaterno);
  cy.get('#aMaterno').type(userData.aMaterno);
  cy.get('#nssEmpleado').type(userData.nss);
  cy.get('#rfcEmpleado').type(userData.rfc);
  cy.get('#curpEmpleado').type(userData.curp);
  cy.get('#fechaNacimiento').type(userData.fechaNacimiento);
  cy.get('#sexoEmpleado').select(userData.sexoEmpleado);
  cy.get('#estadoCivil').select(userData.estadoCivil);
  cy.get('#calle').type(userData.calle);
  cy.get('#numExt').type(userData.numExt);
  cy.get('#numInt').type(userData.numInt);
  cy.get('#referencia').type(userData.referencia);
  cy.get('#cp').type(userData.cp);
  cy.get('#colonia').select(userData.colonia);
  cy.get('#correoEmpleado').type(userData.correoEmpleado);
  cy.get('#numTel').type(userData.numTel);
  cy.get('#comentariosTel').type(userData.comentariosTel);
  cy.get('#tab2').click();
  cy.get('#btnNuevaRelacion').click();
  cy.get('#empresa').select( userData.empresa);
  cy.get('#sucursal').select(userData.sucursal);
  cy.get('#fechaInicio').type(userData.fechaInicio); 
  cy.get('#departamento').select(userData.departamento);
  cy.get('#puesto').select(userData.puesto);
  cy.get('#comentarios').type(userData.comentarios);
  cy.get('#btnGuardar').click();
  cy.get('#MsgTexto').should('have.id', 'MsgTexto').click();
  cy.get('#BotonMsgAceptar').click();
}





    //cy.get('#nombreEmpleado').type('nombre');
    //cy.get('#aPaterno').type('appelidopaterno');
    //cy.get('#aMaterno').type('appelidopaterno');
    //cy.get('#nssEmpleado').type('12345678901');
    //cy.get('#rfcEmpleado').type('12345678901121');
    //cy.get('#curpEmpleado').type('1234567890321111111111');
    //cy.get('#fechaNacimiento').type('1999-10-20');
    //cy.get('#sexoEmpleado').select('2');
    //cy.get('#estadoCivil').select('1');
    //cy.get('#calle').type('calle');
    //cy.get('#numExt').type('17');
    //cy.get('#numInt').type('17');
    //cy.get('#referencia').type('referencia');
    //cy.get('#cp').type('83104');
    //cy.get('#colonia').select('66697');
    //cy.get('#correoEmpleado').type('nombre1@yopmail.com');
    //cy.get('#numTel').type('6621911702');
    //cy.get('#comentariosTel').type('comentario general');
    //cy.get('#tab2').click();
    //cy.get('#btnNuevaRelacion').click();
    //cy.get('#empresa').select('1');
    //cy.get('#sucursal').select('1');
    //cy.get('#fechaInicio').type('1999-10-20');
    //cy.get('#departamento').select('1');
    //cy.get('#puesto').select('1');
    //cy.get('#comentarios').type('comentario relacion laboral');
    //cy.get('#btnGuardar').click();
    //cy.get('#MsgTexto').should('have.id', 'MsgTexto').click();
    //cy.get('#BotonMsgAceptar').click();
