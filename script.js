// Carregar questões do arquivo JSON
fetch('questoes.json')
    .then(response => response.json())
    .then(data => {
        questoes = data;
        listarQuestoes();
    });

let questoes = [];

// Funções adicionarQuestao, listarQuestoes, buscarQuestoes e gerarProva
// (Use o código JavaScript que te enviei anteriormente, mas remova a parte do LocalStorage)
