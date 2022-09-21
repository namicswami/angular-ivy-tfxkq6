import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

//App Components
import { AppComponent } from './app.component';
import {AppMainComponent} from './app.main.component';
import {AppTopBarComponent} from './topbar.component';

//PrimeNG Components for the demo page
import {AccordionModule} from 'primeng/accordion';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {PaginatorModule} from 'primeng/paginator';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';


@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule, 
                  AppRoutingModule,
                  BrowserAnimationsModule,
                  HttpClientModule,
                  AccordionModule,
                   BadgeModule,
                  BreadcrumbModule,
                  DropdownModule,
                  FileUploadModule,
                  MenuModule,
                 MenubarModule,
                PaginatorModule,
                SidebarModule,
                TableModule,
                 ToolbarModule,
                 TreeModule,
                TreeTableModule ],
  declarations: [ AppComponent,
                  AppMainComponent,
                  AppTopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
