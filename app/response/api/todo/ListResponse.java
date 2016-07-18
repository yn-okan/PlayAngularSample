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
        putTotal(3);
    }

    private List<Item> format() {
        List<Item> items = new ArrayList<>();

        String created = "2016/07/08 01:05:10";
        String updated = "2016/07/08 01:05:10";

        Item item;

        item = new Item(1L);
        item.put("content", "TODO内容1");
        item.put("created", created);
        item.put("updated", updated);
        items.add(item);

        item = new Item(2L);
        item.put("content", "TODO内容2");
        item.put("created", created);
        item.put("updated", updated);
        items.add(item);

        item = new Item(3L);
        item.put("content", "TODO内容3");
        item.put("created", created);
        item.put("updated", updated);
        items.add(item);

        return items;
    }

}
