import { PipeTransform, Pipe } from '@angular/core';
import timeago from 'epoch-timeago';

/**
 * Convert Unix time to a relative time string e.g., "4 hours ago"
 */
@Pipe({ name: 'timeago' })
export class TimeagoPipe implements PipeTransform {
  transform(value: number): string {
    return timeago(value * 1000);
  }
}
