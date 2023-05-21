// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
describe('My Test Suite', () => {
    it('Learning about checkboxes !', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
    /**
     * For behavioural Assertions  we use be
     * 
     * Use "and" when there are two consecutive assertions 
     */

     
       cy.get("#checkBoxOption2").check().should("be.checked").and("have.value","option2");
       cy.get("#checkBoxOption2").uncheck().should("not.be.checked");

    })

})