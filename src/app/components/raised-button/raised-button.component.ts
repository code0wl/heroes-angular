import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-raised-button',
  templateUrl: './raised-button.component.html',
})
export class RaisedButtonComponent {
  @Input() label;
  @Input() item;
  @Input() color = 'accent';

  @Output() clicked = new EventEmitter<any>();

  public handleClick(): void {
    this.clicked.emit(this.item);
  }
}
