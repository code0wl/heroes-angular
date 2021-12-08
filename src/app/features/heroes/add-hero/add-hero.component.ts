import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddHeroComponent {}
