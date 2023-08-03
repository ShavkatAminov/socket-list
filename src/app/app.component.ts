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
    timer: new FormControl(3000),
    size: new FormControl(1000),
  });

  intervalId: any = null;
  extraIds: FormControl = new FormControl([]);

  list: Item[] = [];



  ngOnInit(): void {
    this.parameters.valueChanges.subscribe((res: any) => {
      this.setWorker(res);
    });
    this.extraIds.valueChanges.subscribe(res => {
      this.setExtraIDs(res);
    })
    this.setWorker(this.parameters.value);
  }

  setExtraIDs(ids: number[]) {
    if(ids) {
      for(let i: number = 0; i < ids.length; i ++) {
        this.list[i].id = ids[i];
      }
    }
  }

  setWorker(data: any) {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./workers/worker.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.list = data.slice(data.length - 10, data.length);
        this.setExtraIDs(this.extraIds.value);
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
