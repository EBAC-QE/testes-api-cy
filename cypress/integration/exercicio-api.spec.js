/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import contrato from '../contracts/usuarios.contract'


describe('Testes da Funcionalidade Usuários', () => {
     let token
     before(() => {
         cy.token('Yukio@qa.com.br', '1234').then(tkn => { token = tkn })
     });

    it('Deve validar contrato de usuários', () => {
     cy.request('usuarios').then(response => {
          return contrato.validateAsync(response.body)
      })
    });

    it('Deve listar usuários cadastrados', () => {
     cy.request({
          method: 'GET',
          url: 'usuarios'
      }).then((response) => {
          expect(response.status).to.equal(200)
          expect(response.body).to.have.property('usuarios')
          expect(response.duration).to.be.lessThan(20)
      }) 
    });

    it('Deve cadastrar um usuário com sucesso', () => {
     let usuario = `Usuario ${Math.floor(Math.random() * 100000000)}`
     cy.request({
         method: 'POST',
         url: 'usuarios',
         body: {
             "nome": usuario,
             "email": faker.internet.email(),
             "password": "1234",
             "administrador": "true"
         }
     }).then((response) => {
          expect(response.status).to.equal(201)
      })
         
     })
    });

    it('Deve validar um usuário com email inválido', () => {
     cy.CadastrarUsuario('Renan', 'rnaoka@gmail.com' , '1234', 'true')  .then((response) => {
          expect(response.status).to.equal(400)
      })
    });

    it('Deve editar um usuário previamente cadastrado', () => {
     cy.request('usuarios').then(response => {
          let id = response.body.usuarios[0]._id
          cy.request({
              method: 'PUT', 
              url: `usuarios/${id}`,
              body: 
              {
                    "nome": "Alan Yukio",
                    "email": "Yukio@qa.com.br",
                    "password": "1234",
                    "administrador": "true"
              }
          }).then(response => {
              expect(response.body.message).to.equal('Registro alterado com sucesso')
          })
      })
    });

    it('Deve deletar um usuário previamente cadastrado', () => {
     let usuario = faker.animal.bird()
     let email = faker.internet.email()

     cy.CadastrarUsuario(usuario, email, "12345", 'true')
     .then(response => {
         let id = response.body._id
         cy.request({
             method: 'DELETE',
             url: `usuarios/${id}`
         })
         })
     });