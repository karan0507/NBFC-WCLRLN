import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter',
  pure: false
})
export class ArrayFilterPipe implements PipeTransform {

  transform(items: any[], filter): any {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.name.indexOf(filter.name) !== -1);
}

}
