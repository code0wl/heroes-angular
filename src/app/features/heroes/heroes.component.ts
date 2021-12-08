import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '@models/hero';
import { take } from 'rxjs';
import { HeroService } from './services/hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent {
    public readonly heroes$ = this.heroService.entities$;
    public readonly loading$ = this.heroService.loading$;

    constructor(private readonly heroService: HeroService) {
        this.heroService.getAll();
    }

    public confirm(hero: Hero): void {
        const prompt = confirm(`Would you like to delete ${hero.name}?`);

        if (prompt) {
            this.heroService.delete(hero.id).pipe(take(1)).subscribe();
        }
    }
}
