import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './todo.model';

console.log('hello world');

@Component({
  selector: 'todo-item',
  template: require('./todo-item.component.html')
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output() deleteTodo = new EventEmitter<Todo>();

           editMode: boolean;

  ngOnInit() {
    this.editMode = false;
  }

  onKeyUp(e: any) {
    if (e.keyCode === 13 && this.todo.name) {
      this.editMode = false;
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  deleteButtonClicked() {
    this.deleteTodo.emit(this.todo);
  }
}