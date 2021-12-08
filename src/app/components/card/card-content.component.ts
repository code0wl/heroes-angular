import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
})
export class CardContentComponent {
  @Input() name;
  @Input() description;
  @Input() actionLabel;
  @Output() primaryClick = new EventEmitter();

  public handlePrimaryClick($event): void {
    this.primaryClick.emit($event);
  }
}
