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
  });

  intervalId: any = null;
  extraIds = new FormControl();

  list: Item[] = [];



  ngOnInit(): void {
    this.parameters.valueChanges.subscribe((res: any) => {
      this.setWorker(res);
    });
    this.setWorker(this.parameters.value);
  }

  setWorker(data: any) {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./workers/worker.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.list = data.slice(data.length - 10, data.length);
      };
      if(this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(() => {
        worker.postMessage(data.size);
      }, data.timer);
      worker.postMessage(data.size);
    }
  }

}
