import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ArrayInputComponent } from './array-input.component';
import {AppModule} from "../../app.module";

describe('ArrayInputComponent', () => {
  let component: ArrayInputComponent;
  let fixture: ComponentFixture<ArrayInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      declarations: [ ArrayInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should value changed', waitForAsync(() => {
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const input = nativeElement.querySelector('input');
    input.value = '500';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('change'));
    expect(component.control.value).toEqual('500');
  }));
});
