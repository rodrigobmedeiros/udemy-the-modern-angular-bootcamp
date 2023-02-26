import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (!value) {
      return null;
    }
    return parseFloat(value) * 1.60934;
  }

}
