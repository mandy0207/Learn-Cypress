class DevicesPage{

  


    getprice(){
        return cy.get("tr td:nth-child(4) strong");
    }

    gettotalPrice(){
       return  cy.get("h3 strong");
    }

    getCheckOutBtn(){
        return cy.get(".btn.btn-success");
    }
   
   

    static sum =0; 
    ValidatePrice(){
        this.getprice().each(($el,index, $list )=>{
            DevicesPage.sum=DevicesPage.sum+parseInt(($el.text().split("₹. "))[1]);
            cy.log(DevicesPage.sum);
        }).then(function (){
            console.log("final sum="+DevicesPage.sum);
            cy.log("Final sum="+DevicesPage.sum);

        })

        this.gettotalPrice().then(function(elem){
           
            const price =  parseInt((elem.text().split("₹. "))[1].trim());
            cy.log("TPP="+price);
            console.log(price);
            
            expect(DevicesPage.sum).to.equal(price);
            })
            cy.ClickElement(this.getCheckOutBtn());
    }
  
    
}

export default DevicesPage;