Feature('Login Dashboard Nonexistent User Test');


Scenario('test login dashboard nonexistent user', (I, loginDashboardPage) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Recordarme');
    loginDashboardPage.sendForm('juantest@firstdata.com','xxxxxxxxx');
    I.see('La combinación de usuario y contraseña es incorrecta');
});