import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MustangComponent } from './components/mustang/mustang.component';
import { CamaroComponent } from './components/camaro/camaro.component';
import { ChargerComponent } from './components/charger/charger.component';

const routes = [
    { path: '', redirectTo: '/tabs/(tab1:mustang)', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'tabs',
        component: TabsComponent,
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
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
