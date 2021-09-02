/// <reference types="cypress" />

describe('Digital_Tolk Test Cases', () => {

    it('TS-001 Visit Home Page', () => {
        cy.visit('https://ct.digitaltolk.se/')
        cy.contains('Logga in').eq(0).should('be.visible')
    })

    it('TS-002 Change Language Through Dropdown', () => {
        cy.get('.language-menu').should('be.visible').click()
        cy.contains('EN').should('be.visible').click()
        cy.contains('Log in').eq(0).should('be.visible')
    })

    it('TS-003 Click on login button', () => {
        cy.contains('Log in').eq(0).should('be.visible').click()
        cy.url().should('include', '/login')
    })

    it('TS-004 Login with invalid credentials', () => {
        cy.get('input[placeholder="Username"]').should('be.visible').type('username')
        cy.get('input[placeholder="Password"]').should('be.visible').type('password')
        cy.get('.login-form__login-button').should('be.visible').click()
        cy.get('div[role="alert"]').should('be.visible').and('contain', 'The user credentials were incorrect.')
    })

    it('TS-005 Login with valid credentials', () => {
        cy.get('input[placeholder="Username"]').should('be.visible').clear().type('uzmancustomer@dt.test')
        cy.get('input[placeholder="Password"]').should('be.visible').clear().type('Test123$')
        cy.get('.login-form__login-button').should('be.visible').click()
        cy.get('div[role="alert"]').should('not.be.visible')
        cy.url().should('not.contain', '/login')
    })

    it('TS-006 Window Confirmation Test Cases', () => {
      cy.contains('Confirmation').should('be.visible')
      cy.get('input[placeholder="Input Booker Name"]').should('be.visible').click().type('Bilal Test Booker').type('{enter}')
      cy.get('input[placeholder="Input Staff Name"]').should('be.visible').click().type('Bilal Test Staff').type('{enter}')
      cy.get('.booking-confirm-form__reference').should('be.visible').click().type('Reference of Bilal').type('{enter}')
      cy.get('textarea[rows]').should('be.visible').click().type('Test Notes').type('{enter}')
      cy.get('.booking-confirm-form__question-fields > div > div > div > label:nth-child(1)').eq(0).click()
      cy.get('.booking-confirm-form__question-fields > div > div > div > label:nth-child(1)').eq(1).click()
      cy.contains('Change').should('be.visible').click()
      cy.get('#google_address_autocomplete').should('be.visible').click().clear().type('Centralplan 15, 111 20 ', {delay: 100}).type('{downarrow}').type('{enter}')
      cy.get('.booking-confirm-form__instructions').should('be.visible').type('Test input for address')
      cy.contains('Create Booking').should('be.visible').click()
  })
})
  