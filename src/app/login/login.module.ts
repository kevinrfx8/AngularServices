import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModule } from "../shared/material.module";
import { LoginComponent } from "./login/login.component";
import { TmpComponent } from "./login/tmp/tmp.component";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent,
        TmpComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forChild(routes),
        MaterialModule,
        HttpClientModule
    ]

})
export class LoginModule { }