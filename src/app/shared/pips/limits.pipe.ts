import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limits'
})
export class LimitsPipe implements PipeTransform {

  transform(value: any, limit : number): any {
    if(value.length > 10){
      return value.substr(0,limit)+ '...'
    }
    return value ;
  }

}
