import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    data_out: any;
    newTask: any;
    task_to_update: any;
    data_edit: any;
    constructor(private _httpService: HttpService){}
    ngOnInit(){
        this.newTask = { title: "", description: "" }
        this.displayTaskList()
    }
    displayTaskList(){
        let observable = this._httpService.getUsers();
        observable.subscribe(data => {
            this.data_out=data
        });
    }
    onSubmit() {
        let observable = this._httpService.addTask(this.newTask);
        observable.subscribe(data => {
            console.log("Got the data back from post",data)
            this.newTask = { title: "", description: "" }
        });
        this.displayTaskList()
    }
    deleteTask(id:number): void{
        let observable1 = this._httpService.removeTheTask(id);
        observable1.subscribe(data => {
            console.log(data)
            this.displayTaskList()
        });
    }
    getTaskInfo(id:number): void{
        let observable1 = this._httpService.getOneTask(id);
        observable1.subscribe(data => {
            this.task_to_update = {title: data.title, description: data.description}
            this.data_edit=data
        });
    }
    updateTask(id:number): void{
        let observable = this._httpService.updateOne(id,this.task_to_update);
        observable.subscribe(data => {
            console.log("Got the data back from post",data)
            this.newTask = { title: "", description: "" }
            this.data_edit=null
            this.displayTaskList()
        });
    }
}
