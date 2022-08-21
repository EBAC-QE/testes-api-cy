# Testes API - EBAC
### Exercício de Qualidade de software da EBAC 

## Clonando e executando em sua máquina

### Pré-requisito:

- Node.js - Você encontra em: https://nodejs.org/en/

- Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

## Instruções:

#### Garfar o repositório

Via terminal, rode os seguintes comandos:

#### Clonar do seu repositório
```
 git clone https://github.com/seurepositorio/testes-api-cy.git 
```
#### Entrar na pasta
```
cd testes-api-cy
```
#### Abrir localhost
```
 npx serverest
 ```
#### Gerar dados randômicos
```
node
```
```
Math.floor(Math.random()* númeroquedeseja)
```
#### Instalar as dependências
cypress -D, joi, mocha, mochawesome, mochawesome-merge, mochawesome-report-generator, cypress-multi-reporters
```
npm install 
// 
```
#### Para subir o servidor
```
npm start
```
#### Para executar em moodo Headlesss via console
```
npx cypress run
```
#### Para executar via Dashboard
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.

#### Para criar o relatório do mocha
```
npm run cy:run
```
```
npm run cy:report 
```
### Bibliotecas de apoio
-Cypress: Framework de automação: https://cypress.io/
