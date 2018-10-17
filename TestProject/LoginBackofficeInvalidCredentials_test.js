Feature('Login Backoffice Invalid Credentials Test');


Scenario('test login backoffice invalid credentials', (I, loginBackofficePage) => {
	I.amOnPage('https://backend.firstdata-test.geopagos.com');
	I.see('Recordar email');
	loginBackofficePage.sendForm('admin@firstdata.com.ar','geopagos123');
    I.see('Error: La combinación de usuario y contraseña no es correcta.');
});