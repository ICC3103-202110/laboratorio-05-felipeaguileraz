const { printTable } = require('console-table-printer');

function update(amount, porcentage){
    //traer view()
    var Tip = (amount, porcentage) => amount*(porcentage/100)
    FinalTip = Tip(amount, porcentage)
    Total = amount + FinalTip
    const testCases = [
        { BillAmount: amount, Tip: porcentage, Tip1: FinalTip, Total: Total},
        ];
        printTable(testCases);

}

update(1263,12.568)