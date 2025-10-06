// inscricaoAluno.js

// 1. Pega o formulário pelo ID (você precisa garantir que seu form tenha o ID: 'formAluno')
const formAluno = document.getElementById('formAluno'); 

// 2. Adiciona um "ouvinte" para quando o formulário for submetido
formAluno.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página

    // 3. Coleta os valores dos campos (AJUSTE OS IDS ABAIXO PARA O SEU HTML)
    const nomeCompleto = document.getElementById('nomeCompleto').value;
    const telefone = document.getElementById('telefoneContato').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const instrumento = document.getElementById('instrumentoInteresse').value;

    // 4. Monta o objeto JSON que o Back-end espera
    const dadosInscricao = {
        nome_aluno: nomeCompleto,
        telefone: telefone,
        data_nascimento: dataNascimento,
        instrumento_interesse: instrumento
    };

    try {
        // 5. Envia os dados para a rota POST do Node.js
        const resposta = await fetch('http://localhost:3000/api/inscricao/aluno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosInscricao),
        });

        // 6. Trata a resposta
        if (resposta.status === 201) {
            alert('✅ Inscrição do aluno realizada e salva no banco de dados!');
            formAluno.reset(); 
        } else {
            alert(`❌ Erro na inscrição. Status: ${resposta.status}.`);
            console.error('Resposta do servidor:', await resposta.text());
        }
    } catch (erro) {
        console.error('Erro de conexão:', erro);
        alert('❌ Falha ao conectar. Verifique se o Node.js está rodando (npm start).');
    }
});