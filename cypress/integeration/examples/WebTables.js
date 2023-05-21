// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
describe('My Test Suite', () => {
    it('Handling Tables!', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");


        cy.get("#product tr td:nth-child(2)").each(($element, index, $list) => {
            const text = $element.text();

            
            if(text.includes("Master Selenium Automation in simple Python Language")){   
             cy.get("#product tr td:nth-child(2)").eq(index).next().then(function(price){
                const priceText = price.text();
                cy.log(priceText);
                expect(priceText).to.equal('25');
            })

            }

    })

        
    })

})