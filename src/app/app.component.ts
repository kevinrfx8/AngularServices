import { Component } from '@angular/core';
import { SessionService } from './shared/services/session.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularServicios';
  isOpen

  constructor(
    private sessionService: SessionService
  ) {
    this.isOpen = this.sessionService.session;
  }

  login() {
    this.sessionService.login();
  }
  close() {
    this.sessionService.close();
  }
}
