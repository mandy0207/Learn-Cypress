// This statement is used to make IDE show suggestions of the cypress methods/ libraries
import 'cypress-iframe'
///<reference types="Cypress"/>
describe('My Test Suite', () => {
    it('Learning about Frames !', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        /**
         * 
         * install cypress-iframe package (using command =npm i -D cypress-iframe )
         * 
         * import package
         * 
         * First we have to grab the frame using frameloaded method
         * 
         * we have to use iframe() method first in order to use any subsequent operations
         * 
         * refer below
         * 
         * 
         * 
         */
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.wait(5000);
        cy.iframe().find("h1[class*='pricing-title']").should("have.length",2);
        

        
    })

})