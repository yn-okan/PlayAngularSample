import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from '../model/todo';

@Injectable()
export class TodoService {

  constructor(private http: Http) {}

  /**
   * TODO一覧を取得する。
   * @returns TODO一覧
   */
  getList(): Promise<Todo[]> {
    return this.http.get('/api/todo')
      .toPromise()
      .then(response => response.json().items)
      .catch(this.handleError);
  }

  get(id: number): Promise<Todo> {
    return this.http.get('/api/todo/' + id)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  save(todo: Todo): Promise<Todo> {
    if (todo.id > 0) {
      return this.update(todo);
    } else {
      return this.create(todo);
    }
  }

  create(todo: Todo): Promise<Todo> {
    return this.http.post('/api/todo', {
      body: todo
    }).toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  update(todo: Todo): Promise<Todo> {
    return this.http.put('/api/todo/' + todo.id, {
      body: todo
    }).toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
