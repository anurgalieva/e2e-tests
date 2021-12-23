const pages = require('./data/pages')
const header = require('./selectors/header.js')
const careersPage = require('./selectors/careersPage.js')
const ANIMATION_DURATION_IN_MS = 500

testcase('Header 1920 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('screenshot of the hedder 1920', () => {
    browser.assert.screenshotElement(header.block.header, 'header 1920 RU')
  })
})

testcase('Hedder on a job page without a contact button 1920 RU', () => {
  step('go to page «Вакансии»', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.careers.url}`)
      .waitForElementVisible(careersPage.link.salesExecutive)
  })

  expected('screenshot of the hedder on a job page without a contact button 1920', () => {
    browser.assert.screenshotElement(
      header.block.header,
      'hedder on a job page without a contact button 1920 RU'
    )
  })
})

testcase('Dropdown «УСЛУГИ» 1920 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «УСЛУГИ» in the header', () => {
    browser
      .moveToElement(header.button.services, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «УСЛУГИ» 1920', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown services 1920 RU'
    )
  })
})

testcase('Dropdown «ПОРТФОЛИО» 1920 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «ПОРТФОЛИО» in the header', () => {
    browser
      .moveToElement(header.button.portfolio, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «ПОРТФОЛИО» 1920', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown portfolio 1920 RU'
    )
  })
})

testcase('Dropdown «КАК МЫ РАБОТАЕМ» 1920 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «КАК МЫ РАБОТАЕМ» in the header', () => {
    browser
      .moveToElement(header.button.howWeWork, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «КАК МЫ РАБОТАЕМ» 1920', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown how We Work 1920 RU'
    )
  })
})

testcase('Hedder 1360 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('screenshot of the hedder 1360', () => {
    browser.assert.screenshotElement(header.block.header, 'Hedder 1360 RU')
  })
})

testcase('Hedder on a job page without a contact button 1360 RU', () => {
  step('go to page «ВАКАНСИИ»', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.careers.url}`)
      .waitForElementVisible(careersPage.link.salesExecutive)
  })

  expected('screenshot of the hedder on a job page without a contact button 1360', () => {
    browser.assert.screenshotElement(
      header.block.header,
      'Hedder on a job page without a contact button 1360 RU'
    )
  })
})

testcase('Dropdown «УСЛУГИ» 1360 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «УСЛУГИ» in the header', () => {
    browser
      .moveToElement(header.button.services, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «УСЛУГИ» 1360', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown services 1360 RU'
    )
  })
})

testcase('Dropdown «ПОРТФОЛИО» 1360 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «ПОРТФОЛИО» in the header', () => {
    browser
      .moveToElement(header.button.portfolio, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «ПОРТФОЛИО» 1360', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown portfolio 1360 RU'
    )
  })
})

testcase('Dropdown «КАК МЫ РАБОТАЕМ» 1360 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «КАК МЫ РАБОТАЕМ» in the header', () => {
    browser
      .moveToElement(header.button.howWeWork, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «КАК МЫ РАБОТАЕМ» 1360', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown how We Work 1360 RU'
    )
  })
})

testcase('Hedder 1280 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('screenshot of the hedder 1280', () => {
    browser.assert.screenshotElement(header.block.header, 'Hedder 1280 RU')
  })
})

