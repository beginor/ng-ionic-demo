import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.component.html',
    styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

    constructor(
        private popoverCtl: PopoverController
    ) { }

    public ngOnInit(): void {
    }

    public closePopover(index: number): void {
        this.popoverCtl.dismiss(index, 'item');
    }

}
