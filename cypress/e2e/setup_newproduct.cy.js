/// <reference types="cypress" />
var faker = require("faker-br");
var randomCnpj = faker.br.cnpj();
// var randomcpf = faker.br.cpf();

beforeEach(() => {
  cy.visit("http://localhost:2647/Account/LogOn");
  cy.get(":nth-child(2) > .col-md-8 > .form-control").type("11112852921");
  cy.get(".btn-primary").click();
});

it.only("1º fase - Deve efetuar um cadastro de cliente/transportadora novo", () => {
  cy.visit("http://localhost:2647/Admin/Cadastros/NovoCadastro");
  cy.get("#cnpj_Textbox").type(randomCnpj);
  cy.get("#cpf_Textbox").type(67040371014);
  // cy.get('#TipoCadastro').select('Transportadora')
  // cy.get('.col-md-12 > .btn').click()
  // cy.get('#Nome').type('CLIENTE TESTE PILOTO')
  // cy.get('#InscricaoEstadual').type('Isento')
  // cy.get('#Apelido').type('CLIENTE TESTE PILOTO')
  // cy.get('#EMail').type('a@a.a')
  // cy.get('#Integrador').select('MACHADO / MACHADO TECHPOWER INTEGRAÇÃO')
  // cy.get('#Endereco_Rua').type('Rua')
  // cy.get('#Endereco_Numero').type(1)
  // cy.get('#Endereco_Complemento').type('Complemento')
  // cy.get('#Endereco_Bairro').type('Bairro')
  // cy.get('#Endereco_CEP').type(88303530)
  // cy.get('#Endereco_Municipio_CodigoIBGE').click().type('Itajai').click()
  // cy.get('.active > a > :nth-child(1)').click()
  // cy.get('#Alterar_Senha').select('Não')
  // cy.get(':nth-child(13) > :nth-child(3) > .btn').click()
  // cy.get('#formMessagesDialog > .modal-dialog > .modal-content > .modal-footer > .btn').click()
});

it('2º fase - Deve Adicionar Produto Vale Pedagio Parceiro + criar "Notificar remessa de crédito', () => {
  function DataAtual() {
    const dataAtual = new Date();
  }
  cy.visit("http://localhost:2647/MeusProdutos/AdicionaValePedagioParceiro");
  cy.get("#DocumentoCliente").type(randomCnpj);
  cy.wait(1000);
  cy.get(".active > a").click();
  cy.get("#Modalidade").select("Pré Pago");
  cy.get("#tagFechamento").type("D+3");
  cy.get("#valorMensalidade").type("100,00");
  cy.get("#taxa").type("50,00");
  cy.get("#default_label > .btn-info").click();
  cy.get(
    "#formMessagesDialog > .modal-dialog > .modal-content > .modal-footer > .btn"
  ).click();
  cy.get(":nth-child(2) > :nth-child(4) > .btn").click();
  cy.get("#TomadorAutoComplete").type(randomCnpj);
  cy.wait(1000);
  cy.get(".active > a").click();
  cy.get("#ProdutoModalidadeSelecionado").select(
    "Vale-Pedágio Parceiro modalidade Pré Pago"
  );
  cy.get(":nth-child(3) > .form-group > .form-control").type("a@a.a");
  cy.get(":nth-child(4) > .form-group > .form-control").type("a@a.a");
  cy.get(".col-sm-12 > .form-group > .btn").click();
  cy.get("#ValorRemessaInformado").type("2000,00");
  cy.get("#DataDeEfetivacaoString").click();
  cy.wait(2000);
  cy.get("#DataDeEfetivacaoString").click().type("24/02/2023");
  cy.get(":nth-child(4) > .active").click();
  cy.get("#ContaSelecionada").select(
    "Correntista: IPC Instituição de Pagamento S.A. CNPJ: 01.648.418/0001-72 _ Banco: 102-XP Investimentos Corretora de Câmbio Títulos e Valores Mobiliários S.A. Ag.: 77 Conta Corrente: 7777-7"
  );
  cy.get('[value="Concluir"]').click();
  cy.get(
    "#formMessagesDialog > .modal-dialog > .modal-content > .modal-footer > .btn"
  ).click();
});
