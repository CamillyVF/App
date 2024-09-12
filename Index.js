const { select } = require('@inquirer/prompts')
const start = async() => {

    while(true){
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastra metas",
                    value: "Cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "Listar"
                },
                {
                    name: "Sair",
                    value: "Sair"
                }
            ]
        })

        switch(opcao){
            case "Cadastrar":
                console.log ("vamos cadastrar")
                break
            case "Listar":
                console.log("vamos listar")
                break
            case "Sair":
                console.log("Bye bye!")
                return
        }
    }
}
start()