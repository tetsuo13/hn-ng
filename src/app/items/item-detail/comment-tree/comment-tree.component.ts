import { Component, Input } from '@angular/core';

import { Item } from '../../shared/item.model';

@Component({
  selector: '[app-comment-tree]',
  templateUrl: './comment-tree.component.html',
  styleUrls: ['./comment-tree.component.css']
})
export class CommentTreeComponent {
  @Input() children: Item[];

  constructor() { }
}
