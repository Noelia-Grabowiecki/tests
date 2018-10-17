Feature('Login Dashboard Invalid Credentials Test');


Scenario('test login dashboard invalid credentials', (I, loginDashboardPage) => {
	I.amOnPage('https://dashboard.firstdata-test.geopagos.com/');
    I.see('Recordarme');
    loginDashboardPage.sendForm('juan.n@firstdata.com.ar','Geopagos123.');
    I.see('La combinación de usuario y contraseña es incorrecta');
});