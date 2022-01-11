import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";


export function isRequiredValidator(identify : string, title : string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const controlIdentify = control.get(identify);
    const controlTitle = control.get(title);
    if(controlIdentify?.value || controlTitle?.value){
      return null;
    }
    return {isRequired: true};
  }
};
