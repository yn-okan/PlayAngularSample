import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../service/todo';

import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-list',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of todoList">
          <td>{{item.id}}</td>
          <td>{{item.content}}</td>
          <td>
            <a href="#" (click)="onClickEditLink(item.id)">編集</a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  providers: [
    TodoService
  ]
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(
    private router: Router,
    private todoService: TodoService) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.todoService
      .getList()
      .then(items => {
        this.todoList = items;
      });
  }

  onClickEditLink(id: number): boolean {
    this.router.navigate(['/todo', id]);

    return false;
  }

}
