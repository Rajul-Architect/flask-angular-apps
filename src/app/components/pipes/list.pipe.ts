import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'list'
})
export class ListPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    let filtered = [];
    if (value && args[0] !== '') {
      filtered = value.filter(x => { return x[args[1]].toLowerCase().indexOf(args[0].toLowerCase()) !== -1 });
      return filtered;
    }
    return value;
  }

}
