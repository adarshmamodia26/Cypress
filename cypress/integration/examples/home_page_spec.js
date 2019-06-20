describe('Suit', function(){
beforeEach(function() {
//cy.exec('npm run db:reset && npm run db:seed')

/*cy.request('POST','/test/seed/post',{
title: 'First Post',
authorId: 1,
body: '...'
})*/

//cy.request('POST','/test/seed/user',{name:'Jane'}).its('body').as('currentUser')

})
it('Test',function(){
cy.visit('/')
cy.get('#Login').click()
cy.get('#loginEmail').type('adarsh.mamodia@habilelabs.io').should('have.value','adarsh.mamodia@habilelabs.io')
cy.get('#loginPassword').type('xyz').clear().type('56m7996dilbar').should('have.value','56m7996dilbar')
cy.get('#login-button > span').debug().click()
cy.get('#main-menu > ul > li:nth-child(2) > ul > li:nth-child(1) > ul > li:nth-child(1) > a').click({ force: true })


})
})
