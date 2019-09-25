//
//  NSObject+WebViewWithTitleModule.m
//  CoffeeLover
//
//  Created by Daniel Tadrous on 9/25/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "WebViewWithTextModule.h"
#import "MainViewController.h"

@implementation WebViewWithTextModule


RCT_EXPORT_MODULE(WebViewWithText);


RCT_EXPORT_METHOD(loadUrl:(NSString *)url name:(NSString *)name)
{
  NSDictionary *userInfo = [NSDictionary dictionaryWithObjectsAndKeys: name, @"title", url, @"url", nil];
  
  
  [[NSNotificationCenter defaultCenter]
   postNotificationName:@"LoadWebView"
   object:nil userInfo:userInfo];
}

@end
