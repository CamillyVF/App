const { select, input } = require('@inquirer/prompts')

let meta = {
    value: 'Tomar 3L de agua por dia',
    checked: false,
}

let metas = [meta]

const CadastraMeta = async () => {
    const meta = await input({message: "Digite a meta:"})

    if(meta.length == 0){
        console.log("a meta não pode ser vazia.")
        return
    }

    meta.push(
        {value: meta, checked: false}
    )
}


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
                CadastraMeta()
                console.log(metas)
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