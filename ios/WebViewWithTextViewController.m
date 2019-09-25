//
//  WebViewWithTextViewController.m
//  CoffeeLover
//
//  Created by Daniel Tadrous on 9/25/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "WebViewWithTextViewController.h"

@interface WebViewWithTextViewController ()



@end

@implementation WebViewWithTextViewController

NSString* urlStr;
NSString* titleText;

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
  [self.titleLabel setText: titleText];
  NSURL *url = [NSURL URLWithString: urlStr];
  NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
  [self.webView loadRequest:requestObj];
  
}
- (IBAction)closeClickHandler:(UIBarButtonItem *)sender {
  [self dismissViewControllerAnimated:true completion:^{
    
  }];
}

-(void)setTitleText:(NSString*)title{
  titleText = title;
}

-(void)setUrl:(NSString*)url{
  urlStr = url;
}

@end
