import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MustangComponent } from './components/mustang/mustang.component';
import { CamaroComponent } from './components/camaro/camaro.component';
import { ChargerComponent } from './components/charger/charger.component';

const routes: Routes = [
    { path: '', redirectTo: '/home/(tab1:mustang)', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'mustang',
                outlet: 'tab1',
                component: MustangComponent
              },
              {
                path: 'camaro',
                outlet: 'tab2',
                component: CamaroComponent
              },
              {
                path: 'charger',
                outlet: 'tab3',
                component: ChargerComponent
              }
        ]
    },
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false,
            enableTracing: !environment.production
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
