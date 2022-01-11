import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function rangeDateValidator(minYear:number,  maxYear:Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const yearInput = control;
    const maxYearNow = maxYear.getFullYear();

    return (minYear > yearInput?.value) || (yearInput?.value > maxYearNow) ? {min:true, maxYearStr: maxYearNow.toString(),
      minYearStr: minYear.toString()} : null ;
  };
}
