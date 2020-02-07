import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlgoliaApiService } from 'src/app/items/shared/algolia-api.service';
import { User } from 'src/app/items/shared/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
    private itemService: AlgoliaApiService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const userId: string = params['id'];
      this.subscription = this.itemService.getUser(userId)
        .subscribe((user: User) => {
          this.user = user;
        });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
