# Testes API - EBAC
### Exercício para os alunos de Qualidade de software da EBAC 

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/EBAC-QE/testes-api-cy.git
```
```
cd testes-api-cy
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para subir o servidor:
```
npm start
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.

#### Para criar o relatório do mocha:
```
npm run cy:run
```

```
npm run cy:report 
```

### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/


### Bom exercício ;) 
Fábio & José Ernesto
Qualidade de software




