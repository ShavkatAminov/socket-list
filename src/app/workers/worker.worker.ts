/// <reference lib="webworker" />

import {Item} from "../classess/Item";
import {getRandomBetWeenNotEqual} from "../utils/random";


addEventListener('message', ({ data }) => {
  const response: Item[] = [];
  for(let i: number = 1; i <= data; i ++) {
    let item = new Item(i);
    response.push(item);
  }
  for(let i: number = 0; i < data; i ++) {
    response[i].setChild(response[getRandomBetWeenNotEqual(0, data, i)])
  }
  postMessage(response);
});
