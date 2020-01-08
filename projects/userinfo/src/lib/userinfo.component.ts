import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-userinfo',
  template: `
  <ul class="list-group offset-md-3 col-md-3">
  <li class="list-group-item">Deepak Khetwal</li>
  <li class="list-group-item">8604567890</li>
  <li class="list-group-item">Log out</li>
 
</ul>
  `,
  styles: []
})
export class UserinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
