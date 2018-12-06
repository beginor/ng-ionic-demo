import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MustangComponent } from './mustang/mustang.component';
import { CamaroComponent } from './camaro/camaro.component';
import { ChargerComponent } from './charger/charger.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'mustang',
                outlet: 'tab1',
                component: MustangComponent
            },
            {
                path: 'mustang',
                outlet: 'tab2',
                component: CamaroComponent
            },
            {
                path: 'charger',
                outlet: 'tab3',
                component: ChargerComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
