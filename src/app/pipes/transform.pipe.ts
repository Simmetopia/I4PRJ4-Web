import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'duration'})
export class TransformPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return 'half';
      case 2:
        return 'full';
      case 3:
        return 'Fullier';
      case 4:
        return 'shizz';
      default:
        return value.toString();
    }
  }
}
