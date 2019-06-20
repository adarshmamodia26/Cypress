describe('The Login Page', function () {
  beforeEach(function () {
    // reset and seed the database prior to every test
    //cy.exec('npm run db:reset && npm run db:seed')*/

    // seed a user in the DB that we can control from our tests
    // assuming it generates a random password for us
    /*cy.request('POST', '/test/seed/user', { username: 'adarsh.mamodia@habilelabs.io' })
      .its('body')
      .as('currentUser')*/
  })

  it('sets auth cookie when logging in via form submission', function () {
    // destructuring assignment of the this.currentUser object
    //const { username, password } = this.currentUser

    cy.visit('/')
    //cy.wait(10)

    cy.get('#Login').click()
    cy.get('input[id=loginEmail]').type('adarsh.mamodia@habilelabs.io')
    // {enter} causes the form to submit
    cy.get('input[id=loginPassword]').type(`${'56m7996dilbar'}{enter}`).wait(10)

    // our auth cookie should be present
    //cy.getCookie('your-session-cookie').should('exist')

    // UI should reflect this user being logged in
    //cy.get('h1').should('contain', 'adarsh.mamodia@habilelabs.io')
    
    //cy.get('img').should('contain','[ <img>, 170 more... ]')
  
  })
})
