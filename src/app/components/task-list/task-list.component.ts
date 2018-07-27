import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent{
  tasks: string[] = new Array();

  constructor() {
    console.log("taskList class ran");
  
   }

  AddTask(task)
  {
    console.log(this.tasks);
    this.tasks.push(task);
    return false;
  }

  DeleteTask(task)
  {
    for(let i = 0; i< this.tasks.length; i++)
    {
      if(this.tasks[i] == task)
      {
        this.tasks.splice(i,1);
      }
    }
    return false;
  }

  EditTask(task)
  {
    for (let i = 0; i<this.tasks.length; i++)
    {
      if(this.tasks[i] == task)
      {
        task[i] = task;
      }
    }
    return false;
  }

}
