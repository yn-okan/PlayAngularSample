package controllers.api;

import play.mvc.Controller;
import play.mvc.Result;
import response.api.todo.DetailResponse;
import response.api.todo.ListResponse;

/**
 * TODOコントローラクラス。
 */
public class TodoController extends Controller {

    /**
     * TODO一覧を取得する。
     * @return TODOリスト
     */
    public Result list() {
        return ok(new ListResponse().toJson());
    }

    /**
     * TODO詳細を取得する。
     *
     * @param id ID
     * @return TODO詳細情報
     */
    public Result detail(Long id) {
        return ok(new DetailResponse().toJson());
    }

    /**
     * TODOを新規作成する。
     * @return TODO詳細情報
     */
    public Result create() {
        return ok(new DetailResponse().toJson());
    }

    /**
     * TODOを更新する。
     *
     * @param id ID
     * @return TODO詳細情報
     */
    public Result update(Long id) {
        return ok(new DetailResponse().toJson());
    }

    /**
     * TODOを削除する。
     *
     * @param id ID
     * @return TODO詳細情報
     */
    public Result delete(Long id) {
        return ok(new DetailResponse().toJson());
    }

}
