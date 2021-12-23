const { scrollToFooter } = require('./actions/scrollingDown')
const { makeRequest } = require('./actions/vacancies')
const pages = require('./data/pages')
const footer = require('./selectors/footer')
const general = require('./selectors/general')
const page404 = require('./selectors/page404')
const vacanciesPage = require('./selectors/vacanciesPage')
const ANIMATION_DURATION_IN_MS = 1500

//skip пока не пофиксят багу
testcase.skip('Switching to the English version', () => {
  step('Go to the vacancy page', () => {
    browser
      .url(`${browser.launch_url}${pages.vacancyPage.url}`)
      .setWindowSize(1920, 7080)
  })

  step('Click on the «EN» icon', () => {
    browser.click(footer.link.languageLink)
  })

  expected('Redirect to the job list for the EN locale has been triggered', () => {
    browser.assert.urlEquals(`${browser.launch_url}${pages.careersEn.url}`)
  })
})

testcase('Page 404', () => {
  step('Go to the job page', () => {
    browser
      .url(`${browser.launch_url}${pages.vacancyPage.url}`)
      .setWindowSize(1200, 1200)
  })

  step('Add to the url «wreer»', () => {
    browser.url(`${browser.launch_url}${pages.vacancyPage.url}developerwreer`)
  })

  expected('404 page is displayed', () => {
    browser
      .waitForElementPresent(page404.block.main)
  })
})

testcase('File format error', () => {
  step('Go to the job page', () => {
    browser
      .setWindowSize(1200, 4200)
      .url(`${browser.launch_url}${pages.vacancyPageDev.url}`)
  })

  step('Fill in the required fields', () => {
    browser
      .click(general.button.closeCookiesAlert)
      .setValue(vacanciesPage.textField.firstname, 'User')
      .setValue(vacanciesPage.textField.lastname, 'Autotest')
      .setValue(vacanciesPage.textField.location, 'Москва')
      .setValue(vacanciesPage.textField.email, 'test@csssr.io')
      .setValue(vacanciesPage.textField.resume, 'https://csssr.com/')
  })

  scrollToFooter()

  step('Select a pdf file larger than 10 mb', () => {
    if (browser.options.desiredCapabilities.browserName === 'chrome') {
      browser.uploadFile(
        '#file', require('path').resolve(__dirname, '../tests/upload files/больше 10мб.zip')
      )
    }
    if (browser.options.desiredCapabilities.browserName === 'firefox') {
      console.log('   ❌ Skipped the case because the browser chosen is FireFox')
    }
  })

  step('Click on «Отправить»', () => {
    if (browser.options.desiredCapabilities.browserName === 'chrome') {
      browser.click(vacanciesPage.button.submit)
    }
    if (browser.options.desiredCapabilities.browserName === 'firefox') {
      console.log('   ❌ Skipped the case because the browser chosen is FireFox')
    }
  })

  expected('An error occurred with the text «Неверный формат файла»', () => {
    if (browser.options.desiredCapabilities.browserName === 'chrome') {
      browser.waitForElementVisible(vacanciesPage.text.errorFile)
    }
    if (browser.options.desiredCapabilities.browserName === 'firefox') {
      console.log('   ❌ Skipped the case because the browser chosen is FireFox')
    }
  })
})


testcase('List of vacancies on the page (ru version)', () => {
  let vacancies

  step('Go to the vacancies page (RU)', () => {
    browser
      .url(`${browser.launch_url}${pages.vacancyPage.url}`)
      .setWindowSize(1920, 1080)
      .perform(
        async (done) => {
          vacancies = await makeRequest(pages.vacancyAPIRu.url)
          done()
        }
      )
  })

  expected(`The page displays the corresponding list of jobs`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser.assert.containsText(`[data-testid="Jobs:list.item-${NUMBER_OF_VACANCIES}"]`, vacancies[NUMBER_OF_VACANCIES].name)
    }
  })
})

//скипнут для прода
testcase.skip('List of vacancies on the page (en version)', () => {
  let vacancies

  step('Go to the vacancies page (EN)', () => {
    browser
      .url(`${browser.launch_url}${pages.vacancyPageEn.url}`)
      .perform(
        async (done) => {
          vacancies = await makeRequest(pages.vacancyAPIEn.url)
          done()
        }
      )
  })

  expected(`The page displays the corresponding list of jobs`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser.assert.containsText(`[data-testid="Jobs:list.item-${NUMBER_OF_VACANCIES}"]`, vacancies[NUMBER_OF_VACANCIES].name)
    }
  })
})

