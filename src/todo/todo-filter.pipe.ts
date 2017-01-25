import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo.model';
import * as _ from 'lodash';


@Pipe({ name: 'todoFilter', pure: false })
export class TodoFilter implements PipeTransform {
    transform(todos: Todo[], listName: string): Todo[] {
        if (listName === 'All') {
            return todos;
        } else if (listName === 'Pending') {
            return _.filter(todos, (t: Todo) => !t.done);
        } else if (listName === 'Done') {
            return _.filter(todos, (t: Todo) => t.done);
        } else {
            return [];
        }
    }
}