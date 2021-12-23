const ANIMATION_DURATION_IN_MS = 800
const bubbleContInfo = (language) => {

  const successMessages = {
    ru: 'Успех!' + '\n' + 'Совсем скоро мы с вами свяжемся.',
    en: 'Success!' + '\n' + 'We will contact you soon'
  }

  step('Hide the cookie plate', () => {
    browser
      .click('div.css-tq6n8v.e1foxtb90 > button')
  })

  step('Move to the bubble in the end of page', () => {
    browser.moveToElement('[data-testid="projects:button.contactUs"]', 50, 50)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('Click on the bubble', () => {
    browser.click('[data-testid="projects:button.contactUs"]')
      .waitForElementPresent('[data-testid="ContactModal:block"]')

  })

  step('Fill out the form', () => {
    browser
      .setValue(
        '[data-testid="contact-modal:field:callbackForm.name"]',
        'Auto Test-Bubble'
      )
      .setValue(
        '[data-testid="contact-modal:field:callbackForm.phone"]',
        '+7 012 345-67-89'
      )
      .setValue(
        '[data-testid="contact-modal:field:callbackForm.email"]',
        'test@csssr.io'
      )
      .setValue(
        '[data-testid="contact-modal:field:callbackForm.message"]',
        'This is a test request sent from the contact form in the bubble.'
      )
  })

  step('Click the submit form button', () => {
    browser.click('[data-testid="contact-modal:button.callbackForm.submit"]')
  })

  expected('The message of success has appeared', () => {
    browser
      .waitForElementPresent('[data-testid="ContactModal:text.success"]')
    browser.expect.element(
      '[data-testid="ContactModal:img.success"]'
    ).to.be.present
    browser.expect.element('[data-testid="ContactModal:text.success"]')
      .text.to.equal(successMessages[language])
  })

  step('Close the modal form', () => {
    browser.click('[data-testid="modalForm:button:closeModal"]')
  })

  expected('The modal form are closed', () => {
    browser.waitForElementNotPresent('[data-testid="ContactModal:block"]')
  })
}

module.exports = { bubbleContInfo }
