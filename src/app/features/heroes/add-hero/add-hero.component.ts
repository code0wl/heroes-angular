import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '@models/hero';
import { HeroService } from '@features/heroes/services/hero.service';

@Component({
    selector: 'app-add-hero',
    templateUrl: './add-hero.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddHeroComponent {
    public readonly addHeroForm = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        gender: new FormControl('', Validators.required),
    });

    constructor(private readonly heroService: HeroService) {}

    public add(): void {
        const hero: Hero = {
            id: this.addHeroForm.value.name.split(' ').join(''),
            ...this.addHeroForm.value,
        };
        this.heroService.add(hero);
    }
}
