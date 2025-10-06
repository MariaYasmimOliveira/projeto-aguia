const express = require('express');
const path = require('path');
const db = require('./db'); // Importa o módulo de conexão com o PostgreSQL
const app = express();
const port = 3000;

// ===================================================
// CONFIGURAÇÕES (MIDDLEWARE)
// ===================================================

// Habilita o servidor a entender dados JSON enviados no corpo das requisições
app.use(express.json()); 

// Serve seus arquivos estáticos (HTML, CSS, JS) que devem estar na pasta 'front-end'
// Usamos 'front-end' em minúsculo por boa prática.
app.use(express.static(path.join(__dirname, 'Front-end'))); 

// ===================================================
// ROTAS DE API (Inscrições)
// ===================================================

// ROTA POST: Inscrição de Alunos
// URL: http://localhost:3000/api/inscricao/aluno
app.post('/api/inscricao/aluno', async (req, res) => {
    // Campos esperados: nome_aluno, telefone, data_nascimento, instrumento_interesse
    const { nome_aluno, telefone, data_nascimento, instrumento_interesse } = req.body;
    
    // Validação básica do campo obrigatório (Nome do Aluno)
    if (!nome_aluno) {
        return res.status(400).send('O nome do aluno é obrigatório.');
    }
    
    try {
        const text = `
            INSERT INTO alunos (nome_aluno, telefone, data_nascimento, instrumento_interesse)
            VALUES ($1, $2, $3, $4) RETURNING *
        `;
        const values = [nome_aluno, telefone, data_nascimento, instrumento_interesse];
        
        const result = await db.query(text, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        // CORREÇÃO CRÍTICA: Agora o erro exato do PostgreSQL será registrado
        console.error("ERRO CRÍTICO NA INSCRIÇÃO DE ALUNO:", err); 
        res.status(500).send('Erro ao finalizar a inscrição do aluno. Detalhes no terminal do servidor.');
    }
});

// ROTA POST: Inscrição de Monitores
// URL: http://localhost:3000/api/inscricao/monitor
app.post('/api/inscricao/monitor', async (req, res) => {
    // Campos esperados: nome_monitor, telefone, data_nascimento, area_interesse
    const { nome_monitor, telefone, data_nascimento, area_interesse } = req.body;
    
    // Validação básica do campo obrigatório (Nome do Monitor)
    if (!nome_monitor) {
        return res.status(400).send('O nome do monitor é obrigatório.');
    }
    
    try {
        const text = `
            INSERT INTO monitores (nome_monitor, telefone, data_nascimento, area_interesse)
            VALUES ($1, $2, $3, $4) RETURNING *
        `;
        const values = [nome_monitor, telefone, data_nascimento, area_interesse];
        
        const result = await db.query(text, values);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        // CORREÇÃO CRÍTICA: Agora o erro exato do PostgreSQL será registrado
        console.error("ERRO CRÍTICO NA INSCRIÇÃO DE MONITOR:", err);
        res.status(500).send('Erro ao finalizar a inscrição do monitor. Detalhes no terminal do servidor.');
    }
});


// ===================================================
// INICIALIZAÇÃO DO SERVIDOR
// ===================================================

app.listen(port, () => {
    console.log(`Servidor Node.js rodando em http://localhost:${port}`);
});