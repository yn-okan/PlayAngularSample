import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { TodoListComponent } from './view/todo/list';
import { TodoRegistComponent } from './view/todo/regist';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['/todo']" routerLinkActive="active">一覧</a>
        <a [routerLink]="['/todo/create']" routerLinkActive="active">新規作成</a>
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
