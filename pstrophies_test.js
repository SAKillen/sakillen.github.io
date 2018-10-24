var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.playstationtrophies.org/');

driver.findElement(By.name('search')).sendKeys('telltale');

driver.sleep(2000).then(function () {
    driver.findElement(By.name('search')).sendKeys(webdriver.Key.ENTER);
});

driver.findElement(By.name('submit')).click();

driver.sleep(5000).then(function () {
    driver.getTitle().then(function (title) {
        if (title === 'PlayStationTrophies.org - Search') {
            console.log('Test passed');
        } else {
            console.log('Test failed');
        }
        driver.quit();
    });
});