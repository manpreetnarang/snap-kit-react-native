
#import "AnalyticsHelper.h"
#import <Foundation/Foundation.h>

static NSString *const kSCReactNativeUserDefaultsKey = @"SCSDKIsReactNativePlugin";

@implementation AnalyticsHelper

+ (void)registerForAnalytics {
    NSUserDefaults *defaults = [NSUserDefaults standardUserDefaults];
    if (![[[defaults dictionaryRepresentation] allKeys] containsObject: kSCReactNativeUserDefaultsKey]) {
        NSDictionary *appDefaults = @{
            kSCReactNativeUserDefaultsKey : @(YES)
        };
        [defaults registerDefaults:appDefaults];
        [defaults synchronize];
    }
}

@end
