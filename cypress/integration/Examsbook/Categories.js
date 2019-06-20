// JavaScript Document
describe('Suit-Examxbook',function(){
it('Categories', function(){

//Login into the application
cy.login()

cy.scrollTo(0,900)

//Go to categories and open GK Question Bank
cy.get('#sidebars > div:nth-child(2) > h3 > span').should('have.text','Categories')
cy.get('#sidebars > div:nth-child(2) > div > a:nth-child(12)').click()
cy.url().should('include','/category/gk-question-bank')
cy.get('#content > div > div > div > div.categories-color.banner-Categories > div.categoriesTitle > h1').should('have.text','GK Question Bank')

})

})
