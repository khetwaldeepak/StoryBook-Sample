import { Component, OnInit } from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';
@Component({
  selector: 'ui-office',
  template: `
    <div class="row">
      <div class="col-md-6">
        <input type="text" class="form-control" placeholder="Filter offices" aria-label="Recipient's username" aria-describedby="basic-addon2">
      </div>
      <div class="col-md-6 float-right">
        <button class="btn btn-primary"> Create New </button>
      </div>
    </div>
    <div class="row">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Office</th>
            <th scope="col">WDA</th>
            <th scope="col">Created</th>
            <th scope="col">Closed Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1030 office</td>
            <td>1030 WIB</td>
            <td>10/30/2019</td>
            <td>12/31/2019</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>1030 office1</td>
            <td>1030 WIB1</td>
            <td>10/31/2019</td>
            <td>12/01/2019</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>1030 office3</td>
            <td>1030 WIB3</td>
            <td>10/30/2019</td>
            <td>11/31/2019</td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: []
})
export class OfficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
