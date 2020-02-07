import { Component, Input } from '@angular/core';

import { Item } from '../shared/item.model';

@Component({
  selector: '[app-item-node], app-item-node',
  templateUrl: './item-node.component.html',
  styleUrls: ['./item-node.component.css']
})
export class ItemNodeComponent {
  @Input() item: Item;

  constructor() { }

  showCommentLink(item: Item): boolean {
    return item.num_comments !== null;
  }
}
