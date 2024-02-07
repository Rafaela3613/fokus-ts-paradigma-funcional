interface Tarefa {
    descricao : string
    concluida : boolean 
}

interface estadoAplicacao {
    tarefas: Tarefa[
    tarefaSelecionada: Tarefa
    ]
}