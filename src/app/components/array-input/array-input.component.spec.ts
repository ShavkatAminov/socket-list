import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
