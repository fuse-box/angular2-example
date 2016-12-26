import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
    getTodos() {
        return [
            new Todo('foo'),
            new Todo('bar')
        ];
    }
}