// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
describe('My Test Suite', () => {


    before(function () {
        cy.fixture('example').then((data)=>{
            globalThis.data = data;

        })
    })

    /**we can define our custom commands or methods inside the command.js under support folder
     * 
     * Like here we have defined the command name as addProduct in command.js
     * 
     * Cy.pause can be used to debug the test and see the problems
     */
    it('Fixture Concept to drive data!', () => {
      
        cy.visit("https://rahulshettyacademy.com/angularpractice/");      
        cy.get("ul li:nth-child(2) a").click();
        globalThis.data.products.forEach(element => {
            cy.addProduct(element);
        });
    
       
    })

})