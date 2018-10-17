
const I = actor();

module.exports = {

  // setting locators
  fields: {
    email: {css: '.form-control'},
    password: {css: '.login-password-input'}
  },
  submitButton: {css: 'button.btn.btn-secondary.undefined'},

  // introducing methods
  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
    I.wait(3);
  }
}
