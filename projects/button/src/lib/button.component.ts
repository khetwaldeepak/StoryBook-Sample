import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
  <button [className] = "customClass"  (click)="onClick.next()">{{text}}</button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() customClass: string;
  @Input() disabled: boolean;
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
