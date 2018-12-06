import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsRoutingModule } from './tabs-routing.module';
import { HomeComponent } from './home/home.component';
import { MustangComponent } from './mustang/mustang.component';
import { CamaroComponent } from './camaro/camaro.component';
import { ChargerComponent } from './charger/charger.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
    declarations: [
        HomeComponent,
        MustangComponent,
        CamaroComponent,
        ChargerComponent,
        PopoverComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        TabsRoutingModule
    ]
})
export class TabsModule { }
