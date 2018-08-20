import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, App } from '@ionic/angular';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CamaroComponent } from './components/camaro/camaro.component';
import { ChargerComponent } from './components/charger/charger.component';
import { MustangComponent } from './components/mustang/mustang.component';

@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        CamaroComponent,
        ChargerComponent,
        MustangComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        // NgbModule,
        IonicModule.forRoot(),
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
