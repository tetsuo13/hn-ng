import { Item } from './item.model';

export class FrontPage {
  hits: Item[];

  /** Current page. Zero-based. */
  page: number;

  /** Total number of pages available. One-based. */
  nbPages: number;

  hitsPerPage: number;
}
