"import View from view"

function app(){  //debe ir una variable dentro de app
    while (true){
        "const currentview = view(variable)"
        console.clear()
        "console.log(currentview)"
        console.log()

        var prompt = require("prompt-sync")(); 
        const amount = prompt("Bill Amount: " )
        const porcentage = prompt("Tip(%): ")

        "variable = update(amount, porcentage, variable)" //esta variable
                                                          //va dentro de view
        const quit = prompt("Are you finished with the tip (Y/N)? ")
        if (quit === "Y"){
            break;
        }else{
            continue;
        }

    }

}
app()