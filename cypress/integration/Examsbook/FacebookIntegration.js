// JavaScript Document
describe('Suit-Examsbook',function(){

it('Like On Facebook',function(){

cy.login()
cy.scrollTo(0,800)

/*Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
         return new Cypress.Promise(resolve => {
          $iframe.on('load', () => {
           resolve($iframe.contents().find('body'))
        })
    }).then(()=>{console.log("contents returned")})
    
})*/

/*Cypress.Commands.add('iframe', {prevSubject: 'element'}, (iframe) => {
    const iframeDoc = iframe[0].contentDocument

    return new Cypress.Promise(resolve => {
        const resolveWithBody = () => {
            resolve(iframe.contents().find('body'))
        };

        if ( 'complete' === iframeDoc.readyState ) {
            resolveWithBody()
        }

        iframe.on('load', () => {
            resolveWithBody()
        })
    })
})*/

Cypress.Commands.add("iframe", { prevSubject: "element" }, $iframe => {
  Cypress.log({
    name: "iframe",
    consoleProps() {
      return {iframe: $iframe,}
    },
  })
  return new Cypress.Promise(resolve => {
    onIframeReady(
      $iframe,
      () => {
        resolve($iframe.contents().find("body"))
      },
      () => {
        $iframe.on("load", () => {
          resolve($iframe.contents().find("body"))
        })
      }
    )
  })
})

function onIframeReady($iframe, successFn, errorFn) {
  try {
    const iCon = $iframe.first()[0].contentWindow,
          bl = "about:blank",
          compl = "complete"
    const callCallback = () => {
      try {
        const $con = $iframe.contents();
        if ($con.length === 0) {
          // https://git.io/vV8yU
          throw new Error("iframe inaccessible");
        }
        successFn($con);
      } catch (e) {
        // accessing contents failed
        errorFn()
      }
    }
    const observeOnload = () => {
      $iframe.on("load.jqueryMark", () => {
        try {
          const src = $iframe.attr("src").trim(),
                href = iCon.location.href
          if (href !== bl || src === bl || src === "") {
            $iframe.off("load.jqueryMark")
            callCallback()
          }
        } catch (e) {
          errorFn()
        }
      })
    }
    if (iCon.document.readyState === compl) {
      const src = $iframe.attr("src").trim(),
            href = iCon.location.href
      if (href === bl && src !== bl && src !== "") {
        observeOnload()
      } else {
        callCallback()
      }
    } else {
      observeOnload();
    }
  } catch (e) {
    // accessing contentWindow failed
    errorFn();
  }
}
cy.get('span > iframe').iframe().contains('Like Page').should('have.attr','target','_blank')


})

it('HabilelabsFacebook',function(){

//Load facebook.com/examsbook
cy.visit('https://www.facebook.com/examsbook')
//Login in facebook
cy.get('#email').clear().type('adarshmamodia26@gmail.com').should('have.value','adarshmamodia26@gmail.com')
cy.get('#pass').clear().type('fbfbfb@9999').should('have.value','fbfbfb@9999')
cy.get('#loginbutton').click()
cy.url().should('include','/')
//Load facebook.com/examsbook
cy.visit('https://www.facebook.com/examsbook')
//Like the examsbook page
cy.contains('Like').click()
//unlike the examsbook page
cy.contains('Liked').click()
cy.contains('Unlike this Page').click().wait(10000)
cy.contains("Done").click({force:true})
//Logout the application
cy.get('#userNavigationLabel').click().wait(10000)
cy.contains('Log Out').click()


})

})
