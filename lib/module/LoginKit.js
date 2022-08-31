import { NativeModules } from 'react-native';
/**
 * An enum representing the different Login states.
 */

export let LoginState;
/**
 * An enum representing the different scopes your app can access. Scopes let your application declare which Login Kit
 * features it wants access to. If a scope is toggleable, the user can deny access to one scope while agreeing to grant
 * access to others.
 */

(function (LoginState) {
  LoginState["LOGIN_KIT_LOGIN_STARTED"] = "LOGIN_KIT_LOGIN_STARTED";
  LoginState["LOGIN_KIT_LOGIN_SUCCEEDED"] = "LOGIN_KIT_LOGIN_SUCCEEDED";
  LoginState["LOGIN_KIT_LOGIN_FAILED"] = "LOGIN_KIT_LOGIN_FAILED";
  LoginState["LOGIN_KIT_LOGOUT"] = "LOGIN_KIT_LOGOUT";
})(LoginState || (LoginState = {}));

export let UserDataScopes;
/**
 * An interface representing the data model related to the active (connected) Snapchat User.
 */

(function (UserDataScopes) {
  UserDataScopes["DISPLAY_NAME"] = "https://auth.snapchat.com/oauth2/api/user.display_name";
  UserDataScopes["BITMOJI_AVATAR"] = "https://auth.snapchat.com/oauth2/api/user.bitmoji.avatar";
})(UserDataScopes || (UserDataScopes = {}));

const LoginKit = NativeModules.LoginKit;
export { LoginKit };
//# sourceMappingURL=LoginKit.js.map