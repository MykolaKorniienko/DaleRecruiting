import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './wiews/list/list.component';
import { EditComponent } from './wiews/edit/edit.component';
import { SearchComponent } from './wiews/search/search.component';
import { SearchListComponent } from './wiews/search-list/search-list.component';

const routes: Routes = [
  { path: 'users', component: ListComponent },
  { path: 'users/add', component: EditComponent },
  { path: 'users/:userId', component: EditComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search-list', component: SearchListComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