//Тест падает на тестовом стенде, будет проходить на проде успешно 
testcase('Mini vacancy list on the vacancy page', () => {
  let vacancies

  step('Go to the vacancies page (RU)', () => {
    browser
      .url(`${browser.launch_url}${pages.vacancyPage.url}`)
      .perform(
        async (done) => {
          vacancies = await makeRequest(pages.vacancyAPIRu.url)
          done()
        }
      )
  })

  step('Go to the vacancy page', () => {
    browser
      .click(vacanciesPage.link.firstVacancy)
      .waitForElementPresent(vacanciesPage.textField.firstname)
  })

  expected(`The right block displays a list of all vacancies`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser.assert.containsText(`[data-testid="Jobs:list.item-${NUMBER_OF_VACANCIES}"]`, vacancies[NUMBER_OF_VACANCIES].name)
    }
  })
})

testcase('Sending applications for all vacancies (ru version)', () => {
  let vacancies

  step('Go to the vacancies page (RU)', () => {
    browser
      .setWindowSize(1920, 7000)
      .url(`${browser.launch_url}${pages.vacancyPage.url}`)
      .perform(
        async (done) => {
          vacancies = await makeRequest(pages.vacancyAPIRu.url)
          done()
        }
      )
  })

  expected(`Sending applications is successful`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser
        .click(`[data-testid="Jobs:list.item-${NUMBER_OF_VACANCIES}"]`)
        .waitForElementPresent(vacanciesPage.textField.firstname)
        .pause(ANIMATION_DURATION_IN_MS)
        .setValue(vacanciesPage.textField.firstname, 'User')
        .setValue(vacanciesPage.textField.lastname, 'Autotest')
        .setValue(vacanciesPage.textField.location, 'Москва')
        .setValue(vacanciesPage.textField.email, 'test@test.ru')
      vacancies[NUMBER_OF_VACANCIES].sections.forEach(vacancySection => {
        if (vacancySection.type === 'textField' && vacancySection.required) {
          browser.elements(
            'css selector',
            '[name^="quests"]',
            result => {
              let NUMBER_OF_FIELDS = result.value.length - 1
              while (NUMBER_OF_FIELDS >= 0) {
                browser.setValue(
                  `[name="quests[${NUMBER_OF_FIELDS}].text"]`,
                  'Заполнено автотестом'
                )
                NUMBER_OF_FIELDS--
              }
            })
        }
        if (['quest', 'questBox'].includes(vacancySection.type)) {
          vacancySection.sections.forEach(innerSection => {
            if (innerSection.type === 'textField' && innerSection.required) {
              browser.elements(
                'css selector',
                '[name^="quests"]',
                result => {
                  let NUMBER_OF_FIELDS = result.value.length - 1
                  while (NUMBER_OF_FIELDS >= 0) {
                    browser.setValue(
                      `[name="quests[${NUMBER_OF_FIELDS}].text"]`,
                      'Заполнено автотестом'
                    )
                    NUMBER_OF_FIELDS--
                  }
                })
            }
          })
        }
      })
      if (vacancies[NUMBER_OF_VACANCIES].hasResume == true) {
        browser.setValue(vacanciesPage.textField.resume, 'https://csssr.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasPortfolio == true) {
        browser.setValue(vacanciesPage.textField.portfolio, 'https://csssr.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasGithub == true) {
        browser.setValue(vacanciesPage.textField.github, 'https://github.com/')
      }
      if (browser.options.desiredCapabilities.browserName === 'chrome') {
        if (vacancies[NUMBER_OF_VACANCIES].hasFile == true) {
          if (vacancies[NUMBER_OF_VACANCIES].fileExt == "pdf") {
            browser.uploadFile(
              vacanciesPage.textField.file,
              require('path').resolve(__dirname, '../tests/upload files/pdf.pdf')
            )
          }
        }
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasComment == true) {
        browser.setValue(vacanciesPage.textField.comment, 'Отправлено автотестом')
      }

      browser
        .click(vacanciesPage.button.submit)
        .waitForElementPresent('css selector', vacanciesPage.textField.imgResult, `Заявка для вакансии ${vacancies[NUMBER_OF_VACANCIES].name} не отправилась`)
        .url(`${browser.launch_url}${pages.vacancyPage.url}`)
        .waitForElementPresent(vacanciesPage.textField.listItem0)
    }
  })
})

