import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RestoAllComponent } from './resto-all/resto-all.component';
import { RestoEditComponent } from './resto-edit/resto-edit.component';
import { RestoNewComponent } from './resto-new/resto-new.component';
import { ReviewAllComponent } from './review-all/review-all.component';
import { ReviewNewComponent } from './review-new/review-new.component';
// import { RestoDeleteComponent } from './resto-delete/resto-delete.component';
import { AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    RestoAllComponent,
    RestoEditComponent,
    RestoNewComponent,
    ReviewAllComponent,
    ReviewNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnLnFq6_t_oEUf8orfUqbo7vaGgDuEl0Y',
      libraries: ['places']
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})

export class AppModule { }
