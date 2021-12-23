const callbackForm = require('../selectors/callbackForm.js')
const QUERY_TIME = 60000
const modalContInfoRu = () => {

  step('fill out the form', () => {
    browser
      .moveToElement(
        callbackForm.tagRu.frontend, 1, 1
      )
      .mouseButtonClick(
        callbackForm.tagRu.frontend
      )
      .setValue(
        callbackForm.field.name,
        'Auto Test-Modal Ru'
      )
      .setValue(
        callbackForm.field.phone,
        '+7 012 345-67-89'
      )
      .setValue(
        callbackForm.field.email,
        'test@csssr.io'
      )
      .setValue(
        callbackForm.field.message,
        'This is a test request sent from the contact form in the modal.'
      )
  })

  step('click the submit form button', () => {
    browser.click(callbackForm.button.submit)
  })

  expected('the message of success has appeared', () => {
    browser.waitForElementPresent(callbackForm.text.success, QUERY_TIME)
    browser.expect.element(callbackForm.text.success).to.be.present
    browser.waitForElementPresent(callbackForm.text.description, QUERY_TIME)
    browser.expect.element(callbackForm.text.description).to.be.present
    browser.expect.element(callbackForm.text.success).text.to.equal('Успех!')
    browser.expect.element(callbackForm.text.description).text.to.equal('Совсем скоро мы с вами свяжемся.')
  })

  step('Close the modal form', () => {
    browser.click(callbackForm.button.closed)
  })

  expected('The modal form are closed', () => {
    browser.waitForElementNotPresent(callbackForm.button.closed)
  })
}

const сheckingHireUsForm = () => {
  expected('form is displayed correctly ', () => {
    browser
      .waitForElementPresent(callbackForm.button.closed)
      .waitForElementPresent(callbackForm.field.name)
      .waitForElementPresent(callbackForm.field.phone)
      .waitForElementPresent(callbackForm.field.email)
      .waitForElementPresent(callbackForm.field.message)
      .waitForElementPresent(callbackForm.button.submit)
  })
}


module.exports = { modalContInfoRu, сheckingHireUsForm }
