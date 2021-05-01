import { Component } from "@angular/core";
import { SessionService } from "src/app/shared/services/session.services";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    session


    constructor(
        private sesssionService: SessionService
    ) {
        this.session = this.sesssionService.session;

        let count = 0;
        setInterval(() => {
            this.sesssionService.setSession(count++);
        }, 1000)
    }
}