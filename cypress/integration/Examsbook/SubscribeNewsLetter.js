// JavaScript Document
// JavaScript Document
describe('Suit-Examsbook',function(){
it('SubscribeNewsLetter', function(){
//login into application
cy.login()

//Subscribing the news letter
cy.scrollTo('bottom')
cy.get('#footer > div.wrapper > div > div:nth-child(4) > ul > h3 > span').should('have.text','Examsbook Newsletter')
// random nunber
const random = Math.random() * 100+'mail'
cy.get('#newsletter-email').type(random+'@habilelabs.io').should('have.value',random+'@habilelabs.io')
cy.get('#newsletter-form > div.clear > input').click()
cy.get('#success1').should('have.text','You have Subscribed Successfully')

//verifying that newsletter should not subscribe for the subscribed email address

cy.get('#newsletter-email').type(random+'@habilelabs.io').should('have.value',random+'@habilelabs.io')
cy.get('#newsletter-form > div.clear > input').click()
cy.get('#already1').should('have.text','Email Already Exist')

})
})
