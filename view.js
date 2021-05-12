var figlet = require('figlet');
const chalk = require('chalk');

function Title(){
    return chalk.red(
        figlet.textSync(
            "TIP CALCULATOR",
            {
                horizontalLayout: "full",
                
            }
        )
    )
}

function QuestionBill(){
    return ("BillAmount? ")
}

function QuestionTip(){
    return ('Tip(%)? ')
}

function table(model){
    return [
    { BillAmount: model.BillAmount, "Tip(%)": model.Tip_por, Tip: model.Tip, Total: model.Total },
    ];
}
function view(model){
    return {
        Title: Title(),
        table: table(model)
    }
}

module.exports = {
    view,
    QuestionBill,
    QuestionTip
}