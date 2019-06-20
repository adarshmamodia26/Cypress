// JavaScript Document
describe('Suit-Examsbook',function(){
/*before(function() {
cy.login()

})*/

it('Total Exams In Question Bank',function(){

cy.get('#main-menu > ul > li:nth-child(2) > a').should('have.text','Question Bank ')
cy.get('#main-menu > ul > li:nth-child(2) > ul > li').should('have.length',9)
})

it('Total Test In Tests',function(){

cy.get('#main-menu > ul > li:nth-child(3) > a').should('contain','Tests  ')
cy.get('#main-menu > ul > li:nth-child(3) > ul > li').should('have.length',3)
})

it('Total options In GK',function(){

cy.get('#main-menu > ul > li:nth-child(4) > a').should('contain','GK')
cy.get('#main-menu > ul > li:nth-child(4) > ul > li').should('have.length',14)
})

it('Total options In REASONING',function(){

cy.get('#main-menu > ul > li:nth-child(5) > a').should('contain','Reasoning ')
cy.get('#main-menu > ul > li:nth-child(5) > ul > li').should('have.length',3)
})

it('Total options In MATHS',function(){

cy.get('#main-menu > ul > li:nth-child(6) > a').should('contain','Maths ')
cy.get('#main-menu > ul > li:nth-child(6) > ul > li').should('have.length',2)
})

it('Total options In GENERAL ENGLISH',function(){

cy.get('#main-menu > ul > li:nth-child(7) > a').should('contain','General English ')
cy.get('#main-menu > ul > li:nth-child(7) > ul > li').should('have.length',0)
})

it('Total options In PRACTICE',function(){

cy.get('#main-menu > ul > li:nth-child(8) > a').should('contain','Practice ')
cy.get('#main-menu > ul > li:nth-child(8) > ul > li').should('have.length',5)
})


})
