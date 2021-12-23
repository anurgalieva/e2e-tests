const { link } = require("./faqPage");

module.exports = {
  block: {
    main: '#__next > main > div.code-wrapper > svg',
    page404: '#__next',
  },
  button: {
    submit: '[data-testid="Jobs:form:button.submit"]',
  },
  textField: {
    firstname: '[data-testid="Jobs:form:input.firstname"]',
    lastname: '[data-testid="Jobs:form:input.lastname"]',
    location: '[data-testid="Jobs:form:input.location"]',
    email: '[data-testid="Jobs:form:input.email"]',
    resume: '[data-testid="Jobs:form:input.resue"]',
    github: '[data-testid="Jobs:form:input.github"]',
    file: '[data-testid="Jobs:form:input.file"]',
    comment: '[data-testid="Jobs:form:input.comment"]',
    portfolio: '[data-testid="Jobs:form:input.portfolio"]',
    github: '[name="github"]',
    file: '[name="file"]',
    comment: '[name="comment"]',
    imgResult: `[data-testid="Jobs:form.text.result"]`,
    listItem0: '[data-testid="Jobs:list.item-0"]',
  },
  checkbox: {
    newsletter: '[data-testid="CandidateForm:field:callbackForm.newsletter.checkbox"]',
  },
  text: {
    errorFile: '.font_input-small-error-label.error',
    firstnameError: '[data-testid="Jobs:form:text:error.firstname"]',
    lastnameError: '[data-testid="Jobs:form:text:error.lastname"]',
    locationError: '[data-testid="Jobs:form:text:error.location"]',
    emailError: '[data-testid="Jobs:form:text:error.email"]',
    resumeError: '[data-testid="Jobs:form:text:error.resume"]',
  },
  link: {
    firstVacancy: '[data-testid="Jobs:list.item-0"]',
  }
}
