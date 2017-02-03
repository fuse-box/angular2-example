import * as _ from 'lodash';
import { TodoService } from './todo.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
    selector: 'todo-list',
    template: require('./todo-list.component.html')
})
export class TodoListComponent implements OnInit {
    todos: Todo[];
    newTodo: Todo;
    todoLists: string[];

    // This part is a little weird. @Inject shouldnt be necessary with TS, but it is with fuse-box
    constructor( @Inject(TodoService) private todoService: TodoService) { }

    ngOnInit() {
        this.todoLists = ['All', 'Pending', 'Done'];
        this.todos = this.todoService.getTodos();
        this.resetNewTodo();
    }
    onKeyUp(e: any) {
        if (e.keyCode === 13 && this.newTodo.name) {
            this.todos.push(this.newTodo);
            this.resetNewTodo();
        }
    }
    resetNewTodo() {
        this.newTodo = new Todo('', false);
    }
    deleteTodo(todo: Todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
    shouldShowClearAll() {
        return _.some(this.todos, { done: true });
    }
    clearAllDone() {
        this.todos = _.filter(this.todos, t => !t.done);
    }
}