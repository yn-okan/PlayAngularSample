package models.bean.response;

import java.util.HashMap;

/**
 * アイテムモデルクラス。
 */
public class Item extends HashMap<String, Object> {

    public Item() {}

    public Item(Long id) {
        put("id", id);
    }

}
