import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoService } from './todo/todo.service';
import { TodoFilter } from './todo/todo-filter.pipe';
import { TodoItemComponent } from './todo/todo-item.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoFilter,
        TodoItemComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})
export class AppModule { }
