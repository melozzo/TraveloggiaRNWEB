to create a new expo app type
# TRArnSDK39r16.13
update to latest expo sdk and react version 11/15/20
expo init [app-name] --npm 
the --npm means it uses npm to install packages and not yarn


To Deploy
1. update the version in app.json
2. run expo build: ios
3. follow the screen propmts for creds
4. when the build compiles to install it on the phone  navigate to https://expo.io/@melozzo/ExpoSDK40 
5. a link will appear to monitor the build into a .ipa on expo server
6.  when build finishes, a link will appear to download the package .ipa file 
7. use the transporter app to upload the .ipa you just downloaded to your box,  up to the app store  uhm this is so dumb 


note: expo hosts a build you ( alone ) can install on your phone
getting it to the app store is a second step and from there if it passes test, you can invite others to install it

