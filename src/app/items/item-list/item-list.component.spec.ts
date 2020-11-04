import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ItemListComponent } from './item-list.component';
import { AlgoliaApiService } from '../shared/algolia-api.service';
import { TimeagoPipe } from '../timeago.pipe';
import { ItemNodeComponent } from '../item-node/item-node.component';
import { HostnamePipe } from '../hostname.pipe';
import { NumberofchildrenPipe } from '../numberofchildren.pipe';

describe('ItemsComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemListComponent,
        TimeagoPipe,
        ItemNodeComponent,
        HostnamePipe,
        NumberofchildrenPipe
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [AlgoliaApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
