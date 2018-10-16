
const I = actor();

module.exports = {

  // setting locators
  fields: {
    email: {css: 'input[name=user]'},
    password: {css: 'input[type=password]'}
  },
  submitButton: {css: 'button[type=submit]'},

  // introducing methods
  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  }
}
