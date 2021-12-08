import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-raised-button',
  template: `
    <button mat-raised-button (click)="handleClick()">
      <span>{{ label }}</span>
    </button>
  `,
})
export class RaisedButtonComponent {
  @Input() label;
  @Input() item;

  @Output() clicked = new EventEmitter<any>();

  public handleClick(): void {
    this.clicked.emit(this.item);
  }
}
