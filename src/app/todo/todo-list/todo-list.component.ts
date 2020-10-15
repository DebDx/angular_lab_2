import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  task=[{title:'a',dates:'2019/10/02'},{title:'b',dates:'2019/10/03'},{title:'c',dates:'2019/10/04'},{title:'d',dates:'2019/10/05'}];
  constructor() { }

  ngOnInit(): void {
  }
  
}
