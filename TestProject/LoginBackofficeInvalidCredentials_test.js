Feature('Login Backoffice Invalid Credentials Test');


Scenario('test login backoffice invalid credentials', (I) => {
	I.amOnPage('https://backend.firstdata-test.geopagos.com');
    I.see('Recordar email');
    I.fillField('#username','admin@firstdata.com.ar');
    I.fillField('#password','geopagos123');
    I.click('Entrar');
    I.see('Error: La combinación de usuario y contraseña no es correcta.');
});