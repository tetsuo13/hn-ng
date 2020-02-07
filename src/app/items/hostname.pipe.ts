import { PipeTransform, Pipe } from '@angular/core';

/**
 * Returns just the hostname portion of the URL e.g., "example.com"
 */
@Pipe({ name: 'hostname' })
export class HostnamePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return new URL(value).hostname;
    }
    return value;
  }
}
