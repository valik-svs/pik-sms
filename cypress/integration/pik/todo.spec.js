/// <reference types="cypress" />
import * as s from '../../../cypress/test_data/selectors/login_form'

describe('Check SMS verification form', () => {
  beforeEach(() => {
    cy.visit('')
    cy.get(s.btn_oauth).click()
    cy.get(s.input_phone_number).type('0000000000')
    cy.get(s.button_get_code).click()
    cy.get(s.sms_block).should('be.visible')
  })
  
  it('Make sure that under input field displayed entered phone number', () => {
    cy.get(s.p_phone_number).should('have.text','+7(000) 000-00-00')
  })

  it('Make sure that validation error is displayed for invalid SMS-code', () => {
    cy.get(s.input_sms_code).type('0000')
    cy.get(s.validation_input_sms_code)
    .should('have.text','Код неверен, попробуйте ещё раз')
  })

  it('Check that only numeric characters can be entered in code input field', () => {
    cy.get(s.input_sms_code).type('as!@')
    cy.get(s.inputs_sms_code).should('be.empty')
  })

  it('Check that "Change phone number" button redirects to login page', () => {
    cy.contains('Изменить номер телефона').click()
    cy.get(s.input_phone_number)
    .should('contain.value','+7(000) 000-00-00')
  })

})
