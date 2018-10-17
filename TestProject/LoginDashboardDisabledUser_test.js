Feature('Login Dashboard Disabled User Test');


Scenario('test login dashboard disabled user', (I) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Recordarme');
    I.fillField('.form-control','juana.b@firstdata.com');
    I.fillField('.login-password-input','Geopagos123.');
    I.click('button.btn.btn-secondary.undefined');
    I.waitForText('El usuario no se encuentra habilitado');
});