import {colors} from "../consts/colors";
import {getRandomInt, getRandomNumber} from "../utils/random";


export class Item {
  public int_val: number;
  public float_val: string;
  public color: string;
  public child: any = {};
  constructor(public id: number) {
    this.int_val = getRandomInt()
    this.float_val = getRandomNumber().toPrecision(18);
    this.color = colors[this.int_val % 4];
  }

  setChild(child: Item) {
    this.child = {
      id: child.id,
      color: child.color,
    }
  }
}
