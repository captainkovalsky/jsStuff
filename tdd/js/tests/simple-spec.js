describe('angularjs homepage todo list', function () {
    function getTodoList() {
        return element.all(by.repeater('todo in todoList.todos'));
    }

    beforeEach(function () {
        browser.get('http://www.angularjs.org');
    })

    it('should add a todo', function () {
        element(by.model('todoList.todoText')).sendKeys('write a protractor test');
        element(by.css('[value="add"]')).click();

        var todoList = getTodoList();
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });

    it('should be empty after archive', function () {

        var todoList = getTodoList();
        expect(todoList.count()).toEqual(2);
        todoList.forEach(function(row){
          
        });
    });
});