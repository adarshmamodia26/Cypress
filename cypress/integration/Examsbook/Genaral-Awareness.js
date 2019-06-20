// JavaScript Document
describe('Suit-Examsbook',function(){
it('General-Awareness', function(){
//login into application
cy.login()
//Verifing that we can open general awareness in different browser tab
cy.get('#main-menu > ul > li:nth-child(2) > ul > li:nth-child(1) > ul > li:nth-child(1) > a').should('have.attr','target',' _blank ')
//cy.get('#main-menu > ul > li:nth-child(2) > ul > li:nth-child(1) > ul > li:nth-child(1) > a').click({ force: true })
//open general awareness
cy.visit('/category/genaral-awareness')
cy.url().should('include','/category/genaral-awareness')
//Verify the examsbook version
cy.scrollTo('bottom')
cy.get('#footer > div.footer-copyright').should('contain','Examsbook CMS 2.7.0')
})
})
