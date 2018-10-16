Feature('Forgot Password Dashboard Success Test');

Scenario('test forgot dashboard password success', (I) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Olvidé mi contraseña');
    I.click('Olvidé mi contraseña');
    I.dontSeeElement('.login-password-input');
    I.see('Restaurar contraseña');
    I.fillField('input[name=user]','juan.n@firstdata.com');
    I.click('type="submit"');
    I.see('Recibirá instrucciones para crear una nueva contraseña.');
});