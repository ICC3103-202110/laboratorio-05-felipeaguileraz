const {QuestionBill, QuestionTip} = require("./view")
const {printTable} = require('console-table-printer');

function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {table, Title} = currentView
        console.clear()
        console.log(Title)
        printTable(table)
        console.log()

        const prompt = require("prompt-sync")(); 

        const amount = prompt(QuestionBill())
        const porcentage = prompt(QuestionTip())
        
        const newtable = update(amount, porcentage, model) 
        state = {
            ...state,
            model: newtable,
            currentView: view(newtable)
        }       
    
    }
}

module.exports = { 
    app
}