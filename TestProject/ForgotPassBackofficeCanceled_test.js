Feature('Forgot Password Backoffice Canceled Test');

Scenario('test forgot password backoffice canceled', (I) => {
	I.amOnPage('https://backend.firstdata-test.geopagos.com');
    I.see('Olvidé mi contraseña');
    I.click('Olvidé mi contraseña');
    I.dontSeeElement('#password');
    I.see('RESTABLECER CONTRASEÑA DE ADMINISTRADOR');
    I.click('Cancelar');
    I.dontSeeElement('Restablecer');
    I.see('Olvidé mi contraseña');
});