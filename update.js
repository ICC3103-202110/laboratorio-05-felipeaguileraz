
function update(amount, porcentage, model){
    var Tip = (amount, porcentage) => amount*(porcentage/100)
    FinalTip = Tip(amount, porcentage)
    const addition = (a,b) => a+b
    Total = addition(Number(amount), Number(FinalTip))
    
    return {
        ...model,
        BillAmount: amount, 
        Tip_por: porcentage, 
        Tip: FinalTip, 
        Total: Total
    }
    
}

module.exports = {
    update
}