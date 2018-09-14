// src/app/app.module.ts

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component'; //1

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent //1
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
