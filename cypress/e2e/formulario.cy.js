const faker = require('faker-br');
// const { it } = require('faker-br/lib/locales');

describe('Form Basic filled', () => {
  beforeEach('', () => {
    cy.visit('../../dev/index.html')

    //validação Gui
    //titulo e subtitulo
    cy.get('[data-cy="tituloLogin"]').contains('Login Sistema Tester');
    cy.get('[data-cy="subtituloLogin"]').contains('Faça login com suas credenciais');

    //css e html do formulário
    cy.get('[data-cy="nomeTexto"]').contains('Nome');
    cy.get('[data-cy="sobrenomeTexto"]').contains('Sobrenome');
    cy.get('[data-cy="emailTexto"]').contains('Email');
    cy.get('[data-cy="perguntaLinguagens"]').contains('De qual lado da aplicação você automatiza?');
    cy.get('[data-cy="textoCypress"]').contains('Cypress.io');
    cy.get('[data-cy="textoAppium"]').contains('Appium');
    cy.get('[data-cy="textoSelenium"]').contains('Selenium');
    cy.get('[data-cy="Fullstack"]').contains('Fullstack');

    //validação dos inputs
    cy.get('[data-cy="inputNome"]').should('be.empty');
    cy.get('[data-cy="inputSobreNome"]').should('be.empty');
    cy.get('[data-cy="inputEmail"]').should('be.empty');

    cy.get('[data-cy="radioAppium"]').should('not.be.checked');
    cy.get('[data-cy="radioSelenium"]').should('not.be.checked');
    cy.get('[data-cy="radioFullstack"]').should('not.be.checked');

    //valdiação button
    cy.get('[data-cy="botaoConcluir"]').should('be.enabled');

  });

  //fluxos principais
  it('Cadastro válido Cypress.io', () => {
    let randomName = faker.name.firstName();
    let randomLastName = faker.name.lastName();
    let randomEmail = faker.internet.email();
    cy.get('[data-cy="inputNome"]').type(randomName, { delay: 0 });
    cy.get('[data-cy="inputNome"]').should('have.value', randomName);

    cy.get('[data-cy="inputSobreNome"]').type(randomLastName, { delay: 0 });
    cy.get('[data-cy="inputSobreNome"]').should('have.value', randomLastName);

    cy.get('[data-cy="inputEmail"]').type(randomEmail, { delay: 0 });
    cy.get('[data-cy="inputEmail"]').should('have.value', randomEmail);

    cy.wait(2000);

    //antes de enviar
    cy.screenshot('antesDeEnviar-Cypress');

    //act
    cy.get('[data-cy="botaoConcluir"]').click();


    //deepois de denviar
    cy.screenshot('depoisDeEnviar-Cypress');

  });

  it('Cadastro válido Appium', () => {
    let randomName = faker.name.firstName();
    let randomLastName = faker.name.lastName();
    let randomEmail = faker.internet.email();
    cy.get('[data-cy="inputNome"]').type(randomName, { delay: 0 });
    cy.get('[data-cy="inputNome"]').should('have.value', randomName);

    cy.get('[data-cy="inputSobreNome"]').type(randomLastName, { delay: 0 });
    cy.get('[data-cy="inputSobreNome"]').should('have.value', randomLastName);

    cy.get('[data-cy="inputEmail"]').type(randomEmail, { delay: 0 });
    cy.get('[data-cy="inputEmail"]').should('have.value', randomEmail);

    cy.get('[data-cy="radioAppium"]').check();

    cy.wait(2000);

    //antes de enviar
    cy.screenshot('antesDeEnviar-Appium');

    //act
    cy.get('[data-cy="botaoConcluir"]').click();


    //deepois de denviar
    cy.screenshot('depoisDeEnviar-Appium');

  });

  it('Cadastro válido Selenium', () => {
    let randomName = faker.name.firstName();
    let randomLastName = faker.name.lastName();
    let randomEmail = faker.internet.email();
    cy.get('[data-cy="inputNome"]').type(randomName, { delay: 0 });
    cy.get('[data-cy="inputNome"]').should('have.value', randomName);

    cy.get('[data-cy="inputSobreNome"]').type(randomLastName, { delay: 0 });
    cy.get('[data-cy="inputSobreNome"]').should('have.value', randomLastName);

    cy.get('[data-cy="inputEmail"]').type(randomEmail, { delay: 0 });
    cy.get('[data-cy="inputEmail"]').should('have.value', randomEmail);

    cy.get('[data-cy="radioSelenium"]').check();

    cy.wait(2000);

    //antes de enviar
    cy.screenshot('antesDeEnviar-Selenium');

    //act
    cy.get('[data-cy="botaoConcluir"]').click();


    //deepois de denviar
    cy.screenshot('depoisDeEnviar-Selenium');

  });

  it('Cadastro válido Fullstack', () => {
    let randomName = faker.name.firstName();
    let randomLastName = faker.name.lastName();
    let randomEmail = faker.internet.email();
    cy.get('[data-cy="inputNome"]').type(randomName, { delay: 0 });
    cy.get('[data-cy="inputNome"]').should('have.value', randomName);

    cy.get('[data-cy="inputSobreNome"]').type(randomLastName, { delay: 0 });
    cy.get('[data-cy="inputSobreNome"]').should('have.value', randomLastName);

    cy.get('[data-cy="inputEmail"]').type(randomEmail, { delay: 0 });
    cy.get('[data-cy="inputEmail"]').should('have.value', randomEmail);

    cy.get('[data-cy="radioFullstack"]').check();

    cy.wait(2000);

    //antes de enviar
    cy.screenshot('antesDeEnviar-Fullstack');

    //act
    cy.get('[data-cy="botaoConcluir"]').click();


    //deepois de denviar
    cy.screenshot('depoisDeEnviar-Fullstack');

  });

  //fluxos excessão

  it('Nome null', () => {
    let randomLastName = faker.name.lastName();
    let randomEmail = faker.internet.email();

    cy.get('[data-cy="inputNome"]').should('have.value', '');

    cy.get('[data-cy="inputSobreNome"]').type(randomLastName, { delay: 0 });
    cy.get('[data-cy="inputSobreNome"]').should('have.value', randomLastName);

    cy.get('[data-cy="inputEmail"]').type(randomEmail, { delay: 0 });
    cy.get('[data-cy="inputEmail"]').should('have.value', randomEmail);

    cy.wait(2000);

    //antes de enviar
    cy.screenshot('antesDeEnviar-nome-null');

    //act
    cy.get('[data-cy="botaoConcluir"]').click();


    //deepois de denviar
    cy.screenshot('depoisDeEnviar-nome-null');

  });

  it('Sobrenome Null', () => {
    let randomName = faker.name.firstName();
    let randomEmail = faker.internet.email();
    cy.get('[data-cy="inputNome"]').type(randomName, { delay: 0 });
    cy.get('[data-cy="inputNome"]').should('have.value', randomName);

    cy.get('[data-cy="inputSobreNome"]').should('have.value', '');

    cy.get('[data-cy="inputEmail"]').type(randomEmail, { delay: 0 });
    cy.get('[data-cy="inputEmail"]').should('have.value', randomEmail);


    cy.wait(2000);

    //antes de enviar
    cy.screenshot('antesDeEnviar-sobrenome-null');

    //act
    cy.get('[data-cy="botaoConcluir"]').click();


    //deepois de denviar
    cy.screenshot('depoisDeEnviar-sobrenome-null');

  });

  it('Email null', () => {
    let randomName = faker.name.firstName();
    let randomLastName = faker.name.lastName();

    cy.get('[data-cy="inputNome"]').type(randomName, { delay: 0 });
    cy.get('[data-cy="inputNome"]').should('have.value', randomName);

    cy.get('[data-cy="inputSobreNome"]').type(randomLastName, { delay: 0 });
    cy.get('[data-cy="inputSobreNome"]').should('have.value', randomLastName);

    cy.get('[data-cy="inputEmail"]').should('have.value', '');

    cy.wait(2000);

    //antes de enviar
    cy.screenshot('antesDeEnviar-email-null');

    //act
    cy.get('[data-cy="botaoConcluir"]').click();


    //deepois de denviar
    cy.screenshot('depoisDeEnviar-email-null');

  });

  it('Todos dados null', () => {

    cy.get('[data-cy="inputNome"]').should('have.value', '');

    cy.get('[data-cy="inputSobreNome"]').should('have.value', '');

    cy.get('[data-cy="inputEmail"]').should('have.value', '');

    cy.wait(2000);

    //antes de enviar
    cy.screenshot('antesDeEnviar-tudo-null');

    //act
    cy.get('[data-cy="botaoConcluir"]').click();


    //deepois de denviar
    cy.screenshot('depoisDeEnviar-tudo-null');

  });


});

