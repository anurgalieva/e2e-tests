function scrollToFooter() {
  step('Scroll to footer', () => {
    browser
    .execute(function() {
        scroll(0, 99999999999999)
      })
    .pause(2000)
    .execute(function() {
        scroll(0, 99999999999999)
     })
  })
}

module.exports = { scrollToFooter }
