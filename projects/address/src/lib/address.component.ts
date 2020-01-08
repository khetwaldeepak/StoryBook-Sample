import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';
@Component({
  selector: 'ui-address',
  template: `
  <form>
    <div class="form-group">
      <label for ="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" aria-describedby="firstName">
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName">
    </div>
    <div class="form-group">
      <label for="address1">Address 1</label>
      <input type="text" class="form-control" id="address1">
    </div>
    <div class="form-group">
      <label for="address2">Address 2</label>
      <input type="text" class="form-control" id="address2">
    </div>
    <button (click)="onClick.next()" class="btn btn-primary">Submit</button>
  </form>
   
  `,
  styles: []
})
export class AddressComponent implements OnInit {
  @Output() onClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
