const puppeteer = require('puppeteer');
const timeOut = 100 * 1000;
puppeteer.launch({
    headless: true,
    slowMo: 30,
    args: ['--window-size=800x600', '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-accelerated-2d-canvas', '--disable-gpu']
}).then(async browser => {
    const page = await browser.newPage();
    await page.setRequestInterception(false);
    await page.goto('http://www.enuri.com', {
        waitUntil: 'networkidle2',
        timeout: 25000
    });
    await page.screenshot({
        path: '../../assets/IMG/test.png'
    });
    await page.close();
    await browser.close();
});