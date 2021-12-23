module.exports = {
  button: {
    formSubmit: '[data-testid="contactUs:button.formSubmit"]',
    openCalendly: '[data-testid="Contacts:button:open.calendly"]',
  },
  tab: {
    tabRu: '[data-testid="Contacts:button:tab.ru"]',
    tabSg: '[data-testid="Contacts:button:tab.sg"]',
    tabEe: '[data-testid="Contacts:button:tab.ee"]',
  },
  text: {
    addressMoscow: '[data-testid="Contacts:text:address.ru"]',
    addressDzerzhinsky: '[data-testid="Contacts:text:address.dzerzhinsky"]',
    managerName: '[data-testid="Contacts:text:manager.name"]',
    managerPosition: '[data-testid="Contacts:text:manager.position"]',
    linkEmail: '[data-testid="Contacts:link:email"]',
    addressSingapore: '[data-testid="Contacts:text:address.sg"]',
    addressEstonia: '[data-testid="Contacts:text:address.ee"]',
    successMessage: '[data-testid="contactUs:text.successMessage"]',
  },
  img: {
    avatar: '#main > div > section > div > div > figure > div.picture-container > picture > img',
  },
  select: {
    dropdownToggle: '[data-testid="Contacts:button:dropdown.toggle"]',
    dropdownToggle: '[data-testid="Contacts:button:dropdown.toggle"]',
    selectPopup: '[data-testid="Contacts:block:dropdown"] div.popup',
    job: '[data-testid="Contacts:button:dropdown.option.job"]',
  },
  textField: {
    email: '[data-testid="contactUs:field:contacts.email"]',
    phone: '[data-testid="contactUs:field:contacts.phone"]',
    message: '[data-testid="contactUs:field:contacts.message"]',
  },
  popup: {
    bookCall: 'div.calendly-popup iframe',
  }
}
