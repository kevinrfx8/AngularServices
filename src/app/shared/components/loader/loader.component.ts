import { Component } from "@angular/core";
import { LoaderService } from "../../services/loader.service";

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

    loader;

    constructor(
        private loaderService: LoaderService
    ) {
        this.loader = this.loaderService.loader;
    }
}
