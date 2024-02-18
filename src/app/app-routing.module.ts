import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: 'main-page', component: HeaderComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'user-detail/:id', component: UserDetailsComponent },
  { path: 'comments/:id', component: CommentsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'main-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
