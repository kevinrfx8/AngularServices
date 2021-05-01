import { HttpClient } from "@angular/common/http";
import { _ParseAST } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    _session: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    session: Observable<any> = this._session.asObservable();

    constructor(
        private httpClient: HttpClient
    ) {

    }
    getSession() {
        this._session.getValue();
    }

    setSession(session) {
        this._session.next(session)
    }

    login() {
        this.httpClient.post("https://dev.ti.sithec.com.mx/api/Users/in/loging",
            {
                "userName": "diego",
                "password": "1234"
            }
        ).toPromise()
            .then(() => {
                this._session.next(true);
            })
    }

    close() {
        this._session.next(null);
    }
}