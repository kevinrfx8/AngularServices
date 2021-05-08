import { HttpClient } from "@angular/common/http";
import { _ParseAST } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    _loader: BehaviorSubject<any> = new BehaviorSubject<any>(false);
    loader: Observable<any> = this._loader.asObservable();

    constructor(
        private httpClient: HttpClient
    ) {

    }
    show() {
        this._loader.next(true);
    }
    hide() {
        setTimeout(() => {
            this._loader.next(false);
        }, 250);

    }
}