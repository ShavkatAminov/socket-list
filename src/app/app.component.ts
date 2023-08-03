import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Item} from "./classess/Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  parameters: FormGroup = new FormGroup({
    timer: new FormControl(300),
    size: new FormControl(1000),
    extraIds: new FormControl([100, 102, 105]),
  });

  list: Item[] = [];



  ngOnInit(): void {
    this.parameters.valueChanges.subscribe((res: any) => {

    });
    this.setWorker();
  }

  setWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./workers/worker.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.list = data.slice(data.length - 10, data.length);
      };
      worker.postMessage('');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}