testcase('Hedder on a job page without a contact button 1280 RU', () => {
  step('go to page «ВАКАНСИИ»', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.careers.url}`)
      .waitForElementVisible(careersPage.link.salesExecutive)
  })

  expected('screenshot of the hedder on a job page without a contact button 1280', () => {
    browser.assert.screenshotElement(
      header.block.header,
      'Hedder on a job page without a contact button 1280 RU'
    )
  })
})

testcase('Dropdown «УСЛУГИ» 1280 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «УСЛУГИ» in the header', () => {
    browser
      .moveToElement(header.button.services, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «УСЛУГИ» 1280', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown services 1280 RU'
    )
  })
})

testcase('Dropdown «ПОРТФОЛИО» 1280 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «ПОРТФОЛИО» in the header', () => {
    browser
      .moveToElement(header.button.portfolio, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «ПОРТФОЛИО» 1280', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown portfolio 1280 RU'
    )
  })
})

testcase('Dropdown «КАК МЫ РАБОТАЕМ» 1280 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «КАК МЫ РАБОТАЕМ» in the header', () => {
    browser
      .moveToElement(header.button.howWeWork, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «КАК МЫ РАБОТАЕМ» 1280', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown how We Work 1280 RU'
    )
  })
})

testcase('Hedder 1024 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('screenshot of the hedder 1024', () => {
    browser.assert.screenshotElement(header.block.header, 'Hedder 1024 RU')
  })
})

testcase('Hedder on a job page without a contact button 1024 RU', () => {
  step('go to page «ВАКАНСИИ»', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.careers.url}`)
      .waitForElementVisible(careersPage.link.salesExecutive)
  })

  expected('screenshot of the hedder on a job page without a contact button 1024', () => {
    browser.assert.screenshotElement(
      header.block.header,
      'Hedder on a job page without a contact button 1024 RU'
    )
  })
})

testcase('Dropdown «УСЛУГИ» 1024 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «УСЛУГИ» in the header', () => {
    browser
      .moveToElement(header.button.services, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «УСЛУГИ»  на 1024', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown services 1024 RU'
    )
  })
})

testcase('Dropdown «ПОРТФОЛИО» 1024 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «ПОРТФОЛИО» in the header', () => {
    browser
      .moveToElement(header.button.portfolio, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «ПОРТФОЛИО» 1280', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown portfolio 1024 RU'
    )
  })
})

testcase('Dropdown «КАК МЫ РАБОТАЕМ» 1024 RU', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «КАК МЫ РАБОТАЕМ» in the header', () => {
    browser
      .moveToElement(header.button.howWeWork, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «КАК МЫ РАБОТАЕМ» 1024', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown how We Work 1024 RU'
    )
  })
})

testcase('Header 1920 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('screenshot of the hedder 1920', () => {
    browser.assert.screenshotElement(header.block.header, 'header 1920 EN')
  })
})

testcase('Hedder on a job page without a contact button 1920 EN', () => {
  step('go to page «Вакансии»', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.careersEn.url}`)
      .waitForElementVisible(careersPage.link.salesExecutive)
  })

  expected(
    'screenshot of the hedder on a job page without a contact button 1920',
    () => {
      browser.assert.screenshotElement(
        '[data-testid="Header:block"]',
        'hedder on a job page without a contact button 1920 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1920 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «SERVICES» in the header', () => {
    browser
      .moveToElement(header.button.services, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «SERVICES» 1920', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown services 1920 EN'
    )
  })
})

testcase('Dropdown «PORTFOLIO» 1920 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «PORTFOLIO» in the header', () => {
    browser
      .moveToElement(header.button.portfolio, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «PORTFOLIO» 1920', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown portfolio 1920 EN'
    )
  })
})

testcase('Dropdown «HOW WE WORK» 1920 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «HOW WE WORK» in the header', () => {
    browser
      .moveToElement(header.button.howWeWork, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «HOW WE WORK» 1920', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown how We Work 1920 EN'
    )
  })
})

testcase('Dropdown «SOLUTIONS» 1920 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1920, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «SOLUTIONS» in the header', () => {
    browser
      .moveToElement(header.link.solutions, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «SOLUTIONS» 1920', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown SOLUTIONS 1920 EN'
    )
  })
})

testcase('Header 1360 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('screenshot of the hedder 1360', () => {
    browser.assert.screenshotElement(header.block.header, 'header 1360 EN')
  })
})

testcase('Hedder on a job page without a contact button 1360 EN', () => {
  step('go to page «Вакансии»', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.careersEn.url}`)
      .waitForElementVisible(careersPage.link.salesExecutive)
  })

  expected(
    'screenshot of the hedder on a job page without a contact button 1360',
    () => {
      browser.assert.screenshotElement(
        '[data-testid="Header:block"]',
        'hedder on a job page without a contact button 1360 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1360 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «SERVICES» in the header', () => {
    browser
      .moveToElement(header.button.services, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «SERVICES» 1360', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown services 1360 EN'
    )
  })
})

