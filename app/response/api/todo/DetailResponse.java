package response.api.todo;

import models.bean.response.Item;
import response.JsonResponse;

/**
 * 詳細情報取得のレスポンスクラス。
 */
public class DetailResponse extends JsonResponse {

    public DetailResponse() {
        super(true);
        putData(format());
    }

    private Item format() {
        Item data = new Item(1L);
        data.put("content", "TODO内容1");
        data.put("created", "2016/07/10 23:02:10");
        data.put("updated", "2016/07/10 23:02:10");

        return data;
    }

}
