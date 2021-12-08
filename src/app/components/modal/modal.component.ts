import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() message;
  @Input() isOpen = false;
  @Output() handleYes = new EventEmitter();
  @Output() handleNo = new EventEmitter();

  onNo() {
    this.handleNo.emit();
  }

  onYes() {
    this.handleYes.emit();
  }
}
