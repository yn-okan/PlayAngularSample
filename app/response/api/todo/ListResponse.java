package response.api.todo;

import models.bean.response.Item;
import response.JsonResponse;

import java.util.ArrayList;
import java.util.List;

/**
 * 一覧取得のレスポンスクラス。
 */
public class ListResponse extends JsonResponse {

    public ListResponse() {
        super(true);
        putItems(format());
        putTotal(15);
    }

    private List<Item> format() {
        List<Item> items = new ArrayList<>();

        String created = "2016/07/08 01:05:10";
        String updated = "2016/07/08 01:05:10";

        Item item;

        for (int n = 1; n <= 10; n++) {
            item = new Item((long)n);
            item.put("content", "TODO内容" + n + "：■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■\n■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■");
            item.put("created", created);
            item.put("updated", updated);
            items.add(item);
        }

        return items;
    }

}
