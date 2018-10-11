
Feature('Login Backoffice Success Test');
//import PageObjects\LoginBackoffice;

Scenario('test login backoffice success', (I) => {
	I.amOnPage('https://backend.firstdata-test.geopagos.com');
    I.see('Recordar email');
    I.fillField('#username','admin@firstdata.com');
    I.fillField('#password','geopagos123');
    I.click('Entrar');
    I.see('Corporates');
});