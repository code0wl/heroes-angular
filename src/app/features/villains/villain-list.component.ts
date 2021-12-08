import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Villain } from '@models/villain';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VillainListComponent {
  @Input() villains: Villain[];
  @Output() deleted = new EventEmitter<Villain>();
  @Output() selected = new EventEmitter<Villain>();

  foo(villain: Villain): string {
    return villain.id;
  }

  selectVillain(villain: Villain) {
    this.selected.emit(villain);
  }

  deleteVillain(villain: Villain) {
    this.deleted.emit(villain);
  }
}
