const contInfo = (language) => {

  const successMessages = {
    ru: 'Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.',
    en: 'Success!' + '\n' + 'We will contact you soon'
  }

  step('Fill out the form', () => {
    browser.setValue('[data-testid="contact:field:callbackForm.name"]', 'Auto Test-Form')

      .setValue(
        '[data-testid="contact:field:callbackForm.phone"]',
        '+7 012 345-67-89'
      )
      .setValue(
        '[data-testid="contact:field:callbackForm.email"]',
        'test@csssr.io'
      )
      .setValue(
        '[data-testid="contact:field:callbackForm.message"]',
        'This is a test request sent from the contact form from the page'
      )
  })
  step('Click the submit form button', () => {
    browser.submitForm('form')
  })

  expected('The message of success has appeared', () => {
    browser
      .waitForElementPresent('[data-testid="contact:text.status"]')

    browser.expect.element('[data-testid="contact:button.callbackForm.submit"]')
      .to.be.present

    browser.expect.element('[data-testid="contact:picture.successMessageImg"]')
      .to.be.present

    browser.expect.element('[data-testid="contact:text.status"]')
      .text.to.equal(successMessages[language])
  })
}

module.exports = { contInfo }
