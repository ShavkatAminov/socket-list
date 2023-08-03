import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { InputComponent } from './input.component';
import {AppModule} from "../../app.module";

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
      ],
      declarations: [ InputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
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
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('change'));
    expect(component.control.value).toEqual('test');
  }));
});
