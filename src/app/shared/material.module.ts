import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [MatButtonModule,
        MatInputModule,
        MatFormFieldModule, MatCardModule, MatSidenavModule],
    exports: [MatButtonModule,
        MatInputModule,
        MatFormFieldModule, MatCardModule, MatSidenavModule]
})
export class MaterialModule { }