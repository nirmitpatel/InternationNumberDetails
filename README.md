# Number Lookup Tool

## How to use
1. Go to https://gh-pages.d2m6dv01p6ffl5.amplifyapp.com/
2. Login using the creds stored in KeePass
3. If you need to look up local number, use the left panel. The text box will only accept numeric input and will automatically omit everything else. While searching, ensure that the number is in e164 format, i.e. 1xxxxxxxxxx
4. If you need to look up international number, use the right panel. Again, the text box will only accept numeric input and will automatically omit everything else. While searching, ensure that the number has country code in front of it, i.e. 91xxxxxxxxxx.

## Tools used for the app
- The app is built in React with the base built using `create-react-app` command.
- Code is hosted on Github at [Master Branch](https://github.com/nirmitpatel/InternationNumberDetails/tree/master) and built hosted on GitHub pages under the branch [Built Branch](https://github.com/nirmitpatel/InternationNumberDetails/tree/gh-pages)
- For local number search, I am using Bandwidth's number lookup tool. Documentation can be found here: [Phone Lookup](https://new.dev.bandwidth.com/apis/number-lookup). In order to achieve, this, I have created a REST API using AWS's API Gateway (name: BWTnLookupAPI) and have written a Lambda function (name: tnLookupFunction) which does the POST request on user entered number, waits for 8 seconds and then does a GET request to retrieve the information for that number. Authorization creds are stored in KeePass. AWS account is TAC Lab's account.
- For international number search, I am using API provided by [NumVerify](https://numverify.com/). Currently, it's a personal account which allows 250 hits a month. Month starts from the 1st of every month. Similar to local number search, I have created a REST API using AWS's API Gateway (name: intlTnLookupAPI) and have written a Lambda function (name: intlNumLookup) which goes the GET request. AWS account us TAC Lab's account.
- For International block list, app is using CSV files - one for International High Risk Blocks and another for International Lite block list. If the list changes in future, it can be replaced directly in GitHub and it should start working automatically as long as the format and file name match.

## How to build and deploy
1. Download GitHub repository on your local machine if you haven't already.
2. Make necessary changes. If you need to test the local changes, using command line, navigate to react-api folder and run `npm start`.
3. Once the changes look good and if you're ready for the built, while command line still in reach-api folder, run `npm run deploy` command. You may require to have GitHub key stored on your machine. AWS is already hooked with GitHub repository, so as long as the change becomes available on GitHub, it will trigger a build on AWS and after a couple of minutes, the app should be live with the new changes.
4. To push code on Master branch, first run `git add .`, then `git commit -a -m "some comment"`, and finally `git push origin master` commands.
