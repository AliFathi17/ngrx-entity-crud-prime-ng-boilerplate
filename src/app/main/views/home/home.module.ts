import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeMainComponent} from './home-main/home-main.component';
import {HomeRoutingModule} from './home-routing.module';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {LogoutButtonModule} from "@views/login/components/logout-button/logout-button.component";

@NgModule({
  declarations: [HomeMainComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        PanelModule,
        CardModule,
        ButtonModule,
        RippleModule,
        LogoutButtonModule
    ],
  providers: [],
  entryComponents: []
})
export class HomeModule {
}
