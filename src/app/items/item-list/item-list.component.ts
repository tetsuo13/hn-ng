import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';

import { Item } from '../shared/item.model';
import { AlgoliaApiService } from '../shared/algolia-api.service';
import { FrontPage } from '../shared/front-page.model';

@Component({
  selector: 'app-items',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy {
  items: Item[];
  page: number;
  totalPages: number;
  itemsPerPage: number;
  loading: boolean;

  private subscription: Subscription;

  constructor(private readonly itemService: AlgoliaApiService,
    private readonly spinner: NgxSpinnerService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.spinner.show();

    this.route.params.subscribe((params: Params) => {
      const page = params['page'];
      this.page = page !== undefined ? +page : 0;
    });

    this.subscription = this.itemService.getTopItems(this.page)
      .subscribe((frontPage: FrontPage) => {
        this.items = frontPage.hits;
        this.page = frontPage.page;
        this.totalPages = frontPage.nbPages;
        this.itemsPerPage = frontPage.hitsPerPage;
        this.spinner.hide();
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
