# Introduction
This NodeJS app checks for Slack workspace channels (public and private) and ask users to comply to a given naming convention.
Naming convention is described/customized in (src/constaints.ts) through set of regexps.
This app is intend to be deployed as an AWS lambda (but can be reasely adapted to another platform).

When app starts, it retrieves all channels description (public and private), then checks for each of them if channel name comply with naming convention.
If not, a message is sent to the wrongly named channel, aking for members to fix the problem (providing a link to channel naming convention). a link to admin if also provided to users if they need help.
To avoid to massively notify users, only a subset of wrongly named channel are solicited at once.
Moreover, a report is sento to a specific channel (or DM) giving some statistics and name of channel solicited.

# config

## global parameters
App expects to find global parameters in `<src/config.ts>` :
`<namingConventionUrl>` : this is URL where to consult your Slack Channel naming convention,
`<supChannel.channelId>` : Slack Channel id to used for sending report,
`<adminChannel.channelId>` : Slack Channel id where to redirect users if they need to get help
`<samplesMax>` : Maximum of channels to notify at once (to avoid to massively notify)

## secrets
App expects to found 1 env variable (in .env file or in environement) :
`<SLACK_AUTH_TOKEN>` : Slack App Token

# Dev
This app is written in TypeScript.
To compile app, type:

```sh
npm run-script build
```

To test app for dev purpose (all notifications sent to supervision channel)
```sh
npm run-script start-dev
``` 

# Deploy to AWS
Create a Lambda function through AWS CLI/Web Interface.
Add a Cloudwatch event as lambda input event.

In (package.json), set the `<lambda_name>` accordingly

To package the app:
```sh
npm run-script pack
``` 

To deploy package to AWS:
```
npm run-script deploy
```

