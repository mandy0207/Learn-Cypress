class HomePage{

    getName(){
        return  cy.get("input[name='name']:nth-child(2)");
    }
    
    getGender(){
        return cy.get(".form-group select");
    }
   
    getDisabledRadio(){
        return  cy.get('#inlineRadio3');
    }

    getShopBtn(){
        return cy.get("ul li:nth-child(2) a");
    }
}

export default HomePage;
