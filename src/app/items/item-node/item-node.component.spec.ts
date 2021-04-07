import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ItemNodeComponent } from './item-node.component';
import { HostnamePipe } from '../hostname.pipe';
import { TimeagoPipe } from '../timeago.pipe';
import { NumberofchildrenPipe } from '../numberofchildren.pipe';

describe('ItemNodeComponent', () => {
  let component: ItemNodeComponent;
  let fixture: ComponentFixture<ItemNodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ItemNodeComponent, HostnamePipe, TimeagoPipe, NumberofchildrenPipe],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNodeComponent);
    component = fixture.componentInstance;

    component.item = {
      created_at_i: 42,
      title: '',
      url: 'https://example.com',
      author: 'foobar',
      points: 42,
      objectID: 13,
      num_comments: 0,
      text: '',
      type: 'story',
      children: []
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
