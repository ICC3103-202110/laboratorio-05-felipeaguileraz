var figlet = require('figlet');
const chalk = require('chalk');
const { printTable } = require('console-table-printer');

function View(){
    figlet("TIP CALCULATOR", function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
    const testCases = [
    { BillAmount: 0, Tip: 0, Tip1: 0, Total: 0 },
    ];
    printTable(testCases);
}
view()
