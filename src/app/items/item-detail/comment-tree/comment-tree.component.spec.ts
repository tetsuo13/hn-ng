import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CommentTreeComponent } from './comment-tree.component';
import { TimeagoPipe } from '../../timeago.pipe';
import { AlgoliaApiService } from '../../shared/algolia-api.service';

describe('CommentTreeComponent', () => {
  let component: CommentTreeComponent;
  let fixture: ComponentFixture<CommentTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommentTreeComponent, TimeagoPipe],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AlgoliaApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
