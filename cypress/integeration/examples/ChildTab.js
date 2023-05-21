// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
describe('My Test Suite', () => {
    it('Learning about child windows !', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      
      

        /**
         * Concept of handling child windows
         * 
         * Cypress does not have any ability to handle child windows. It operates only in Parent window
         * But we can build an intelligence to handle child window.
         * 
         * There are two ways of doing that
         * 
         * As cypress has an ability to manipulate DOM , so we can remove target attribute from the button 
         * and make cypress open the child window in the same parent window
         * 
         * Another way is to copy href attribute link and hit that link in window.
         * 
         * For this we have to use "invoke()" method and use jquery method removeAttr
         * Refer the statement below
         * 
         * we have to write the code belongs to new child window page only under origin section
         * because Cypress does not support cross domain automation
         * 
         * so he have to wrap the code of another domain in cy.origin()
         */
        cy.get("#opentab").invoke("removeAttr","target").click();

        cy.origin('https://www.qaclickacademy.com/', () =>{ 
            cy.url().should('include', 'qaclickacademy')             
            cy.go('back')        
     })

     /**
      * Second Way
      */

     cy.get("#opentab").then(function(el){
       const URL = el.prop("href");
       cy.visit(URL);

       cy.origin(URL, () =>{ 
        cy.url().should('include', 'qaclickacademy')             
         cy.go('back')        
  })
     })

     

  


    })

})