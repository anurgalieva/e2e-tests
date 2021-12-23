const { modalContInfoRu } = require('./actions/modalContInfoRu')
const { modalContInfoEn } = require('./actions/modalContInfoEn')
const { switchLanguage } = require('./actions/switchLanguage')
const { makeRequest } = require('./actions/vacancies')
const { checkUrlInNewWindow } = require('./actions/window')
const pages = require('./data/pages')
const mainPage = require('./selectors/mainPage.js')
const general = require('./selectors/general.js')
const header = require('./selectors/header.js')
const ANIMATION_DURATION_IN_MS = 800

//Sending requests from the RU locale

testcase('Send request from Hire us modal form of RU-locales - Main', () => {
  step('go to Main page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
  })

  step('Press the floating button [Нанять нас]', () => {
    browser.click(mainPage.button.contactUs)
  })

  modalContInfoRu()
})

//Sending requests from the EN locale

testcase('Send request from Hire us modal form of EN-locales - Main', () => {
  step('Go to Main page', () => {
    browser
      .setWindowSize(1360, 1024)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
  })

  step('Press the floating button [Hire us]', () => {
    browser.click(mainPage.button.contactUs)
  })

  modalContInfoEn()
})

testcase('Hero block', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.main)
      .click(general.button.closeCookiesAlert)
  })

  expected('The hero block is displayed', () => {
    browser
      .assert.screenshotElement(
        mainPage.block.hero,
        'Logo CSSSR',
        { hideSelectors: [header.block.header] }
      )
  })
})

testcase('Displaying a photo in the heart on a hover on the word «flag»', () => { 
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 2000)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.main)
      .click(general.button.closeCookiesAlert)
  })

  step('Scroll to the "About Us" block', () => {
    browser
      .moveToElement(mainPage.block.elbrus, 1, 1)
      //.click(mainPage.block.elbrus)
  })

  step('Hover the cursor over the word «flag» in the statistics block', () => {
    browser
      .moveToElement(mainPage.block.elbrus, 10, 10)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  expected('A photo with the flag of SSSSR appeared in the heart', () => {
    browser
      .assert.screenshotElement(
        mainPage.img.elbrus,
        'Heart with flag of CSSSR'
      )
  })
})

testcase.skip('Displaying hot vacancies on the Main page', () => { // скипнут до починки COM-3772
  let vacancies
  let arrayNameVacancies = []
  let arrayIndex = 0

  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 1080)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
      .perform(
        async (done) => {
          vacancies = await makeRequest('https://csssr.space/api/public/vacancies/active?locale=ru-ru')
          done()
        }
      )
  })

  step('Scroll to the block with vacancies', () => {
    browser
      .moveToElement(mainPage.block.vacancies, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
  })

  step('In the block with vacancies only the hot vacancies are displayed', () => {
    browser.perform(function () {
      for (var NUMBER_OF_VACANCIES = 0; NUMBER_OF_VACANCIES < vacancies.length; NUMBER_OF_VACANCIES++) {
        if (vacancies[NUMBER_OF_VACANCIES].isHot === true) {
          arrayNameVacancies[arrayIndex] = vacancies[NUMBER_OF_VACANCIES].name
          arrayIndex++
        }
      }
    })
    browser.perform(function () {
      arrayNameVacancies.forEach(() => {
        browser.assert.containsText(`${mainPage.link.vacancyItem}${arrayIndex}"]`,
          arrayNameVacancies[arrayIndex - 1])
        arrayIndex--
      })
    })
  })
})

// Routes from the RU locale

testcase('Main Page. Rout to the page (RU)', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 7000)
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
      .click(general.button.closeCookiesAlert)
  })

  step('Click on the link «Фронтенд аутсорс»', () => {
    browser
      .click(mainPage.link.outsourcingTitle)
  })

  expected('Triggered a route on to the page «Фронтенд аутсорс»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.outsourcingFrontEnd.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link «Бэкенд и DevOps»', () => {
    browser
      .click(mainPage.link.backendTitle)
  })

  expected('Triggered a route on to the page «Бэкенд и DevOps»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.backEndAndDevops.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link «Разработка MVP»', () => {
    browser
      .click(mainPage.link.mvpTitle)
  })

  expected('Triggered a route on to the page «Разработка MVP»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.mvpDevelopment.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link of mosoblgaz project', () => {
    browser.click(mainPage.link.mosoblgaz)
  })

  expected('Triggered a route on to the page of «mosoblgaz»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.mosoblgaz.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link of S7 project', () => {
    browser.click(mainPage.link.s7)
  })

  expected('Triggered a route on to the page of «S7 Airlanes»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.s7.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link in the text «информационные технологии»', () => {
    browser
      .click(mainPage.link.inforamationTechnology)
  })

  expected('Triggered a route to the IT industry page', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.information.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link in the text «медиа и маркетинг»', () => {
    browser
      .click(mainPage.link.mediaAndMarketing)
  })

  expected('Triggered a route to the Media and Marketing industry page', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.mediaAndMarketing.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link in the text «финтех»', () => {
    browser
      .click(mainPage.link.fintech)
  })

  expected('Triggered a route to the Fintex industry page', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.fintech.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link in the text «электронная коммерция»', () => {
    browser
      .click(mainPage.link.ecommerce)
  })

  expected('Triggered a route to the E-Commerce industry page', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.eCommerce.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the button «Просмотреть наши проекты»', () => {
    browser
      .click(mainPage.link.projects)
  })

  expected('Triggered a route to page of all projects', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.projects.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the text link «Читать о процессах»', () => {
    browser
      .click(mainPage.link.feature1)
  })

  expected('Triggered a route on to the page «Организация процессов»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.wayOfWork.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the text link «Читать о технологиях»', () => {
    browser
      .click(mainPage.link.feature2)
  })

  expected('Triggered a route on to the page «Стек текхнологий»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}${pages.techStack.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link «CSSSR.Tracker»', () => {
    browser.click(mainPage.link.trackerText)
  })

  expected('The Tracker page has opened in a new tab', () => {
    checkUrlInNewWindow(pages.traker.url)
  })

  step('Click on the link «CSSSR.School»', () => {
    browser
      .click(mainPage.link.school)
  })

  expected('The School page has opened in a new tab', () => {
    checkUrlInNewWindow(pages.school.url)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link «CSSSR.Blog»', () => {
    browser
      .click(mainPage.link.blog)
  })

  expected('The Blog page has opened in a new tab', () => {
    checkUrlInNewWindow(`${pages.blog.url}${pages.ruLocal.url}`)
  })

  step('Click on the link «CSSSR.Radio»', () => {
    browser
      .waitForElementPresent(mainPage.link.radio)
      .moveToElement(mainPage.link.radio, 1, 1)
      .pause(ANIMATION_DURATION_IN_MS)
      .click(mainPage.link.radio)
  })

  expected('The Radio page has opened in a new tab', () => {
    checkUrlInNewWindow(pages.soundcloud.url)
  })

  step('Click on the button «Все наши вакансии»', () => {
    browser
      .click(mainPage.link.vacancies)
  })

  expected('Triggered a route to the page with a list of all vacancies', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.careers.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.ruLocal.url}`)
      .waitForElementPresent(mainPage.block.main)
  })

  switchLanguage()

  expected('The English version of the page has been opened', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}`)
  })
 })

