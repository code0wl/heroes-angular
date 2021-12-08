import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Villain } from '@models/villain';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VillainDetailComponent implements OnChanges {
  @Input() villain: Villain;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Villain>();

  addMode = false;
  editingVillain: Villain;

  ngOnChanges() {
    if (this.villain && this.villain.id) {
      this.editingVillain = { ...this.villain };
      this.addMode = false;
    } else {
      this.editingVillain = { id: undefined, name: '', description: '' };
      this.addMode = true;
    }
  }

  public clear(): void {
    this.unselect.emit();
  }

  public saveVillain(): void {
    this.save.emit(this.editingVillain);
    this.clear();
  }
}
