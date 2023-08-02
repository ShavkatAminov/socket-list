import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
  })

  ngOnInit(): void {
    this.parameters.valueChanges.subscribe(res => {});
    this.setWorker();
  }

  setWorker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./workers/worker.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(data);
      };
      worker.postMessage('');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}
