
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, idade, email, telefone, endereco, cargo, setor, experiencia } = req.body;

    if (!nome || !email || !cargo) {
      return res.status(400).send("Campos obrigatórios ausentes.");
    }

    const dados = {
      nome,
      idade,
      email,
      telefone,
      endereco,
      cargo,
      setor,
      experiencia,
    };

    const mensagem = \`
      <h2>Cadastro Recebido com Sucesso!</h2>
      <p><strong>Nome:</strong> \${dados.nome}</p>
      <p><strong>Idade:</strong> \${dados.idade}</p>
      <p><strong>Email:</strong> \${dados.email}</p>
      <p><strong>Telefone:</strong> \${dados.telefone}</p>
      <p><strong>Endereço:</strong> \${dados.endereco}</p>
      <p><strong>Cargo:</strong> \${dados.cargo}</p>
      <p><strong>Setor:</strong> \${dados.setor}</p>
      <p><strong>Experiência:</strong> \${dados.experiencia} anos</p>
    \`;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(mensagem);
  } else {
    res.status(405).send("Método não permitido");
  }
}
