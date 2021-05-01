import { CommonModule } from "@angular/common";
import { compileComponentFromMetadata } from "@angular/compiler";
import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { ServicesComponent } from "./services/services.component";

const routes: Routes = [{
    path: '',
    component: ServicesComponent
}]

@NgModule({
    declarations: [ServicesComponent],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        MaterialModule
    ]
})
export class ServiceModule { }