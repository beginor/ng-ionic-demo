import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '@ionic/angular';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private splitPaneVisible = false;

    constructor(
        private router: Router
    ) { }

    public onVisibleChange($event: CustomEvent): void {
        this.splitPaneVisible = $event.detail.visible;
    }

    public navigate(url: string, menu: Menu) {
        if (!this.splitPaneVisible) {
            menu.toggle();
        }
        this.router.navigateByUrl(url);
    }

}
