var TodoHomepage = function () {
    browser.get('http://localhost:8080/');
}

TodoHomepage.prototype = Object.create({}, {
    newTodo: { get: function () { return element(by.css('.new-todo')); } },
    todoList: { get: function () { return element.all(by.css('li label')); } },
    title: { get: function () { return browser.getTitle(); } },
    placeholderText: { get: function () { return this.newTodo.getAttribute('placeholder'); } },
    description: { get: function () { return element(by.css('li label')).getText(); } },
    deleteButton: { get: function () { return element(by.css('.destroy')); } },
    activeButton: { get: function () { return element(by.css('a[href*="#/active"]')); } },
    activeItems: { get: function () { return element.all(by.css('li label')); } },
    checkbox: { get: function () { return element.all(by.css('li input')).get(0); } },
    completedButton: { get: function () { return element(by.css('a[href*="#/completed"]')); } },
    completedItems: { get: function () { return element.all(by.css('li label')); } },
    checkAllButton: { get: function () { return element(by.model('allChecked')); } },
    clearCompletedButton: { get: function () { return element(by.css('.clear-completed')); } },
    todoAt: { value: function (idx) { return this.todoList.get(idx).getText(); } },
    todoName: { value: function (todoText) { return this.todoList.get(todoText).getText(); } },
    addTodo: {
        value: function (todoText) {
            this.newTodo.sendKeys(todoText);
            this.newTodo.sendKeys(protractor.Key.ENTER);
        }
    },
    deleteTodo: {
        value: function (description) {
            browser.actions().mouseMove(this.description.getAttribute(description)).perform();
            // browser.actions().mouseMove(element(by.css('li label'))).perform();
            this.deleteButton.click();
        }
    },
});
module.exports = TodoHomepage;


//class TodoHomepage {
  //  constructor: function() {}

  //  addTodo: function(text_ {}