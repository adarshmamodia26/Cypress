// JavaScript Document
describe('Suit-Examsbook',function(){

it('Contact-Us',function(){

//login into application
cy.login()
cy.scrollTo('bottom')
//clikc on Contact-Us  button
cy.get('#footer > div.wrapper > div > div:nth-child(1) > div > button > a').click()
cy.url().should('include','/contact-us')

cy.scrollTo('right')
//send message
cy.get('#name').type('Habilelabs').should('have.value','Habilelabs')
cy.get('#contactEmail').type('habilelabs#habilelabs.io').should('have.value','habilelabs#habilelabs.io')
cy.get('#message').type('Hi, I want to subscribe to examsbook').should('have.value','Hi, I want to subscribe to examsbook')
cy.get('#sendBtn > span').click();
cy.get('#messageSuccess').should('have.text','Message successfully sent.')
})

})
