// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
describe('My Test Suite', () => {


    before(function () {
        cy.fixture('example').then((data)=>{
            globalThis.data = data;

        })
    })
   /**
    * under fixture folder we have example.json where we can define all global properties or test data
    * and can be drived inside test
    * 
    * 
    */
    it('Fixture Concept to drive data!', () => {
      
        cy.visit("https://rahulshettyacademy.com/angularpractice/");      
        cy.get("input[name='name']:nth-child(2)").type( globalThis.data.name);
        cy.get(".form-group select").select( globalThis.data.gender);
        
        cy.get("input[name='name']:nth-child(2)").should("have.attr","minlength",'2');

        cy.get('#inlineRadio3').should("be.disabled");

       
    })

})