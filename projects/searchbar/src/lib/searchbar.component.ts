import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-searchbar',
  template: `
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Customer</button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Emploer</a>
        <a class="dropdown-item" href="#">Customer</a>
        <a class="dropdown-item" href="#">Staff</a>
        <a class="dropdown-item" href="#">Training</a>
      </div>
    </div>
    <input type="text" class="form-control" aria-label="Text input with dropdown button">
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
    </div>
  
</div>
  `,
  styles: []
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
