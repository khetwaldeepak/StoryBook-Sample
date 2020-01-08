import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-sessiontimeout',
  template: `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Session Timeout</h5>
   
    <p class="card-text">Your session will time out in 20 seconds</p>
    <a href="#" class="card-link">Log out</a>
    <a href="#" class="card-link">Cancel</a>
  </div>
</div>
  `,
  styles: []
})
export class SessiontimeoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
