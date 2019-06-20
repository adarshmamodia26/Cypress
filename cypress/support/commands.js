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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



before(function() {
     cy.log('runs once before all tests in the block')
     //cy.login()
  })

/*beforeEach(function() {
   cy.log('runs before each test in the block')
  })

afterEach(function() {
     cy.log('runs after each test in the block')
  })
after(function() {
    cy.log('runs once after all tests in the block')
  })*/
  
Cypress.Commands.add('login',function(){
cy.visit('/'    )
cy.get('#Login').click()
cy.get('#loginEmail').type('adarsh.mamodia@habilelabs.io').should('have.value','adarsh.mamodia@habilelabs.io')
cy.get('#loginPassword').type('xyz').clear().type('56m7996dilbar').should('have.value','56m7996dilbar')
cy.get('#login-button > span').click()
})    
