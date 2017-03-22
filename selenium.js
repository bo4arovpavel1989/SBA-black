var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.similarweb.com/website/leon.ru');
//driver.findElement(By.name('q')).sendKeys('webdriver');
//driver.findElement(By.name('btnG')).click();
//driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();

/*
var data = {};
		data.site=resource.site;
		data.engagementInfo = [];
		data.rank = $('.rankingItem-value.js-countable').data('value');
		$('.engagementInfo-valueNumber.js-countValue').each(()=>{
			data.engagementInfo.push($(this).html());
		});
		console.log(data);*/