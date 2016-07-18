import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../../service/todo';
import { Todo } from '../../model/todo';

/**
 * #fのような記述 => local template variable(ltv)
 * var-fとも書けるらしい。
 * http://qiita.com/pastelInc/items/493783c12278e7bcbedc
 */
@Component({
  selector: 'todo-regist',
  template: `
  <div *ngIf="todo">
    <form [formGroup]="form">
      <div class="form-group">
        <label for="content">内容</label>
        <textarea formControlName="content" name="content" [ngModel]="todo.content" class="form-control"></textarea>
      </div>
    </form>
    <div class="buttons">
      <button class="btn btn-primary" (click)="onClickSaveButton()">保存</button>
    </div>
  </div>
  `,
  directives: [
    REACTIVE_FORM_DIRECTIVES
  ],
  providers: [
    TodoService,
  ]
})
export class TodoRegistComponent implements OnInit, OnDestroy {

  sub: any;

  todo: Todo;

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {
    this.form = new FormGroup({
      content: new FormControl('', Validators.required)
    });
  }

  /**
   * 初期処理。
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.load(+params['id']);
      } else {
        this.todo = new Todo();
      }
    });
  }

  /**
   * 終了処理。
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * 保存ボタンクリック時の処理。
   */
  onClickSaveButton() {
    if (this.form.valid) {
      this.mask();

      this.todo.content = this.form.value.content;
      this.todoService.save(this.todo)
        .then(() => {
          this.unmask();
          this.location.back();
        })
        .catch((e: any) => {
          console.log(arguments);
          this.unmask();
        });
    }
  }

  /**
   * データをロードする。
   * @param id TODOのID
   */
  load(id: number) {
    this.todoService.get(id)
      .then(todo => {
        this.todo = todo
      });
  }

  mask() {

  }

  unmask() {

  }

}
