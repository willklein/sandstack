describe('TodoMVC app', function() {
  var newTodo;

  beforeEach(() => {
    browser.get('http://localhost:8080/');

    newTodo = element(by.css('.new-todo'));
  });

  it('should have the right title', () => {
    var title = browser.getTitle();
    expect(title).toBe('Typescript & AngularJS • TodoMVC');
  });

  it('should have placeholder text in the new todo input', () => {
    var placeholderText = newTodo.getAttribute('placeholder');
    expect(placeholderText).toEqual('What needs to be done?');
  });

  it('should add a new todo', () => {
    // enter todo description
    // enter RETURN

    // validate the todo item is in the list
    // look up the entered todo item in the list

    // expect the text of the list item to be the todo description entered
  });

  // what other tests do you want to write? i.e. it('should ...', () => {});
});
