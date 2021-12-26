import { PipeTransform ,Pipe } from '@angular/core';


@Pipe({
  name: "orderBy",
  pure: true
})
export class OrderByPipe implements PipeTransform{
  transform(value: any[], propertyName: string): any[] {
    if (propertyName)
      return value.sort((a: any, b: any) => b[propertyName].localeCompare(a[propertyName]));
    else
      return value;
  } 
  // transform(array: Array<string>, args: string): Array<string> {
  //   array.sort((a: any, b: any) => {
  //     if (a < b) {
  //       return -1;
  //     } else if (a > b) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   });
  //   return array;
  // }
}