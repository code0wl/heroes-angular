import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
})
export class CardContentComponent {
  @Input() name;
  @Input() description;
}
