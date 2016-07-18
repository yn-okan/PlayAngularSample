package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

/**
 * ページコントローラクラス。
 */
public class PageController extends Controller {

    /**
     * TODOページを返す。
     * @return TODOページ
     */
    public Result todo() {
        return ok(index.render());
    }

}
