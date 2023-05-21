// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
describe('My Test Suite', () => {
    it('Learning about MouseActions !', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        /**
         * Cypress has an ability to access even hidden elements.
         * 
         * Basically, when we hover on some element; new elements becomes visible in DOM
         * 
         * We can handle those hidden elements by 2 ways
         * 
         * 1) using jquery show method. For this we have to use the immediate parent locator to hidden element(not super parent)
         * 
         * 2) other way is force clicking it. Reason behind is Cypress can easily read the invisible elements in DOM as well
         */
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains("Top").click();
        cy.url().should("include","top");

        //2nd way of handling 
        cy.contains("Top").click({force:true});
        cy.url().should("include","top");

   

    })

})