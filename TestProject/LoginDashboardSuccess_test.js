Feature('Login Dashboard Success Test');


Scenario('test login dashboard success', (I, loginDashboardPage) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Recordarme');
    loginDashboardPage.sendForm('juan.n@firstdata.com','Geopagos123.');
    I.see('INICIO');
});