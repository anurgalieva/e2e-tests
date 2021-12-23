const footer = require('../selectors/footer.js')

function switchLanguage() {
  step('Сlicked on the button to change the language.', () => {
    browser
      .click(footer.link.languageLink)
  })
}

module.exports = { switchLanguage }
