const { select, input, checkbox } = require('@inquirer/prompts')

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

const ListarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar, o espaço para marcar/desmarcar e o Enter para finalizar",
        choices: [...metas],
        instructions: false,
    })

    if(respostas.length == 0){
        console.log("nenhuma meta selecionada!")
        return
    }

metas.forEach((m) =>{
    m.checked = false
})

    respostas.forEach((respostas) =>{
        const meta = metas.find((m) => {
            return m.value == respostas
        })
        meta.checked = true
    })
}

console.log('meta(s) concluida(s)')

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
                await ListarMetas()
                break
            case "Sair":
                console.log("Bye bye!")
                return
        }
    }
}
start()