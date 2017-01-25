import 'reflect-metadata';
// Angular wants it
import 'zone.js/dist/zone';
// Styles
import "./main.scss";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

//enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);