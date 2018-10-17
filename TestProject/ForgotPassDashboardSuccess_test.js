Feature('Forgot Password Dashboard Success Test');

Scenario('test forgot dashboard password success', (I) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.seeElement('.login-welcome');
    I.wait(1);
    I.click('Olvidé mi contraseña');
    I.see('Ingrese su email para recuperar su clave');
    I.fillField('.form-control','juan.n@firstdata.com');
    I.click('Restablecer contraseña');
    I.wait(1);
    I.see('Recibirá instrucciones para crear una nueva contraseña.');
});