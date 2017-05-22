import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdCoreModule, MdIconModule,
  MdInputModule,
  MdLineModule, MdListModule, MdMenuModule, MdOptionModule, MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule,
  MdRippleModule, MdSliderModule, MdSlideToggleModule, MdSnackBarModule, MdTabsModule, MdToolbarModule, MdTooltipModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoFilter } from './todo/todo-filter.pipe';
import { TodoItemComponent } from './todo/todo-item.component';
import { TodoListComponent } from './todo/todo-list.component';
import { TodoService } from './todo/todo.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MATERIAL_IMPORTS = [
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdIconModule,
  MdInputModule,
  MdLineModule,
  MdListModule,
  MdMenuModule,
  MdOptionModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
];

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MATERIAL_IMPORTS
  ],
  exports:      [
    MATERIAL_IMPORTS
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFilter,
    TodoItemComponent
  ],
  providers:    [ TodoService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}
