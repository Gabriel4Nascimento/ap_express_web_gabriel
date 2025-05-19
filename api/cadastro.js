export default async function handler(req, res) {
  if (req.method === 'POST') {
    const bodyText = await req.text();
    const params = new URLSearchParams(bodyText);

    const dados = {
      nome: params.get('nome'),
      idade: params.get('idade'),
      email: params.get('email'),
      telefone: params.get('telefone'),
      endereco: params.get('endereco'),
      cargo: params.get('cargo'),
      setor: params.get('setor'),
      experiencia: params.get('experiencia')
    };

    if (!dados.nome || !dados.email || !dados.cargo) {
      return res.status(400).send("Campos obrigatórios ausentes.");
    }

    const mensagem = `
      <h2>Cadastro Recebido com Sucesso!</h2>
      <p><strong>Nome:</strong> ${dados.nome}</p>
      <p><strong>Idade:</strong> ${dados.idade}</p>
      <p><strong>Email:</strong> ${dados.email}</p>
      <p><strong>Telefone:</strong> ${dados.telefone}</p>
      <p><strong>Endereço:</strong> ${dados.endereco}</p>
      <p><strong>Cargo:</strong> ${dados.cargo}</p>
      <p><strong>Setor:</strong> ${dados.setor}</p>
      <p><strong>Experiência:</strong> ${dados.experiencia} anos</p>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(mensagem);
  } else {
    res.status(405).send("Método não permitido");
  }
}