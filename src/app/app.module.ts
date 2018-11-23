import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CamaroComponent } from './components/camaro/camaro.component';
import { ChargerComponent } from './components/charger/charger.component';
import { MustangComponent } from './components/mustang/mustang.component';
import { PopoverComponent } from './components/popover/popover.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CamaroComponent,
        ChargerComponent,
        MustangComponent,
        PopoverComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        IonicModule.forRoot(),
        AppRoutingModule
    ],
    entryComponents: [PopoverComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
