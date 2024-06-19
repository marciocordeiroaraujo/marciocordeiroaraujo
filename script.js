// Carregar questões do arquivo JSON
let questoes = [];
fetch('questoes.json')
    .then(response => response.json())
    .then(data => {
        questoes = data;
        listarQuestoes();
    });

// Função para adicionar uma questão
function adicionarQuestao(event) {
    event.preventDefault();

    const enunciado = document.getElementById("enunciado").value;
    const alternativas = document.getElementById("alternativas").value.split(",");
    const respostaCorreta = document.getElementById("respostaCorreta").value;
    const conteudo = document.getElementById("conteudo").value;

    const novaQuestao = { enunciado, alternativas, respostaCorreta, conteudo };
    questoes.push(novaQuestao);

    document.getElementById("formAdicionarQuestao").reset();
    listarQuestoes();
}

// Função para listar as questões cadastradas
function listarQuestoes(questoesFiltradas = questoes) { // Parâmetro opcional para filtrar
    const listaQuestoesDiv = document.getElementById("listaQuestoes");
    listaQuestoesDiv.innerHTML = ""; 

    for (const questao of questoesFiltradas) {
        const questaoDiv = document.createElement("div");
        questaoDiv.classList.add("questao");

        questaoDiv.innerHTML = `
            <h3>${questao.enunciado}</h3>
            <ul>
                ${questao.alternativas.map(alt => `<li>${alt}</li>`).join("")}
            </ul>
            <p><strong>Resposta Correta:</strong> ${questao.respostaCorreta}</p>
            <p><strong>Conteúdo:</strong> ${questao.conteudo}</p>
        `;

        listaQuestoesDiv.appendChild(questaoDiv);
    }
}

// Função para buscar questões por conteúdo
function buscarQuestoes() {
    const termoBusca = document.getElementById("buscaConteudo").value.toLowerCase();
    const questoesFiltradas = questoes.filter(questao =>
        questao.conteudo.toLowerCase().includes(termoBusca)
    );

    listarQuestoes(questoesFiltradas); // Passar as questões filtradas para a função listarQuestoes
}

// Função para gerar a prova em PDF (implementação básica)
function gerarProva() {
    // Lógica para selecionar as questões da prova (por exemplo, aleatoriamente)
    // ...

    // Criar o PDF usando jsPDF
    // ...

    // Salvar ou exibir o PDF gerado
    // ...
}
