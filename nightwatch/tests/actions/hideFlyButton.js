function hideFlyButton(flyingButton) {
  return document.querySelector(flyingButton).style = "display: none;"
}

module.exports = { hideFlyButton }
