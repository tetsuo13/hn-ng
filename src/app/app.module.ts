import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    CommentTreeComponent,
    FooterComponent,
    HeaderComponent,
    HostnamePipe,
    ItemListComponent,
    ItemNodeComponent,
    ItemDetailComponent,
    NumberofchildrenPipe,
    TimeagoPipe,
    UserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    AlgoliaApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
