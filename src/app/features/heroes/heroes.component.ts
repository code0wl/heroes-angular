import { Component } from '@angular/core';
import { Hero } from '@models/hero';
import { Observable, take } from 'rxjs';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {
  public readonly heroes$: Observable<Hero[]>;

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

  deleteHero(hero) {
    if (hero) {
      this.heroService.delete(hero.id).pipe(take(1)).subscribe();
    }
  }

  getHeroes() {
    this.heroService.getAll();
  }
}
