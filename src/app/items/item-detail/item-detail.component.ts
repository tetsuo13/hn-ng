import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { Item } from '../shared/item.model';
import { AlgoliaApiService } from '../shared/algolia-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  id: number;
  item: Item;
  loading: boolean;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private itemService: AlgoliaApiService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loading = true;
    this.spinner.show();

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.subscription = this.itemService.getItem(this.id)
        .subscribe((item: Item) => {
          this.item = item;

          // TODO: Go through item.text to replace any links to https://news.ycombinator.com/item?id=123456789 with our own

          this.spinner.hide();
          this.loading = false;
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
