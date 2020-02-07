import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

import { Item } from './item.model';
import { FrontPage } from './front-page.model';
import { User } from './user.model';

@Injectable()
export class AlgoliaApiService {
  private readonly baseUrl: string = 'http://hn.algolia.com/api/v1';

  constructor(private http: HttpClient) { }

  getTopItems(page: number): Observable<FrontPage> {
    console.log(`${this.baseUrl}/search?tags=front_page&page=${page}`);
    return this.http.get<FrontPage>(`${this.baseUrl}/search?tags=front_page&page=${page}`)
      .pipe(retry(3));
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/items/${id}`)
      .pipe(retry(3));
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`)
      .pipe(retry(3));
  }
}
