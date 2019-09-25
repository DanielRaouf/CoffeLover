//
//  MainViewController.m
//  CoffeeLover
//
//  Created by Daniel Tadrous on 9/26/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "MainViewController.h"
#import "WebViewWithTextViewController.h"

@interface MainViewController ()

@end

@implementation MainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
}


- (void)viewDidAppear:(BOOL)animated{
  [super viewDidAppear:animated];
  [[NSNotificationCenter defaultCenter] addObserver:self
                                           selector:@selector(loadWebView:)
                                               name:@"LoadWebView"
                                             object:nil];
}

- (void)viewDidDisappear:(BOOL)animated{
  [super viewDidDisappear:animated];
  
   [[NSNotificationCenter defaultCenter] removeObserver:self];
}

-(void)loadWebView:(NSNotification *) notification
{
  NSString* title = [notification.userInfo objectForKey:@"title"];
  NSString* url = [notification.userInfo objectForKey:@"url"];
  WebViewWithTextViewController* controller = [[WebViewWithTextViewController alloc]init];
  [controller setTitleText:title];
  [controller setUrl:url];
  dispatch_async(dispatch_get_main_queue(), ^{
    [self presentViewController:controller animated:true completion:^{
      
    }];
  });  
}
@end
