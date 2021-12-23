// Screenshots of the whole page for the EN locale MVP incl
const pages = require('./data/pages')
const footer = require('./selectors/footer')
const mvpPage = require('./selectors/mvpPage')
const general = require('./selectors/general.js')
const header = require('./selectors/header')
const haveAnIdea = require('./selectors/haveAnIdea.js')
const { hideFlyButton } = require('./actions/hideFlyButton.js')

testcase('MVP-on 1920 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1920, 10000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 1920 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 1920 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-on 1360 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1360, 8600)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 1360 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 1360 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-on 1280 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1280, 9300)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 1280 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 1280 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-on 1024 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1024, 6700)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 1024 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 1024 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-on 360 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(360, 7000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 360 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 360 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

// Screenshots of the whole page for the EN locale MVP incl

testcase('MVP-on 1920 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1920, 10000)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 1920 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 1920 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-on 1360 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1360, 8500)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 1360 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 1360 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-on 1280 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1280, 8500)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 1280 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 1280 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-on 1024 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1024, 6700)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 1024 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 1024 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-on 360 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(360, 7000)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  expected('Screen of the whole page of MVP-on - 360 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-on 360 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})


// Full page screenshots for EN locale MVP off

testcase('MVP-off 1920 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1920, 10000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 1920 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 1920 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-off 1360 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1360, 8600)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 1360 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 1360 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-off 1280 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1280, 9300)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 1280 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 1280 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-off 1024 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1024, 6700)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 1024 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 1024 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-off 360 En', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(360, 7000)
      .url(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 360 EN', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 360 EN',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

// Screenshots of the whole page for the RU locale MVP off

testcase('MVP-off 1920 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1920, 10000)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 1920 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 1920 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-off 1360 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1360, 8600)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 1360 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 1360 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-off 1280 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1280, 9300)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 1280 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 1280 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-off 1024 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(1024, 6700)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 1024 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 1024 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})

testcase('MVP-off 360 RU', () => {
  step('Go to MVP page', () => {
    browser
      .setWindowSize(360, 7000)
      .url(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
      .waitForElementPresent(footer.block.footer)
      .execute(hideFlyButton, [haveAnIdea.button.flyingButton])
  })

  step('Switch offClicked on the switch-off toggle ', () => {
    browser
      .click(mvpPage.button.aboutMvpOff)
  })

  expected('Screen of the whole page of MVP-off - 360 RU', () => {
    browser.assert.screenshotElement(mvpPage.block.main, 'MVP-off 360 RU',
      { hideSelectors: [footer.block.footer, footer.block.bottomContent, general.button.contactUs, header.block.header] })
  })
})
