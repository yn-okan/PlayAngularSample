import { provideRouter, RouterConfig } from '@angular/router';
import { TodoListComponent } from './view/todo/list';
import { TodoRegistComponent } from './view/todo/regist';

export const routes:RouterConfig = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'todo/create',
    component: TodoRegistComponent
  },
  {
    path: 'todo/:id',
    component: TodoRegistComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
