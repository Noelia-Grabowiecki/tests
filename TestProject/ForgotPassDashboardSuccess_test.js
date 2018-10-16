Feature('Forgot Password Dashboard Success Test');

Scenario('test forgot dashboard password success', (I) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Olvidé mi contraseña');
    I.click('a');
    I.dontSee('Ingreso al panel de control, ["css" => "body h2"]');
    I.see('Restaurar contraseña,"["css" => "body h2"]"');
    I.fillField('input[name=user]','juan.n@firstdata.com');
    I.click('button[type=submit]');
    I.see('Recibirá instrucciones para crear una nueva contraseña.');
});