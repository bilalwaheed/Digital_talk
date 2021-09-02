/// <reference types="cypress"/>

// const cypress = require("cypress")

describe('example to-do app', () => {

    // it('first', () => {
    //     cy.visit('https://ct.digitaltolk.se/')
    //     cy.get('.home-page__banner-content').find('h1').should('have.text', ' Välkommen till Sveriges snabbaste tolkförmedling ')
    //   })

      it('second', () => {
        cy.visit('https://ct.digitaltolk.se/')
        cy.get('div#app')
        // cy.get('div[class=el-select language-menu]')
        // cy.contains('VÄLKOMMEN TILL SVERIGES SNABBASTE TOLKFÖRMEDLING')
        // cy.get('a .app-button-primary-o home-page__banner-action-login').click()
      })

  })
  