// LISTA DE EVENTOS 

const eventos = [
    {
        id: 1, 
        titulo: "Mostra Cultural",
        data: "2025-10-25", // Formato AAAA-MM-DD
        horario: "19h00",
        local: "Escola Estadual Lino Villachá",
        foto: "image/escola_lino.jpg",
        detalhes: "Os alunos da Escola Estadual Lino Villachá promovem uma Mostra Cultural com temas relevantes e inspiradores. O Projeto foi convidado a participar, trazendo músicas que valorizam e enriquecem nossa cultura."
    },
    {
        id: 2,
        titulo: "Recital de Fim de Ano",
        data: "2025-12-15",
        horario: "19h00",
        local: "Campo de Futebol - Bairro Jardim Colúmbia",
        foto: "image/recital_columbia24.png",
        detalhes: "O Projeto realiza seu Recital de Final de Ano no campo de futebol do Jardim Columbia, reunindo alunos, professores e monitores em um grande espetáculo musical. As apresentações incluem as oficinas de Orquestra, Bandas, Canto Coral e Batuca Lata, celebrando o talento e a dedicação de todos durante o ano"
    },
    {
        id: 3,
        titulo: "Marcha Cultural",
        data: "2024-06-12",
        horario: "19h00",
        local: "Ínicio no Campo de Futebol - Bairro Jardim Columbia - Término no Projeto Águia",
        foto: "image/marcha_cultural24.jpg",
        detalhes: "O Projeto Águia realizou sua Primeira Marcha Cultural, marcada pela criatividade e pelo envolvimento dos alunos. A atividade contou com a apresentação do Batuca Lata, oficina oferecida pelo projeto, na qual os participantes utilizam materiais recicláveis para construir instrumentos musicais. O percurso teve início no campo de futebol do Jardim Columbia, seguiu pela rua de cima e encerrou-se na sede do Projeto Águia, localizada na Avenida Pindaré."
    }
    // Adicione mais eventos aqui!
];

// Pega os elementos HTML onde os cards serão inseridos
const cardsFuturosContainer = document.getElementById('cards-futuros');
const cardsPassadosContainer = document.getElementById('cards-passados');

const hoje = new Date();

// Função para criar o HTML de um card de evento
function criarCardEvento(evento) {

    // IMPORTANTE: A data para o cálculo deve continuar no formato AAAA-MM-DD.
    // Aqui, nós apenas a formatamos para a exibição!

    const dataObj = new Date(evento.data + 'T00:00:00');
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${evento.foto}" class="card-img-top" alt="Imagem do evento ${evento.titulo}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${evento.titulo}</h5>
                    <p class="card-text"><strong>Data:</strong> ${dataFormatada}</p>
                    <p class="card-text"><strong>Horário:</strong> ${evento.horario}</p>
                    <p class="card-text"><strong>Local:</strong> ${evento.local}</p>
                    <button type="button" class="btn btn-primary btn-card mt-auto" 
                            data-bs-toggle="modal" data-bs-target="#modalDetalhes" 
                            data-evento-id="${evento.id}">
                        Detalhes
                    </button>
                </div>
            </div>
        </div>
    `;
}


// Percorre a lista de eventos e os insere nas seções corretas
eventos.forEach(evento => {
    const dataEvento = new Date(evento.data);

    if (dataEvento >= hoje) {
        cardsFuturosContainer.innerHTML += criarCardEvento(evento);
    } else {
        cardsPassadosContainer.innerHTML += criarCardEvento(evento);
    }
});

// Lógica para preencher o pop-up com as informações do evento clicado
const modalDetalhes = document.getElementById('modalDetalhes');
modalDetalhes.addEventListener('show.bs.modal', function (event) {

    // Pega o botão que acionou o modal
    const button = event.relatedTarget;
    const eventoId = button.getAttribute('data-evento-id');

    // Encontra o evento correspondente na lista
    const eventoSelecionado = eventos.find(evento => evento.id == eventoId);


    // Formata a data do evento selecionado para o padrão brasileiro
    const dataObj = new Date(eventoSelecionado.data + 'T00:00:00');
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    // Atualiza o conteúdo do modal
    const modalTitulo = document.getElementById('modalTitulo');
    const modalCorpo = document.getElementById('modalCorpo');
    
    modalTitulo.textContent = eventoSelecionado.titulo;
    modalCorpo.innerHTML = `
        <p><strong>Data:</strong> ${dataFormatada}</p>
        <p><strong>Local:</strong> ${eventoSelecionado.local}</p>
        <p>${eventoSelecionado.detalhes}</p>
    `;
});