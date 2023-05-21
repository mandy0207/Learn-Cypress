// Below statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>

//Test File is called a spec file
describe('My First Test Suite', () => {
    it('Learning about UI elements!', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
        cy.get(".search-keyword:nth-child(2)").type("Ca");
        cy.wait(2000);
        cy.get(".product").should("have.length", 5);
      
        /**
         * In order to retrieve only visible Items.
         * 
         * Way to make something synchronous 
         */
        cy.get(".product:visible").should("have.length", 4).then(function () {
            console.log("My name is mandy");
        })

      /**
       * Alias concept
       * when we have a locator to be used on many places we can make alias and
       * use it with "@" symbol . So that if tomorrow  locator changes, we have to change only at one place.
       */
        cy.get(".products").as("productsLocator");

        /**
         * Parent child chaining. 
         * find() is used.
         * It will find inside the .products section only
         */
        
        cy.get("@productsLocator").find(".product").should("have.length", 4);

        /**
         * eq is used to get particular index of an array
         * 
         * eg. here like we are grabing index 2 of an array
         */
        cy.get("@productsLocator").find(".product").eq(2).contains("ADD TO CART");


        //Way to retrieve lits of  webelements

        // cy.get(".products").find(".product").find("h4[class='product-name']").then($el =>{
        //     const list= Cypress.$.makeArray($el).map((el)=> el.innerText);

        //     list.forEach(element => {
        //         cy.log(element);
        //     });

        // })



         /**
          * Standard way of handling array in cypress
          * 
          * Just because the click method is deprecated on find() method so we need to resolve the promise
          * 
          * That's why we are using wrap method to wrap element and then clicking it.
          */
        cy.get("@productsLocator").find(".product").each(($element, index, $list) => {
            const text = $element.find("h4[class='product-name']").text();
            cy.log(text);
            if (text.includes("Cashews")) {
                //$element.find("div[class='product-action'] button").click();
                cy.wrap($element).find("div[class='product-action'] button").click();

            }

        })

        /**Technique to retrieve web elements list
         * 
         * Another way of by retriving list of web elements by resolving promise
         * and then iterating that list of elements to click on ADD TO CART Button
         */

    //    cy.get("@productsLocator").find(".product").then($el=>{
    //     const list= Cypress.$.makeArray($el);
    //     list.forEach(element => {
    //         console.log(element);
    //         const text =element.innerText;
    //         if (text.includes("Cashews")) {
    //             cy.wrap(element).find("div[class='product-action'] button").click();
    //         }
    //        });
    
    //    })
      
  
        /**
         * resolving Promise with then method
         * 
         * text() is not a cypress method . it's a jquery method so we require to resolve promise before using any non cypress command.
         * 
         */
        
       

        cy.get('.brand').then(function (logoelement) {
            const text = logoelement.text();
            cy.log(text);
        })

        /**
         *  Way to create an assertion 
         */
        cy.get('.brand').should("have.text", "GREENKART");

        cy.get('.cart-icon > img').click();
        cy.contains("PROCEED TO CHECKOUT").click();

        cy.get('.promoCode').type("rahulshettyacademy");
        cy.get('.promoBtn').click();

        cy.wait(5000);
        cy.get('.discountAmt').should("have.text", "585");

    })
})