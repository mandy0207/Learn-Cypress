///<reference types="Cypress"/>
import '@4tw/cypress-drag-drop'

describe('My test suite', () => {

    // Define a reusable function
    function DragDrop(source, destination){
    
    cy.get("#dropContent [id*='box']").each(($element, index, $list)=>{
      if($element.text()===source){
       
        cy.get("#countries [id*='box']").each(($el,index,$list)=>{
            if($el.text()===destination){
            
                cy.wrap($element).drag($el,{force:true}); 
                return false;
            }
        })
       
        return false;
      }
    })
    
}
  
    it('should check if an element exists', () => {
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
      
      // Call the reusable function

    
         DragDrop("Washington","United States");
         DragDrop("Seoul","South Korea");
         DragDrop("Oslo", "Norway");
         DragDrop("Stockholm","Sweden");
         DragDrop("Madrid", "Spain");
         DragDrop("Copenhagen","Denmark");
         DragDrop("Rome", "Italy");
    });
  
   
  });