// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
describe('My Test Suite', () => {
    it('Learning about static dropdowns !', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        /**
         * 
         * For handling static dropdown
         * 
         * Select method is used and it accepts either value or text or index
         */
    
        cy.get('#dropdown-class-example').select("option2").should("have.value","option2");

        
    })

})