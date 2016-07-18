package response;

import com.fasterxml.jackson.databind.JsonNode;
import play.libs.Json;

import java.util.HashMap;

/**
 * JSON形式レスポンスのベースクラス。
 */
public class JsonResponse extends HashMap<String, Object> {

    public static final String SUCCESS = "success";
    public static final String ITEMS = "items";
    public static final String TOTAL = "total";
    public static final String DATA = "data";

    public JsonResponse(boolean success) {
        put(SUCCESS, success);
    }

    public void putItems(Object items) {
        put(ITEMS, items);
    }

    public void putTotal(int total) {
        put(TOTAL, total);
    }

    public void putData(Object data) {
        put(DATA, data);
    }

    public JsonNode toJson() {
        return Json.toJson(this);
    }

}
