import {colors} from "../enum/colors";
import {getRandomInt, getRandomNumber} from "../utils/random";


export class Item {
  public int_val: number;
  public float_val: number;
  public color: string;
  public child: any = {};
  constructor(public id: number) {
    this.int_val = getRandomInt()
    this.float_val = getRandomNumber();
    this.color = colors[this.int_val % 4];
  }

  setChild(child: Item) {
    this.child = {
      id: child.id,
      color: child.color,
    }
  }
}
