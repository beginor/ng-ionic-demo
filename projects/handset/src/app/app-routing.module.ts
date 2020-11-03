import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';

// tslint:disable: max-line-length
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }
];
// tslint:enable: max-line-length

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
