import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ItemDetailComponent } from './item-detail.component';
import { ItemNodeComponent } from '../item-node/item-node.component';
import { TimeagoPipe } from '../timeago.pipe';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { HostnamePipe } from '../hostname.pipe';
import { NumberofchildrenPipe } from '../numberofchildren.pipe';
import { AlgoliaApiService } from '../shared/algolia-api.service';

describe('ItemComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemDetailComponent,
        ItemNodeComponent,
        TimeagoPipe,
        CommentTreeComponent,
        HostnamePipe,
        NumberofchildrenPipe
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      providers: [AlgoliaApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