// Routes from the EN locale

testcase('Main Page. Rout to the page (EN)', () => {
  step('Go to the Main page', () => {
    browser
      .setWindowSize(1920, 7000)
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
      .click(general.button.closeCookiesAlert)
  })

  step('Click on the link «Web Development Outsourcing»', () => {
    browser
      .click(mainPage.link.outsourcingTitle)
  })

  expected('Triggered a route on to the page «Web Development Outsourcing»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.outsourcingFrontEnd.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link «Back-end&DevOps»', () => {
    browser
      .click(mainPage.link.backendTitle)
  })

  expected('Triggered a route on to the page «Back-end&DevOps»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.backEndAndDevops.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link «MVP Development»', () => {
    browser
      .click(mainPage.link.mvpTitle)
  })

  expected('Triggered a route on to the page «MVP Development»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.mvpDevelopment.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link of mosoblgaz project', () => {
    browser.click(mainPage.link.mosoblgaz)
  })

  expected('Triggered a route on to the page of «mosoblgaz»', () => {
    browser
    .waitForElementPresent(mainPage.block.main)
    .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.mosoblgaz.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link of S7 project', () => {
    browser.click(mainPage.link.s7)
  })

  expected('Triggered a route on to the page of «S7 Airlanes»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.s7.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link in the text «information technology»', () => {
    browser
      .click(mainPage.link.inforamationTechnology)
  })

  expected('Triggered a route to the IT industry page', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.information.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link in the text «media and marketing»', () => {
    browser
      .click(mainPage.link.mediaAndMarketing)
  })

  expected('Triggered a route to the Media and Marketing industry page', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.mediaAndMarketing.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link in the text «fintech»', () => {
    browser
      .click(mainPage.link.fintech)
  })

  expected('Triggered a route to the Fintex industry page', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.fintech.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link in the text «e-commerce»', () => {
    browser
      .click(mainPage.link.ecommerce)
  })

  expected('Triggered a route to the E-Commerce industry page', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.eCommerce.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the button «View our projects»', () => {
    browser
      .click(mainPage.link.projects)
  })

  expected('Triggered a route to page of all projects', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.projects.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the text link «Read about processes»', () => {
    browser.click(mainPage.link.feature1)
  })

  expected('Triggered a route on to the page «Our Processes»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.wayOfWork.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the text link «Read about technologies»', () => {
    browser
      .click(mainPage.link.feature2)
  })

  expected('Triggered a route on to the page «CSSSR Technologies»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.techStack.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link «CSSSR.Tracker»', () => {
    browser.click(mainPage.link.timeTracker)
  })

  expected('The Tracker page has opened in a new tab', () => {
    checkUrlInNewWindow(pages.traker.url)
  })

  step('Click on the link «LMS»', () => {
    browser
      .click(mainPage.link.lmsLink)
  })
  
  expected('Triggered a route on to the page «LMS»', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.enLocal.url}${pages.lms.url}`)
  })

  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.services)
  })

  step('Click on the link «CSSSR.Blog»', () => {
    browser
      .click(mainPage.link.blog)
  })

  expected('The Blog page has opened in a new tab', () => {
    checkUrlInNewWindow(pages.blogEn.url)
  })

  step('Click on the button «Все наши вакансии»', () => {
    browser
      .click(mainPage.link.vacancies)
  })

  expected('Triggered a route to the page with a list of all vacancies', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.careersEn.url}`)
  })

  
  step('Back to the Main page', () => {
    browser
      .url(`${browser.launch_url}${pages.enLocal.url}`)
      .waitForElementPresent(mainPage.block.main)
  })

  switchLanguage()

  expected('The English version of the page has been opened', () => {
    browser
      .waitForElementPresent(mainPage.block.main)
      .assert.urlEquals(`${browser.launch_url}${pages.ruLocal.url}`)
   })
})