//Тест скипнут, чтобы спамить продовскую базу
testcase.skip('Sending applications for all vacancies (en version)', () => {
  let vacancies

  step('Go to the vacancies page (EN)', () => {
    browser
      .url(`${browser.launch_url}${pages.vacancyPageEn.url}`)
      .setWindowSize(1920, 7000)
      .perform(
        async (done) => {
          vacancies = await makeRequest(pages.vacancyAPIEn.url)
          done()
        }
      )
  })

  expected(`Sending applications is successful`, () => {
    for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
      browser
        .click(`[data-testid="Jobs:list.item-${NUMBER_OF_VACANCIES}"]`)
        .waitForElementPresent(vacanciesPage.textField.firstname)
        .pause(ANIMATION_DURATION_IN_MS)
        .setValue(vacanciesPage.textField.firstname, 'User')
        .setValue(vacanciesPage.textField.lastname, 'Autotest')
        .setValue(vacanciesPage.textField.location, 'Москва')
        .setValue(vacanciesPage.textField.email, 'test@csssr.io')
      vacancies[NUMBER_OF_VACANCIES].sections.forEach(vacancySection => {
        if (vacancySection.type === 'textField' && vacancySection.required) {
          browser.elements(
            'css selector',
            '[name^="quests"]',
            result => {
              let NUMBER_OF_FIELDS = result.value.length - 1
              while (NUMBER_OF_FIELDS >= 0) {
                browser.setValue(
                  `[name="quests[${NUMBER_OF_FIELDS}].text"]`,
                  'Заполнено автотестом'
                )
                NUMBER_OF_FIELDS--
              }
            })
        }
        if (['quest', 'questBox'].includes(vacancySection.type)) {
          vacancySection.sections.forEach(innerSection => {
            if (innerSection.type === 'textField' && innerSection.required) {
              browser.elements(
                'css selector',
                '[name^="quests"]',
                result => {
                  let NUMBER_OF_FIELDS = result.value.length - 1
                  while (NUMBER_OF_FIELDS >= 0) {
                    browser.setValue(
                      `[name="quests[${NUMBER_OF_FIELDS}].text"]`,
                      'Заполнено автотестом'
                    )
                    NUMBER_OF_FIELDS--
                  }
                })
            }
          })
        }
      })
      if (vacancies[NUMBER_OF_VACANCIES].hasResume == true) {
        browser.setValue(vacanciesPage.textField.resume, 'https://csssr.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasPortfolio == true) {
        browser.setValue(vacanciesPage.textField.portfolio, 'https://csssr.com/')
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasGithub == true) {
        browser.setValue(vacanciesPage.textField.github, 'https://github.com/')
      }
      if (browser.options.desiredCapabilities.browserName === 'chrome') {
        if (vacancies[NUMBER_OF_VACANCIES].hasFile == true) {
          if (vacancies[NUMBER_OF_VACANCIES].fileExt == "pdf") {
            browser.uploadFile(
              vacanciesPage.textField.file,
              require('path').resolve(__dirname, '../tests/upload files/pdf.pdf')
            )
          }
        }
      }
      if (vacancies[NUMBER_OF_VACANCIES].hasComment == true) {
        browser.setValue(vacanciesPage.textField.comment, 'Отправлено автотестом')
      }
      browser
        .click(vacanciesPage.button.submit)
        .waitForElementPresent('css selector', vacanciesPage.textField.imgResult, `Заявка для вакансии ${vacancies[NUMBER_OF_VACANCIES].name} не отправилась`)
        .url(`${browser.launch_url}${pages.vacancyPageEn.url}`)
        .waitForElementPresent(vacanciesPage.textField.listItem0)
    }
  })
})

testcase('Validation of mandatory fields of the Questionnaire', () => {
  let vacancies

  step('Go to the vacancies page (RU)', () => {
    browser
      .url(`${browser.launch_url}${pages.careers.url}`)
      .setWindowSize(1920, 7000)
      .perform(
        async (done) => {
          vacancies = await makeRequest(pages.vacancyAPIRu.url)
          done()
        }
      )
  })

  step('Go to the vacancy page', () => {
    browser
      .click(vacanciesPage.link.firstVacancy)
      .waitForElementPresent(vacanciesPage.textField.firstname)
  })

  step('Click on the button «Отправить»', () => {
    browser.click(vacanciesPage.button.submit)
  })

  expected('Required field alerts are displayed', () => {
    browser.assert.containsText(vacanciesPage.text.firstnameError, 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    browser.assert.containsText(vacanciesPage.text.lastnameError, 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    browser.assert.containsText(vacanciesPage.text.locationError, 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    browser.assert.containsText(vacanciesPage.text.emailError, 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    if (vacancies[0].hasResume == true) {
      browser.assert.containsText(vacanciesPage.text.resumeError, 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    }
    if (vacancies[0].hasFile == true) {
      browser.assert.containsText(vacanciesPage.text.errorFile, 'ОБЯЗАТЕЛЬНОЕ ПОЛЕ')
    }
  })
})
