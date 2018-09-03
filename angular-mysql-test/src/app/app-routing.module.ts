import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';

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
