// This statement is used to make IDE show suggestions of the cypress methods/ libraries
///<reference types="Cypress"/>
describe('My Test Suite', () => {
    it('Learning about Alerts !', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    

        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        /**
         * ****************************     Notes    *****************************
         * 
         * Cypress Automatically accepts the alerts. No need to handle it seprately.
         * Now question comes, what if we have to validate any kind of text present inside alert.
         * 
         * Developing Concept : Whenever there is an alert on page there is an event trigerred for the browser Depending upon the type of alerts
         * 
         * If it's simple alert;  event trigerred is =   window:alert 
         * If it's confirm based alert; event trigered =  window:confirm
         * 
         * Refer code below
         * 
         * on() method is used to firing event.
         * 
         * promise is also handled
         */ 

        cy.on('window:alert', (str)=>{
           

            //  Mocha assertion to compare strings
           expect(str).to.equal('Hello , share this practice page and share your knowledge')
           
        })

        cy.on('window:confirm', (str)=>{
            //  Mocha assertion to compare strings
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
            
         })
        

    })

})