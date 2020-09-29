import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  tasks = [];
  constructor() { }

  ngOnInit(): void {
  }
  addTask(task){
    if(task.value!=''){
      this.tasks.push({name:task.value,tick:0});
      task.value = '';
    }
    task.focus();
  }

}
