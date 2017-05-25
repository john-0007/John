require("../styles/style.css");
// UI CONTROLLER
var UIController=(function(){
    
    var DOMstring={
         inputType:".add__type",
         inputDescrition:"add__description",
         inputValue:"add__value",
         inputBtn:".add__btn"
    };
    return {
        getInput:function(){ 
         return {
           type: document.querySelector(DOMstring.inputType),
           description: document.querySelector(DOMstring.inputDescrition),
           value: document.querySelector(DOMstring.inputValue),
    };
    },
       getDOMString=function(){
         return DOMstring;
    }
    };
    
})();
// Global APP CONTROLLER
var controller=(function(budgetCtrl,UICtrl){
    var DOM=UICtrl.getDOMString();
  var ctrlAddItem=function(){
      // 1. GET the filed input data
      // 2. Add item to the budget controll
      // 3. Add item to the UI controll 
      // 4. Calculate the budget 
      // 5. display the budget on the UI
  };
  document.querySelector(DOM.inputBtn).addEventListener("click",ctrlAddItem);
  document.activeElement("keypress",function(event){
    if(event.keyCode=== 13 || event.which === 13){
        ctrlAddItem();
    }  
      
  });
})(budgetController,UIController);























