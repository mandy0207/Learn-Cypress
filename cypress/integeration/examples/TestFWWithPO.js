// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
import DevicesPage from "../pageObjects/DevicesPage";
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";
import CheckoutPage from "../pageObjects/CheckoutPage";


describe('My Test Suite', () => {


    before(function () {
        cy.fixture('example').then((data)=>{
            globalThis.data = data;
     
        })
        cy.log("Test Initiated in "+Cypress.env('Environment')+" Environment")
        cy.visit(Cypress.env(Cypress.env('Environment'))); 
    })
   
    it('To Validate few fields on the Angular Page', () => {
      const hp = new HomePage();
      const pp = new ProductsPage();
      const dp = new DevicesPage();
      const cp = new CheckoutPage();
            
        
      hp.getName().type( globalThis.data.name);
      hp.getGender().select( globalThis.data.gender);  
      hp.getName().should("have.attr","minlength",'2');
      hp.getDisabledRadio().should("be.disabled");
      hp.getShopBtn().click();

      globalThis.data.products.forEach(element => {
        cy.addProduct(element);
    });

    pp.getCheckoutBtn().click();
    dp.ValidatePrice();
    cp.ValidateOrder();
    
    

    })

})