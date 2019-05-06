import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestoAllComponent } from './resto-all/resto-all.component';
import { RestoNewComponent } from './resto-new/resto-new.component';
import { RestoEditComponent } from './resto-edit/resto-edit.component';
import { ReviewAllComponent } from './review-all/review-all.component';
import { ReviewNewComponent } from './review-new/review-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/restaurants' },
  { path: 'restaurants', component: RestoAllComponent, children: [
      { path: ':id/edit/', component: RestoEditComponent },
  ]},
  { path: 'restaurants', component: RestoAllComponent},
  { path: 'restaurants/:id/edit/', component: RestoEditComponent },
  { path: 'restaurants/new', component: RestoNewComponent },
  { path: 'restaurants/:id', component: ReviewAllComponent, children: [
  { path: 'review', component: ReviewNewComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
