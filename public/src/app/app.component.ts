import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
  }
  getTasksFromService(){
    console.log("Got our tasks!")
    var tasks_observable = this._httpService.getTasks();
    tasks_observable.subscribe(data => {
      console.log(data)
      this.tasks = data["task"]
      });
  }

}
