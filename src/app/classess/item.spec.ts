import {TestBed, } from '@angular/core/testing';
import {Item} from "./Item";
import {colors} from "../consts/colors";


describe('Item', () => {
  let object: Item;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    })
      .compileComponents();
    object = new Item(10);
  });

  it('should id equal to 10', function () {
    expect(object.id).toEqual(10);
  });

  it('should int_val integer', function () {
    expect(Number.isInteger(object.int_val)).toBeTruthy();
  });

  it('should object is filled', function () {
    expect(typeof object.float_val).toBe('string');
    expect(typeof object.int_val).toBe('number');
    expect(typeof object.color).toBe('string');
    expect(typeof object.child).toBe('object');
    expect(typeof object.id).toBe('number');
    expect(colors.indexOf(object.color)).toBeGreaterThanOrEqual(0);
  });
});
