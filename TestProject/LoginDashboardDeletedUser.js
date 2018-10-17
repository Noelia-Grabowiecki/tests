Feature('Login Dashboard Deleted User Test');


Scenario('test login dashboard deleted user', (I, loginDashboardPage) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Recordarme');
    loginDashboardPage.sendForm('pedro.n@firstdata.com','Geopagos123.');
    I.see('La combinación de usuario y contraseña es incorrecta');
});