testcase('Dropdown «PORTFOLIO» 1360 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «PORTFOLIO» in the header', () => {
    browser
      .moveToElement(header.button.portfolio, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «PORTFOLIO» 1360', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown portfolio 1360 EN'
    )
  })
})

testcase('Dropdown «HOW WE WORK» 1360 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «HOW WE WORK» in the header', () => {
    browser
      .moveToElement(header.button.howWeWork, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «HOW WE WORK» 1360', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown how We Work 1360 EN'
    )
  })
})

testcase('Dropdown «SOLUTIONS» 1360 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «SOLUTIONS» in the header', () => {
    browser
      .moveToElement(header.link.solutions, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «SOLUTIONS» 1360', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown SOLUTIONS 1360 EN'
    )
  })
})

testcase('Header 1280 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('screenshot of the hedder 1280', () => {
    browser.assert.screenshotElement(header.block.header, 'header 1280 EN')
  })
})

testcase('Hedder on a job page without a contact button 1280 EN', () => {
  step('go to page «Вакансии»', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.careersEn.url}`)
      .waitForElementVisible(careersPage.link.salesExecutive)
  })

  expected(
    'screenshot of the hedder on a job page without a contact button 1280',
    () => {
      browser.assert.screenshotElement(
        '[data-testid="Header:block"]',
        'hedder on a job page without a contact button 1280 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1280 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «SERVICES» in the header', () => {
    browser
      .moveToElement(header.button.services, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «SERVICES» 1280', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown services 1280 EN'
    )
  })
})

testcase('Dropdown «PORTFOLIO» 1280 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «PORTFOLIO» in the header', () => {
    browser
      .moveToElement(header.button.portfolio, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «PORTFOLIO» 1280', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown portfolio 1280 EN'
    )
  })
})

testcase('Dropdown «HOW WE WORK» 1280 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «HOW WE WORK» in the header', () => {
    browser
      .moveToElement(header.button.howWeWork, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «HOW WE WORK» 1280', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown how We Work 1280 EN'
    )
  })
})

testcase('Dropdown «SOLUTIONS» 1280 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1280, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «SOLUTIONS» in the header', () => {
    browser
      .moveToElement(header.link.solutions, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «SOLUTIONS» 1280', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown SOLUTIONS 1280 EN'
    )
  })
})

testcase('Header 1024 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  expected('screenshot of the hedder 1024', () => {
    browser.assert.screenshotElement(header.block.header, 'header 1024 EN')
  })
})

testcase('Hedder on a job page without a contact button 1024 EN', () => {
  step('go to page «Вакансии»', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.careersEn.url}`)
      .waitForElementVisible(careersPage.link.salesExecutive)
  })

  expected(
    'screenshot of the hedder on a job page without a contact button 1024',
    () => {
      browser.assert.screenshotElement(
        '[data-testid="Header:block"]',
        'hedder on a job page without a contact button 1024 EN'
      )
    }
  )
})

testcase('Дропдаун SERVICES 1024 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «SERVICES» in the header', () => {
    browser
      .moveToElement(header.button.services, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «SERVICES» 1024', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown services 1024 EN'
    )
  })
})

testcase('Dropdown «PORTFOLIO» 1024 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «PORTFOLIO» in the header', () => {
    browser
      .moveToElement(header.button.portfolio, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «PORTFOLIO» 1024', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown portfolio 1024 EN'
    )
  })
})

testcase('Dropdown «HOW WE WORK» 1024 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «HOW WE WORK» in the header', () => {
    browser
      .moveToElement(header.button.howWeWork, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «HOW WE WORK» 1024', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown how We Work 1024 EN'
    )
  })
})

testcase('Dropdown «SOLUTIONS» 1024 EN', () => {
  step('go to the home page', () => {
    browser
      .setWindowSize(1024, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementVisible(header.block.header)
  })

  step('hover over «SOLUTIONS» in the header', () => {
    browser
      .moveToElement(header.link.solutions, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('screenshot of the dropdown «SOLUTIONS» 1024', () => {
    browser.assert.screenshotElement(
      header.block.dropdown,
      'dropdown SOLUTIONS 1024 EN'
    )
  })
})
