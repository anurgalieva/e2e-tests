module.exports = {
  field: {
    name: '[data-testid="ContactModalForm:field:name"]',
    phone: '[data-testid="ContactModalForm:field:phone"]',
    email: '[data-testid="ContactModalForm:field:email"]',
    company: '[data-testid="ContactModalForm:field:company"]',
    message: '[data-testid="ContactModalForm:field:message"]',
  },
  button: {
    submit: '[data-testid="ContactModalForm:button:submit"]',
    closed: '[data-testid="ContactModal:button:closeModal"]',
  },
  text: {
    success: '[data-testid="ContactModalForm:text:status"]',
    description: '[data-testid="ContactModalForm:text:description"]'
  },
  tagRu: {
    frontend: '[data-testid="ContactModalForm:tag:tag[0].Frontend"]',
    backend: '[data-testid="ContactModalForm:tag:tag[1].Backend"]',
    mvp: '[data-testid="ContactModalForm:tag:tag[2].MVP"]',
    partnership: '[data-testid="ContactModalForm:tag:tag[3].Partnership"]',
  },
  tagEn: {
    development: '[data-testid="ContactModalForm:tag:tag[0].Web Development"]',
    devops: '[data-testid="ContactModalForm:tag:tag[1].DevOps"]',
    design: '[data-testid="ContactModalForm:tag:tag[2].Web Design"]',
    mvp: '[data-testid="ContactModalForm:tag:tag[3].MVP"]',
    partnership: '[data-testid="ContactModalForm:tag:tag[4].Partnership"]',
  },
}
