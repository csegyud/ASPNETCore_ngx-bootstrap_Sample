import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

// Load as many modules as you want to use. 
// For demonstration purposes, I load AlertModule only.
import {
    AlertModule, 
    //AccordionModule,
    //ButtonsModule,
    //CarouselModule,
    //CollapseModule,
    //BsDatepickerModule,
    //BsDropdownModule,
    //ModalModule,
    //PaginationModule,
    //ProgressbarModule,
    //SortableModule,
    //TabsModule,
    //TimepickerModule,
    //TooltipModule,
    //TypeaheadModule
} from 'ngx-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,

        // Bootstrap ----------------------------
        AlertModule.forRoot(),
        //AccordionModule.forRoot(),
        //ButtonsModule.forRoot(),
        //CarouselModule.forRoot(),
        //CollapseModule.forRoot(),
        //BsDatepickerModule.forRoot(),
        //BsDropdownModule.forRoot(),
        //ModalModule.forRoot(),
        //PaginationModule.forRoot(),
        //ProgressbarModule.forRoot(),
        //SortableModule.forRoot(),
        //TabsModule.forRoot(),
        //TimepickerModule.forRoot(),
        //TooltipModule.forRoot(),
        //TypeaheadModule.forRoot(),
        //---------------------------------------

        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
