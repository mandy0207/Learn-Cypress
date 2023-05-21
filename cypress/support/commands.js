// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')


Cypress.Commands.add('addProduct', (productName) => {
    cy.get("h4.card-title").each(($el, index,$list)=>{
        if($el.text().includes(productName)){
            cy.get(".card-footer button").eq(index).click();
        }
       })



})
/**
 * Wrappers
 */

Cypress.Commands.add('ClickElement', (element) => { 

    element.click();
 })

Cypress.Commands.add('Sendkeys', (element,value) => { 

    element.type(value);
 })

 Cypress.Commands.add('GetElementText', (locator) => {
     cy.get(locator).invoke('text').then((text)=>{

        //text can't be sent with return statement. Use alias in in order ro retrieve back text
        return cy.wrap(text).as('result');
    })

    
})

Cypress.Commands.add('ValidateElementText', (locator, value) => {
    cy.get(locator).then((elm)=>{
        const Text=elm.text();

        expect(Text).to.equal(value);
    })


   
})

import './commands'
   Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
 // failing the test
   return false
   })




  