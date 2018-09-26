import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './wiews/side-menu/side-menu.component';
import { ListComponent } from './wiews/list/list.component';
import { EditComponent } from './wiews/edit/edit.component';
import { SearchComponent } from './wiews/search/search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { ConfirmModalComponent } from './wiews/confirm-modal/confirm-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchListComponent } from './wiews/search-list/search-list.component';
import { MainService } from "./services/main.service";
import { SearchFilterTransferService } from "./services/search-filter-transfer.service";
import {Router} from "@angular/router";

import{TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ListComponent,
    EditComponent,
    SearchComponent,
    ConfirmModalComponent,
    SearchListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalDialogModule.forRoot(),
    NgbModule,
    TableModule
  ],
  providers: [MainService, SearchFilterTransferService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmModalComponent]
})
export class AppModule { }
