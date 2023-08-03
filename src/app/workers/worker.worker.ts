/// <reference lib="webworker" />

import {Item} from "../classess/Item";
import {getRandomBetWeenNotEqual} from "../utils/random";


addEventListener('message', ({ data }) => {
  const response: Item[] = [];
  for(let i: number = 1; i <= 1000; i ++) {
    let item = new Item(i);
    response.push(item);
  }
  for(let i: number = 0; i < 1000; i ++) {
    response[i].setChild(response[getRandomBetWeenNotEqual(0, 1000, i)])
  }
  postMessage(response);
});
