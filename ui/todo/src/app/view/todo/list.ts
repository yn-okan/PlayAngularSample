import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../service/todo';

import { Todo } from '../../model/todo';

@Component({
  selector: 'todo-list',
  template: `
    <table class="table table-striped">
      <tbody>
        <tr *ngFor="let item of todoList" #row>
          <td class="content">
            <div class="content-inner">
              <div class="text" (click)="onClickContentText(item, ct)" #ct [innerHTML]="br(item.content)"></div>
            </div>
          </td>
          <td class="action">
            <a href="#" (click)="onClickEditLink(item.id)">
              <i class="fa fa-pencil" title="編集"></i>
            </a>
            <a href="#" (click)="onClickDeleteLink(item.id, row)">
              <i class="fa fa-times" title="削除"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="paging-toolbar" *ngIf="total">
      <ul>
        <li *ngFor="let n of getPageList()" [class.active]="currentPage === n" (click)="onClickPageLink(n)">{{n}}</li>
      </ul>
    </div>
  `,
  providers: [
    TodoService
  ]
})
export class TodoListComponent implements OnInit {

  sub: any;

  /**
   * 現在のページ。
   */
  currentPage: number = 1;

  /**
   * 合計件数。
   */
  total: number;

  /**
   * TODOリスト。
   */
  todoList: Todo[] = [];

  /**
   * コンストラクタ。
   *
   * @param router
   * @param todoService
   */
  constructor(
    private router: Router,
    private todoService: TodoService) {}

  /**
   * 初期処理。
   */
  ngOnInit() {
    this.sub = this.router.routerState.queryParams.subscribe(queryParams => {
      this.load(+queryParams["page"] || 1);
    });
  }

  /**
   * 終了処理。
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   * データをロードする。
   * @param page ページ
   */
  load(page: number) {
    this.todoService
      .getList({
        page: page,
        limit: 10
      })
      .then(res => {
        if (res.success) {
          this.currentPage = page;
          this.total = res.total;
          this.todoList = res.items;
        } else {

        }
      });
  }

  /**
   * ページ番号リストを返す。
   * @returns {Array} ページ番号リスト
   */
  getPageList() {
    var pages = [];
    var totalPage = Math.ceil(this.total / this.limit);

    for (var n = 1; n <= totalPage; n++) {
      pages.push(n);
    }

    return pages;
  }

  /**
   * 内容テキストクリック時の処理。
   *
   * @param todo TODOモデル
   * @param item テキストのHTML要素
   * @returns false
   */
  onClickContentText(todo: Todo, item: HTMLElement): boolean {
    var itemEl: JQuery = $(item);
    var contentInnerEl: JQuery = itemEl.parent();

    if (itemEl.hasClass('full')) {
      contentInnerEl.css({
        height: ''
      });
      setTimeout(()=>{
        itemEl.removeClass('full');
      }, 300);
    } else {
      itemEl.addClass('full');
      contentInnerEl.height(itemEl.height());
    }

    return false;
  }

  /**
   * 編集リンククリック時の処理。
   *
   * @param id TODOのID
   * @returns false
   */
  onClickEditLink(id: number): boolean {
    this.router.navigate(['/todo', id]);

    return false;
  }

  /**
   * 削除リンククリック時の処理
   *
   * @param id TODOのID
   * @param row 行のHTML要素
   * @returns false
   */
  onClickDeleteLink(id: number, row: HTMLElement): boolean {
    if (confirm('TODOを削除します。よろしいですか？')) {
      this.todoService.delete(id)
        .then(() => {
          $(row).remove();
        });
    }
    return false;
  }

  /**
   * ページ番号リンククリック時の処理。
   * @param page ページ番号
   */
  onClickPageLink(page: number) {
    this.router.navigate(['/todo'], {
      queryParams: {
        "page": page
      }
    });
  }

  /**
   * 改行処理。
   *
   * @param str 文字列
   * @returns 処理後の文字列
   */
  br(str: string): string {
    return _.escape(str).replace(/\n/g, '<br>');
  }

}
