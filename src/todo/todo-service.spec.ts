
import { expect } from 'chai';
import { TodoService } from './todo.service';

describe(TodoService.name, () => {
    let todoService: TodoService;
    before(() => {
        todoService = new TodoService();
    })
    it('returns todos', () => {
        expect(todoService.getTodos()).to.deep.eq([{ done: false, name: 'foo' }, { done: false, name: 'bar' }]);
    });
});
