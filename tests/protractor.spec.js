describe('TodoMVC app', function() {
  it('should have the right title', function() {
    browser.get('http://localhost:8080/');
    var title = browser.getTitle();
    expect(title).toBe('Angular2 • TodoMVC');
  });

  it('should add a todo', function() {
    browser.get('http://localhost:8080/');

    // get the input box
    // enter todo description
    // enter RETURN

    // validate the todo item is in the list
    // look up the todo item in the list
    // expect the text of the list item to be the todo description entered
  });
});
