import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TodoListComponent } from './view/todo/list';
import { TodoRegistComponent } from './view/todo/regist';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav class="navbar navbar-default">
        <h1 class="app-title navbar-brand">{{title}}</h1>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a [routerLink]="['/todo']" routerLinkActive="active">一覧</a>
          </li>
          <li class="nav-item">
            <a [routerLink]="['/todo/create']" routerLinkActive="active">新規作成</a>
          </li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES],
  precompile: [
    TodoListComponent,
    TodoRegistComponent
  ],
})
export class AppComponent {
  title = 'My TODO';
}
