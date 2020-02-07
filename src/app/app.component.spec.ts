import { TestBed, async } from '@angular/core/testing';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { UserComponent } from './users/user/user.component';
import { ItemNodeComponent } from './items/item-node/item-node.component';
import { CommentTreeComponent } from './items/item-detail/comment-tree/comment-tree.component';
import { TimeagoPipe } from './items/timeago.pipe';
import { HostnamePipe } from './items/hostname.pipe';
import { NumberofchildrenPipe } from './items/numberofchildren.pipe';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ItemListComponent,
        ItemDetailComponent,
        UserComponent,
        ItemNodeComponent,
        CommentTreeComponent,
        TimeagoPipe,
        HostnamePipe,
        NumberofchildrenPipe
      ],
      imports: [
        AppRoutingModule,
        NgxSpinnerModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
