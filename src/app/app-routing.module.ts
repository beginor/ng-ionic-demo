import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { TabsComponent } from './components/tabs/tabs.component';
import { MustangComponent } from './components/mustang/mustang.component';
import { CamaroComponent } from './components/camaro/camaro.component';
import { ChargerComponent } from './components/charger/charger.component';

const routes: Routes = [
    { path: '', redirectTo: '/tabs/(tab1:mustang)', pathMatch: 'full' },
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
            useHash: false,
            enableTracing: !environment.production
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
