
require('./signin_page');

module.exports = {

    toDo: {
        //signinButton: browser.driver.findElement(by.linkText('Sign in')),
        searchText: browser.driver.findElement(by.id('sb_tb'))
    },

   /* clickSigninButton: function() {
        var todo = this.toDo;
        todo.signinButton.click();
        return require('./signin_page.js');
    },
    getSigninbutton: function(){
        var todo = this.toDo;
        return todo.signinButton;
    },*/
    testSearch: function(){
        var todo = this.toDo;
        todo.searchText.sendKeys("mile");
    }
};
