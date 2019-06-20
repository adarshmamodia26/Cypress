// JavaScript Document
describe('Suit-Examsbook',function(){
it('SearchData', function(){
//login into application
cy.login()

//Search the data
cy.get('#header > div > div > a').should('have.attr','href','/search')
cy.visit('/search')
cy.url().should('include','/search')
cy.get('#content > div.header-quiz-list > h2').should('have.text','Search from Examsbook')
cy.get('#gsc-i-id1').type('IAS Paper{enter}')
/*cy.get('.container iframe:first')
  .then(function($iframe){
        //const $body=$iframe.contents().find('body')
        //cy.wrap($body).find('a').click({force:true})
        
        //const doc=$iframe.contents()
        //doc.find('a').click(()=>{console.log('clikced')})
        
        //const doc=$iframe.contents()
        //const mylink=doc.find('a:first')
        //cy.wrap(mylink).click()
        })*/
     
        /*Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
          return new Cypress.Promise(resolve => {
          $iframe.on('load', () => {
           resolve($iframe.contents().find('body').contains('Preparing For'))
        })
    }).then(()=>{console.log("content has returned")})
    
})
// for <iframe id="foo" src="bar.html"></iframe>
cy.get('.gsc-adBlock iframe').iframe().click()*/
//.find('div:nth-child(1)')
        
                         
//cy.get('[data-nb=0]').click()
cy.get('#___gcse_0 > div > div > div > div.gsc-wrapper > div.gsc-resultsbox-visible > div > div > div.gsc-webResult.gsc-result > div.gs-webResult.gs-result > div.gsc-thumbnail-inside > div > a').click()
})
})
