const app = require('express')();
const bodyParser = require('body-parser');
const PORTA = process.env.PORT || 8080;
// Cria um servidor HTTP e uma escuta de requisições para a porta 8080

app.use(bodyParser.json());
//lista de alunos
let alunos = [
    {codigo:1, nome: 'Percival Silva', telefone: '53981560355'},
    {codigo:2, nome: 'Maiara Diniz', telefone: '53981560356'},
    {codigo:3, nome: 'Carlos Luz', telefone: '53981560357'},
    {codigo:4, nome: 'Isadora Pascoal', telefone: '53981560358'},
]

/**
 * Retorna todos alunos em json
 */
app.get('/alunos', (request, response) => response.json(alunos))

/**
 * Buscar UM único recurso
 */
app.get('/alunos/:codigo', (request, response) =>
response.json(alunos.filter(value => value.codigo == request.params.codigo)))

/**
 * Inserir dados no servidor - BD
 */
app.post('/alunos', (request, response) =>{
    const aluno = request.body;
    alunos.push(aluno);
    response.json(aluno);
})

app.listen(PORTA,'localhost',()=>{
    console.log('Servidor de pé em http://localhost:8080');
    console.log('Para desligar o servidor: Crtl + c');
   })