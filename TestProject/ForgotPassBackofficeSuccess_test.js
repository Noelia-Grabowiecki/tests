
Feature('Forgot Password Backoffice Success Test');

Scenario('test forgot password backoffice success', (I) => {
	I.amOnPage('https://backend.firstdata-test.geopagos.com');
    I.see('Olvidé mi contraseña');
    I.click('Olvidé mi contraseña');
    I.dontSeeElement('#password');
    I.see('RESTABLECER CONTRASEÑA DE ADMINISTRADOR');
    I.fillField('#username','noelia.g@geopagos.com');
    I.click('button[type=submit]');
    I.see('Se ha enviado un email a su correo con las instrucciones para restablecer la contraseña.');
});
