import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncateString' })

export class TruncateString implements PipeTransform {
    transform(value: any, charsCount?: number, ...args: any[]) {
        if (!value) {
            return value;
        }
        const limit = charsCount ? charsCount : 30;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    }

}