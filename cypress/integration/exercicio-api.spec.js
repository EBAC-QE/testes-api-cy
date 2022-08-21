/// <reference types="cypress" />
import contrato from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {

     it('Deve validar contrato de usuários', () => {
          cy.request('usuario').then(response => {
               return contrato.validateAsync(response.body)
          })
     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios'
          }).then((rsponse) => {
               expect(response.body.usuario[2].nome).to.equal('Larissa Gottschall')
               expect(response.status).to.equal(200)
               expect(response.body).to.have.property('usuarios')
               expect(response.duration).to.be.lessThan(20)
          })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          let usuario = `Pessoa ${Math.floor(Math.random() * 100)}`
          cy.request({
               method: 'POST',
               url: 'usuarios',
               body: {
                    "nome": usuario,
                    "email": email,
                    "password": senha,
                    "administrador": adm
               }
          }).then((response) => {
               expect(response.status).to.equal(201)
               expect(response.body.message).to.equal('Cadastro realizado com sucesso')
          })
     });

     it('Deve validar um usuário com email inválido', () => {
          cy.cadastrarUsuario("Usuario", "email.com", "teste", "true")
               .then((response) => {
                    expect(response.status).to.equal(400)
                    expect(response.body.message).to.equal('Este email já está sendo usado')
               })
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          let usuario = `Usuario ${Math.floor(Math.random() * 100)}`
          cy.cadastrarUsuario("Usuario", "email.com", "teste", "true")
               .then(response => {
                    let id = response.body._id
                    cy.request({
                         method: 'PUT',
                         url: `usuario/${id}`,
                         body:
                         {
                              "nome": "usuario A",
                              "email": email,
                              "password": "testeA",
                              "administrador": "true"
                         }
                    }).then(response => {
                         expect(response.body.message).to.equal('Registro alterado com sucesso')
                         expect(response.status).to.equal(200)
                    })
               })
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          let usuario = `Usuario ${Math.floor(Math.random() * 100)}`
          cy.cadastrarProduto("Usuario", "email.com", "teste", "true")
               .then(response => {
                    let id = response.body._id
                    cy.request({
                         method: 'DELETE',
                         url: `usuarios/${id}`,
                    }).then(response => {
                         expect(response.body.message).to.equal('Registro excluído com sucesso')
                         expect(response.status).to.equal(200)
                    })
               })
     });
});
