
Feature('Forgot Password Success Test');

Scenario('test forgot password success', (I) => {
	I.amOnPage('https://backend.firstdata-test.geopagos.com');
    I.see('Olvidé mi contraseña');
    I.click('Olvidé mi contraseña');
    I.dontSeeElement('#password');
    I.see('RESTABLECER CONTRASEÑA DE ADMINISTRADOR');
    I.fillField('#username','noelia.g@geopagos.com');
    I.click('button.btn.btn-lg.btn-primary.btn-block');
    I.see('Se ha enviado un email a su correo con las instrucciones para restablecer la contraseña.');
});
