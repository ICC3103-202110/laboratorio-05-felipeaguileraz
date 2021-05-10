var figlet = require('figlet');
const chalk = require('chalk');
const { printTable } = require('console-table-printer');
figlet("TIP CALCULATOR", function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

function view(amount, porcentage, tip, total){
    const testCases = [
    { BillAmount: amount, Tip: porcentage, Tip1: tip, Total: total },
    ];
    printTable(testCases);
}
view(0, 0, 0, 0)
