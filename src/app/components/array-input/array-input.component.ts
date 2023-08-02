import {Component, forwardRef} from '@angular/core';
import {InputComponent} from "../input/input.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-array-input',
  templateUrl: '../input/input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ArrayInputComponent),
      multi: true
    }]
})
export class ArrayInputComponent extends InputComponent{
  override writeValue(obj: []): void {
    this.control.setValue(obj.toString());
  }

  override ngOnInit(): void {
    this.control.valueChanges.subscribe(res => {
      this.onChange(res.split(','));
    })
  }
}
