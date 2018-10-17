Feature('Login Dashboard Not Enough Privileges Test');


Scenario('test login dashboard not enough privileges', (I, loginDashboardPage) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Recordarme');
    loginDashboardPage.sendForm('jose.n@firstdata.com','Geopagos123.');
    I.see('No tienes privilegios para acceder a este panel');
});