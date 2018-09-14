// src/app/hero-detail.component.ts

import { Component, Input } from '@angular/core'; //3
import { Hero } from './hero'; //1

@Component({
  selector: 'hero-detail', //2-1
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label>{{hero.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero; //3
}
