Feature('Login Dashboard disabled user Test');


Scenario('test login dashboard disabled user', (I, loginDashboardPage) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Recordarme');
    loginDashboardPage.sendForm('juana.b@firstdata.com.ar','Geopagos123.');
    I.see('El usuario no se encuentra habilitado');
});