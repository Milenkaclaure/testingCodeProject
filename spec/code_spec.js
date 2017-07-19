
describe('code project homepage', function() {
  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.get('https://www.codeproject.com/');
  });

  it('should search the word protractor', function() {
    var element = browser.driver.findElement(By.id("sb_tb"));
    element.sendKeys("protractor", protractor.Key.ENTER);
    expect(browser.driver.findElement(By.id('ctl00_MC_Query')).getAttribute('value')).toContain('protractor');

  });
  it('should go to sign in page', function(){
    var signinButton = browser.driver.findElement(by.css('a[href*="https://www.codeproject.com/script/Membership/LogOn.aspx?rp=%2f"]'));
    signinButton.click();
    expect(browser.driver.findElement(By.id('ctl00_MC_MemberLogOn_CurrentEmail')).isDisplayed()).toBeTruthy();

  });
  it('should sign in with existing user account', function(){
    var signinButton = browser.driver.findElement(by.css('a[href*="https://www.codeproject.com/script/Membership/LogOn.aspx?rp=%2f"]'));
    signinButton.click();
    var userEmailTextbox = browser.driver.findElement(By.id('ctl00_MC_MemberLogOn_CurrentEmail'));
    var passwordTextbox = browser.driver.findElement(By.id('ctl00_MC_MemberLogOn_CurrentPassword'));
    var submitButton = browser.driver.findElement(By.id('ctl00_MC_MemberLogOn_SignInButton'));
    userEmailTextbox.sendKeys("miletesting@gmail.com");
    passwordTextbox.sendKeys("miletesting");
    submitButton.click();
    var profileMenu = browser.driver.findElement(By.id('ctl00_MemberMenu_CurRat'));
    expect(profileMenu.isDisplayed()).toBeTruthy();



  });
});
