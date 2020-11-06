# customer-tracking-for-native

Mixpanel integration for customer domain using [react-native-mixpanel](https://github.com/davodesign84/react-native-mixpanel) package.

## Why separate package from react?

There is number of mobile-specific properties that native integration allow us to track automatically out of the box.

## How to setup?

Start with regular react-native business.

```
npm install @utilitywarehouse/customer-tracking-for-native
npx react-native link react-native-mixpanel
```

Add server url in `.plist` files in iOS project.

```
<key>com.mixpanel.config.serverURL</key>
<string>https://api-eu.mixpanel.com</string>
```

Add endpoints to `manifest` in your Android project.

```
<application ...>
    <meta-data android:name="com.mixpanel.android.MPConfig.EventsEndpoint"
        android:value="https://api-eu.mixpanel.com/track" />
    <meta-data android:name="com.mixpanel.android.MPConfig.PeopleEndpoint"
        android:value="https://api-eu.mixpanel.com/engage" />
    <meta-data android:name="com.mixpanel.android.MPConfig.GroupsEndpoint"
        android:value="https://api-eu.mixpanel.com/groups" />
</application>
```