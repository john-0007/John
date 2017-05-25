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

