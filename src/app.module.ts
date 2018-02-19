import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule


} from '@angular/material';


import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodoFilter} from './todo/todo-filter.pipe';
import {TodoItemComponent} from './todo/todo-item.component';
import {TodoListComponent} from './todo/todo-list.component';
import {TodoService} from './todo/todo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const MATERIAL_IMPORTS = [
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatGridListModule,
    MatTabsModule,
    MatMenuModule
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MATERIAL_IMPORTS
    ],
    exports: [
        MATERIAL_IMPORTS
    ],
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoFilter,
        TodoItemComponent
    ],
    providers: [
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
