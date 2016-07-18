package global;

import play.mvc.Http;
import play.mvc.Result;
import play.mvc.Results;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;

/**
 * Created by tnbys on 2016/07/10.
 */
public class HttpErrorHandler implements play.http.HttpErrorHandler {

    @Override
    public CompletionStage<Result> onClientError(Http.RequestHeader request, int statusCode, String message) {
        if(statusCode == play.mvc.Http.Status.NOT_FOUND) {
            return CompletableFuture.completedFuture(Results.redirect("/"));
        }

        return CompletableFuture.completedFuture(Results.status(statusCode));
    }

    @Override
    public CompletionStage<Result> onServerError(Http.RequestHeader request, Throwable exception) {
        return null;
    }
}
