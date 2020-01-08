import { NgModule } from '@angular/core';
import { SessiontimeoutComponent } from './sessiontimeout.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [SessiontimeoutComponent],
  imports: [
    ModalModule.forRoot()
  ],
  exports: [SessiontimeoutComponent]
})
export class SessiontimeoutModule { }
