import { Component } from "@angular/core";
import { SessionService } from "src/app/shared/services/session.services";

@Component({
    selector: 'app-tmp',
    templateUrl: './tmp.component.html'
})
export class TmpComponent {

    session
    constructor(
        private sessionService: SessionService
    ) {
        this.session = this.sessionService.session;
    }
}