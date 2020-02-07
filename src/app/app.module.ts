import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { TimeagoPipe } from './items/timeago.pipe';
import { HostnamePipe } from './items/hostname.pipe';
import { ItemNodeComponent } from './items/item-node/item-node.component';
import { CommentTreeComponent } from './items/item-detail/comment-tree/comment-tree.component';
import { AlgoliaApiService } from './items/shared/algolia-api.service';
import { UserComponent } from './users/user/user.component';
import { NumberofchildrenPipe } from './items/numberofchildren.pipe';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    ItemDetailComponent,
    TimeagoPipe,
    HostnamePipe,
    ItemNodeComponent,
    CommentTreeComponent,
    UserComponent,
    NumberofchildrenPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    AlgoliaApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
