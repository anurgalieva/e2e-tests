const callbackForm = require('../selectors/callbackForm.js')
const QUERY_TIME = 60000
const modalContInfoEn = () => {

  step('fill out the form', () => {
    browser
      .moveToElement(
        callbackForm.tagEn.development, 1, 1
      )
      .mouseButtonClick(
        callbackForm.tagEn.development
      )
      .setValue(
        callbackForm.field.name,
        'Auto Test-Modal En'
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
    browser.expect.element(callbackForm.text.success).text.to.equal('Success!')
    browser.expect.element(callbackForm.text.description).text.to.equal('We will contact you soon')
  })

  step('Close the modal form', () => {
    browser.click(callbackForm.button.closed)
  })

  expected('The modal form are closed', () => {
    browser.waitForElementNotPresent(callbackForm.button.closed)
  })
}


module.exports = { modalContInfoEn }
