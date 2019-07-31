import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UiService } from './services/ui.service';

@NgModule({
    declarations: [NavBarComponent],
    imports: [
        CommonModule,
        RouterModule,
        IonicModule
    ],
    exports: [
        NavBarComponent
    ]
})
export class AppCommonModule { }

export * from './services/ui.service';
