describe('TodoMVC app', function() {
  it('should have the right title', function() {
    browser.get('http://localhost:8080/');
    var title = browser.getTitle();
    expect(title).toBe('Angular2 • TodoMVC');
  });
});
