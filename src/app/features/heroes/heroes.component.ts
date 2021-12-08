import { Component } from '@angular/core';
import { Hero } from '@models/hero';
import { Observable, take } from 'rxjs';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {
  selected: Hero;
  heroes$: Observable<Hero[]>;
  heroToDelete: Hero;

  constructor(private readonly heroService: HeroService) {
    this.heroes$ = heroService.entities$;
    this.getHeroes();
  }

  add(hero: Hero) {
    this.heroService.add(hero);
  }

  askToDelete(hero: Hero) {
    const prompt = confirm(`Would you like to delete ${hero.name}?`);

    if (prompt) {
      this.deleteHero(hero);
    }
  }

  clear() {
    this.selected = null;
  }

  deleteHero(hero) {
    if (hero) {
      this.heroService.delete(hero.id).pipe(take(1)).subscribe();
    }
    this.clear();
  }

  getHeroes() {
    this.heroService.getAll();
    this.clear();
  }

  save(hero: Hero) {
    if (this.selected && this.selected.name) {
      this.update(hero);
    } else {
      this.add(hero);
    }
  }

  update(hero: Hero) {
    this.heroService.update(hero);
  }
}
