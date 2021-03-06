import { Component, OnInit } from '@angular/core';
import { UiService } from './common/app-common.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private vm: UiService
    ) { }

    public ngOnInit(): void { }

    public onVisibleChange($event: CustomEvent): void {
        this.vm.splitPaneVisible = $event.detail.visible;
    }

}

