import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './shared/item.model';

/**
 * Only when viewing the front page will num_comments will be populated. In
 * other situations children will be populated instead. Always use this pipe
 * regardless of the situation in order to determine how many comments an item
 * has.
 */
@Pipe({ name: 'numberofchildren' })
export class NumberofchildrenPipe implements PipeTransform {
  transform(value: Item): number {
    // No comments value and no children to count. Easiest case.
    if (value.num_comments === 0 && (!value.children || value.children.length === 0)) {
      return 0;
    } else if (value.num_comments > 0) {
      // Number of comments value set.
      return value.num_comments;
    } else if (value.type !== "story") {
      // Not all types can contain comments.
      return null;
    }

    return this.flattenChildren(value.children).length;
  }

  /**
   * Recursive method to flatten a collection of children of children to a
   * depth of 1. Will return the final result set.
   * @param children Collection of children.
   * @param result Current result set.
   */
  private flattenChildren(children: Item[], result: Item[] = []): Item[] {
    // Check if this is an end node.
    if (!children.length) {
      result.push(new Item());
    } else {
      for (let i = 0, length = children.length; i < length; i++) {
        if (children[i].children.length) {
          result.push(children[i]);
          this.flattenChildren(children[i].children, result);
        } else if (children[i].text !== null) {
          result.push(children[i]);
        }
      }
    }
    return result;
  }

  /** Previous attempt to simply count all children recursively */
  private countNumberOfChildren(children: Item[]): number {
    return children.reduce((count: number, child: Item): number => {
      if (child.children.length) {
        return count + 1 + this.countNumberOfChildren(child.children);
      }

      // Some comments don't have any text. They won't be displayed so don't
      // count them.
      const included: number = child.text !== null ? 1 : 0;
      return count + included;
    }, 0);
  }
}
