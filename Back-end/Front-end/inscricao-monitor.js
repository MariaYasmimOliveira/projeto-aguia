// inscricaoMonitor.js

// 1. Pega o formulário pelo ID: 'formMonitor'
const formMonitor = document.getElementById('formMonitor'); 

// 2. Adiciona um "ouvinte" para quando o formulário for submetido
formMonitor.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página

    // 3. Coleta os valores dos campos
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const telefone = document.getElementById('telefoneContato').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    
    // CAMPO ESPECÍFICO DO MONITOR: ID deve ser 'areaInteresse'
    const area_interesse = document.getElementById('areaInteresse').value; 

    // 4. Monta o objeto JSON que o Back-end espera
    const dadosCandidatura = {
        nome_monitor: nomeCompleto,
        telefone: telefone,
        data_nascimento: dataNascimento,
        area_interesse: area_interesse
    };

    try {
        // 5. Envia os dados para a rota POST CORRETA do Node.js
        const resposta = await fetch('http://localhost:3000/api/inscricao/monitor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosCandidatura),
        });

        // 6. Trata a resposta
        if (resposta.status === 201) {
            alert('✅ Candidatura de monitor registrada e salva no banco de dados!');
            formMonitor.reset(); 
        } else {
            alert(`❌ Erro na candidatura. Status: ${resposta.status}.`);
            console.error('Resposta do servidor:', await resposta.text());
        }
    } catch (erro) {
        console.error('Erro de conexão:', erro);
        alert('❌ Falha ao conectar. Verifique se o Node.js está rodando.');
    }
});