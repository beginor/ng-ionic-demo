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
                component: MustangComponent
            },
            {
                path: 'camaro',
                component: CamaroComponent
            },
            {
                path: 'charger',
                component: ChargerComponent
            },
            { path: '', redirectTo: 'mustang', pathMatch: 'full' }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
