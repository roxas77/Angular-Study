// src/app/hero.service.ts

import { Injectable } from '@angular/core'; //1

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable() //1
export class HeroService {
  getHeroes(): Promise<Hero[]> { //2
    return Promise.resolve(HEROES);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> { //3
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
