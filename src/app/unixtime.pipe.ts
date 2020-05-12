import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixtime'
})
export class UnixtimePipe implements PipeTransform {
  transform(value: number, unit: string) {
let degreesSymbol = '\u00B0';

          if(value && !isNaN(value)){

                 if(unit === 'C'){
                   var tempareature = (value - 32) / 1.8 ;
                   return tempareature.toFixed(2);
                 }
                 if(unit === 'K'){
                  var tempareature = value - 273.15 ;
                  return tempareature.toFixed(0) + degreesSymbol;
                }
          }
    return;
  }


}
