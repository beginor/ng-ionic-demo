import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
    selector: 'app-mustang',
    templateUrl: './mustang.component.html',
    styleUrls: ['./mustang.component.scss']
})
export class MustangComponent implements OnInit {

    constructor(
        private popoverCtl: PopoverController
    ) { }

    public ngOnInit(): void {
    }

    public async showPopover($event: Event): Promise<void> {
        const popover = await this.popoverCtl.create({
            component: PopoverComponent,
            componentProps: {},
            event: $event,
            showBackdrop: true,
            cssClass: 'ion-popover'
        });
        await popover.present();
        const result = await popover.onDidDismiss();
        console.log(result);
    }

}
