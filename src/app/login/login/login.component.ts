import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoaderService } from "src/app/shared/services/loader.service";
import { SessionService } from "src/app/shared/services/session.services";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {


    credentials: FormGroup;
    session
    error;
    constructor(
        private sesssionService: SessionService,
        private loaderService: LoaderService
    ) {
        this.session = this.sesssionService.session;
        this.credentials = new FormGroup({
            userName: new FormControl("", [Validators.required, Validators.minLength(4)]),
            password: new FormControl("", [Validators.required, Validators.minLength(4)])
        })
    }

    async login() {
        this.error = null;
        this.loaderService.show();
        try {
            await this.sesssionService.login(this.credentials)
        }
        catch (e) {
            this.error = "Credenciales incorrectas"
        }
        this.loaderService.hide();
    }
}