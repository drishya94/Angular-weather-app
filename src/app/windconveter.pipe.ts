import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windconveter'
})
export class WindconveterPipe implements PipeTransform {

  transform(value: number) {

console.log(value);
 		var windspeed = (value * 2.23694);
                return windspeed.toFixed(0) + 'mph';
    return;
  }

}
