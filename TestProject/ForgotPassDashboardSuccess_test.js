Feature('Forgot Password Dashboard Success Test');

Scenario('test forgot dashboard password success', (I) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Olvidé mi contraseña');
    I.click('a');
    I.dontSee('Olvidé mi contraseña');
    I.see('Ingrese su email para recuperar su clave');
    I.fillField('input[name=user]','juan.n@firstdata.com');
    I.click('button[type=submit]');
    I.see('Recibirá instrucciones para crear una nueva contraseña.');
});