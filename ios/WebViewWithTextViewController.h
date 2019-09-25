//
//  WebViewWithTextViewController.h
//  CoffeeLover
//
//  Created by Daniel Tadrous on 9/25/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface WebViewWithTextViewController : UIViewController
@property (weak, nonatomic) IBOutlet UIWebView *webView;
@property (weak, nonatomic) IBOutlet UILabel *titleLabel;

-(void)setTitleText:(NSString*)title;
-(void)setUrl:(NSString*)url;
@end

NS_ASSUME_NONNULL_END
