export class Item {
  created_at_i: number;
  type: string;

  /** The title of the story, poll or job. HTML. */
  title: string;

  url: string;

  /** The username of the item's author. */
  author: string;

  points: number;

  /** The item's unique id. */
  objectID: number;

  /** The comment, story or poll text. HTML. */
  text: string;

  /**
   * Only populated when viewing the front page. In all other cases, the total
   * count of children should be used. Always use numberofchildren pipe
   * instead.
   */
  num_comments: number;

  children: Item[];
}
