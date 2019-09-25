package com.coffeelover;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class WebViewWithTextModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;


    WebViewWithTextModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Nonnull
    @Override
    public String getName() {
        return "WebViewWithText";
    }

    @ReactMethod
    public void loadUrl(String url, String title) {
        Intent intent = new Intent(getReactApplicationContext(), WebViewWithTextActivity.class);
        intent.putExtra("title", title);
        intent.putExtra("url", url);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(intent);
    }

}
