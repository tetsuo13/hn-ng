import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { UserComponent } from './users/user/user.component';

export const appRoutes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'news/:page', component: ItemListComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'user/:id', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
