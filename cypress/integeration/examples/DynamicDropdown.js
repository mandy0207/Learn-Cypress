// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
describe('My Test Suite', () => {
    it('Learning about dynamic dropdowns !', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
        cy.get('#autocomplete').type("ind");
        cy.get('.ui-menu-item div').each(($el, index, $list)=>{
            
            if($el.text()==="India"){
               cy.wrap($el).click();
            }
        })
       
        cy.get('#autocomplete').should("have.value", "India");
        
    })

})