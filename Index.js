const start = () => {

    while(true){
        let opcao = "Sair"
        switch(opcao){
            case "Cadastrar":
                console.log ("vamos cadastrar")
                break
            case "Listar":
                console.log("vamos listar")
                break
            case "Sair":
                return
        }
    }
}

start()