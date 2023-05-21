class CheckoutPage{


getInputField(){
  return  cy.get("#country");
}

getIndia(){
    return cy.get('.suggestions > ul > li > a');
}

getCheckbox(){
    return cy.get('.checkbox > label');
}

getPurchaseBtn(){
    return cy.get("input[value='Purchase']");

}

getTextMsg(){
   return ".alert.alert-success";
}


ValidateOrder(){
    cy.Sendkeys(this.getInputField(), "India");
    /**
     * Expicit wait for particular step
     */
    Cypress.config('defaultCommandTimeout',8000)
    this.getIndia().click();
    this.getCheckbox().click();
    cy.ClickElement(this.getPurchaseBtn());
    cy.GetElementText(this.getTextMsg());

    cy.get('@result').then((result) => {
        cy.log("result="+result);
        console.log("Result="+result);
        expect(result).to.include("Success");
    
      });

    cy.ValidateElementText("label[for='country']", "Please choose your delivery location. Then click on purchase button ")  
  
   
}

}

export default CheckoutPage;
