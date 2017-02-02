import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing'
import { TodoService } from './todo.service';

import { spy, stub} from 'sinon';
import { expect } from 'chai';
import { TodoFilter } from './todo-filter.pipe';

import { 
  BrowserDynamicTestingModule, 
  platformBrowserDynamicTesting 
} 
from '@angular/platform-browser-dynamic/testing';



describe(TodoListComponent.name, () => {
    let todoServiceMock: TodoService = <any> { getTodos: () => {} };
    let fixture: ComponentFixture<TodoListComponent>;

    before(() => {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });

    after(() => {
        TestBed.resetTestEnvironment();
    })
    beforeEach((done) => {
        //TestBed.resetTestingModule();
        TestBed.configureTestingModule({ 
            declarations: [
                TodoListComponent,
                TodoFilter
            ],
            imports: [
                FormsModule
            ],
            providers: [ 
                { provide: TodoService, useValue: todoServiceMock }
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]

        });
        fixture = TestBed.createComponent(TodoListComponent);
            done();
        //})
    });

    it('calls service to get todos', () => {
        let getTodosStub = fixture.componentInstance['todoService'].getTodos = stub(todoServiceMock, 'getTodos').returns([]);
        fixture.detectChanges();
        expect(getTodosStub.called).to.eq(true);
    });
});