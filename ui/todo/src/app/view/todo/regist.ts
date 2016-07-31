import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../../service/todo';
import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-regist',
  template: `
  <div *ngIf="todo">
    <form [formGroup]="form" [class.submitting]="submitting === true">
      <div class="form-group">
        <textarea formControlName="content" name="content" [ngModel]="todo.content" class="content form-control" placeholder="TODOの内容を入力"></textarea>
        <div *ngIf="content.dirty && !content.valid" class="alert alert-danger">{{getErrorMessage(form.controls.content)}}</div>
      </div>
    </form>
    <div class="buttons">
      <button class="btn-save btn btn-primary" (click)="onClickSaveButton()">保存</button>
      <button class="btn-cancel btn btn-default" (click)="onClickCancelButton()">キャンセル</button>
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

  /**
   * サブミット中フラグ。
   */
  submitting: boolean = false;

  /**
   * TODOモデル。
   */
  todo: Todo;

  /**
   * フォーム。
   */
  form: FormGroup;

  /**
   * 内容コントロール。
   */
  content: FormControl;

  /**
   * コンストラクタ。
   * @param route
   * @param todoService
   * @param location
   */
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) {
    this.content = new FormControl('', [
      Validators.required,
      Validators.maxLength(10)
    ])
    this.form = new FormGroup({
      content: this.content
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
    if (this.submitting) {
      return;
    }

    this.submitting = true;

    if (this.form.valid) {
      this.todo.content = this.form.value.content;
      this.todoService.save(this.todo)
        .then(() => {
          this.submitting = false;
          this.location.back();
        })
        .catch((e: any) => {
          this.submitting = false;
        });
    } else {
      this.submitting = false;
    }
  }

  /**
   * キャンセルボタンクリック時の処理。
   */
  onClickCancelButton() {
    history.back();
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

  /**
   * エラーメッセージを返す。
   *
   * @param control コントロール
   * @returns {string} エラーメッセージ
   */
  getErrorMessage(control: FormControl): string {
    var errors = control.errors;
    var msg: string = '';

    for (var k in errors) {
      if (errors.hasOwnProperty(k)) {
        switch (k) {
          case 'required':
            msg = '必須入力です。';
            break;
          case 'maxlength':
            msg = errors[k].requiredLength + '文字以下で入力してください。';
            break;
        }
      }
    }

    return msg;
  }

}
