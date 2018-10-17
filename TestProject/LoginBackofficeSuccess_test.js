Feature('Login Backoffice Success Test');


Scenario('test login backoffice success', (I, loginBackofficePage) => {
	I.amOnPage('https://backend.firstdata-test.geopagos.com');
    I.see('Recordar email');
    loginBackofficePage.sendForm('admin@firstdata.com','geopagos123');
    I.see('Corporates');
});