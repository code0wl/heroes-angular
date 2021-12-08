import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '@models/hero';

@Component({
    selector: 'app-card-content',
    templateUrl: './card-content.component.html',
})
export class CardContentComponent {
    @Input() readonly cardDetails: Hero;
    @Input() readonly actionLabel: string;
    @Output() readonly primaryClick = new EventEmitter();

    public handlePrimaryClick($event): void {
        this.primaryClick.emit($event);
    }
}
