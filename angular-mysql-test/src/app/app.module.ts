import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchListComponent } from './search-list/search-list.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmModalComponent]
})
export class AppModule { }
