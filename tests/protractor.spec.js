var TodoHomepage = require('./pageObject.js');
describe('TodoMVC app', function () {
  var todoHomepage;

  beforeEach(function () {
    todoHomepage = new TodoHomepage();
  });

  it('should have the right title', function () {
    expect(todoHomepage.title).toBe('Typescript & AngularJS • TodoMVC');
  });

  it('should have placeholder text in the new todo input', function () {
    expect(todoHomepage.placeholderText).toEqual('What needs to be done?');
  });

  it('should add a new todo', function () {
    todoHomepage.addTodo('todoOne');
    expect(todoHomepage.todoList.count()).toEqual(1);
    // expect the text of the list item to be the todo description entered
    expect(todoHomepage.description).toEqual('todoOne');
  });

  //there is one TODO existing in the list currently
  it('should remove deleted todos from list', function () {
    // Hover the only existing todo // click the delete button
    todoHomepage.deleteTodo('todoOne');
    // Verify no items are in list
    expect(todoHomepage.todoList.count()).toEqual(0);
  });

  // the TODO list is now empty
  it('should only show Active todos in Active list', function () {
    todoHomepage.addTodo('Test Description');
    // click Active href
    todoHomepage.activeButton.click();
    // Verify that there is one in the active list
    expect(todoHomepage.activeItems.count()).toEqual(1);
  });

  // there is now one item in the ALL and ACTIVE list, that will be 'checked' then verified as completed
  it('should only show Completed todos in Completed list', function () {
    // click completed checkbox
    todoHomepage.checkbox.click();
    // click Completed Link
    todoHomepage.completedButton.click();
    // verify there is one item in the completed list
    expect(todoHomepage.completedItems.count()).toEqual(1);
  }, 10000); //this is how to set a timeout, there may be a 5 second timeout on tests.


  it("should remove all list items when all are selected and cleared", function () {
    // enter todo description
    todoHomepage.addTodo('001');
    // enter todo description
    todoHomepage.addTodo('002');
    //get and click the select all todos button
    todoHomepage.checkAllButton.click();
    //click clear completed
    todoHomepage.clearCompletedButton.click();
    //verify that 'Clear Completed' button no longer exists
    expect(todoHomepage.clearCompletedButton.toBe == null);
  });
});
