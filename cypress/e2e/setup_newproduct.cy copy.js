/// <reference types="cypress" />
const { constant } = require('cypress/types/lodash');
var faker = require('faker-br');
var randomCnpj = faker.br.cnpj();
// var randomcpf = faker.br.cpf();
constant var randomCnpj

beforeEach(() => {
    cy.visit('http://localhost:2647/Account/LogOn')
    cy.get(':nth-child(2) > .col-md-8 > .form-control').type('11112852921')
    cy.get('.btn-primary').click()
});

it.only('1º fase - Deve efetuar um cadastro de cliente/transportadora novo', () => {
    cy.visit('http://localhost:2647/Admin/Cadastros/NovoCadastro')
    cy.get('#cnpj_Textbox').type(randomCnpj)
    cy.get('#cpf_Textbox').type(67040371014)
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
    const randomCNPJ = Cypress.faker.br.cnpj ()
    cy.visit('http://localhost:2647/MeusProdutos/AdicionaValePedagioParceiro')
    cy.get('#DocumentoCliente').type(constant var randomCnpj)
    cy.wait(1000)
    cy.get('.active > a').click()
    cy.get('#Modalidade').select('Pré Pago')
    cy.get('#tagFechamento').type('D+3')
    cy.get('#valorMensalidade').type('100,00')
    cy.get('#taxa').type('50,00')
    cy.get('#default_label > .btn-info').click()
    cy.get('#formMessagesDialog > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    // cy.get(':nth-child(2) > :nth-child(4) > .btn').click()

});












