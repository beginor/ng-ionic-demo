import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '@ionic/angular';
import { UiService } from '../services/ui.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Input()
    public menu: Menu;

    constructor(
        private router: Router,
        private ui: UiService
    ) { }

    public ngOnInit(): void { }

    public navigate(url: string) {
        if (!this.ui.splitPaneVisible) {
            this.menu.toggle();
        }
        this.router.navigateByUrl(url);
    }

}
