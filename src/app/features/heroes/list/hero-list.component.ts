import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '@models/hero';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListComponent {
    @Input() heroes: Hero[];
    @Output() deleted = new EventEmitter<Hero>();

    public deleteHero(hero: Hero): void {
        this.deleted.emit(hero);
    }
}
