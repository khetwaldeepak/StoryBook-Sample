import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-customevent',
  template: `
  <div class="row">
    <div class="col-md-6 float-left">
      <label>Start Date</label>
      <input type="date" class="form-control">
     
    </div>
    <div class="col-md-6">
      <label>End Date</label>
      <input type="date" class="form-control">
    </div>
  </div>
  <div class="row">&nbsp; </div>
  <div class="row">
    <div class="col-md-6">
      <input type="text" class="form-control" placeholder="Filter Events" aria-label="Recipient's username" aria-describedby="basic-addon2">
    </div>
    <div class="col-md-6">
      <button class="btn btn-primary float-right"> New Event </button>
    </div>
  </div>
  <div class="row">&nbsp; </div>
  <div class="row">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Event Name</th>
          <th scope="col">Office</th>
          <th scope="col">City</th>
          <th scope="col">Event Owner</th>
          <th scope="col">Event Date</th>
          <th scope="col">Seats Remaining</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>COM Event in 2020</td>
          <td>Orchard Park</td>
          <td>Amlin</td>
          <td>mk mk</td>
          <td>01/22/2020</td>
          <td>53</td>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styles: []
})
export class CustomeventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
