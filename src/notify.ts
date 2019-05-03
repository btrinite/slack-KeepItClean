import { slackAPI } from './slackAPI';
import {Channel} from './channelAPI';

import config from './config';
import { MessageAttachment } from '@slack/web-api/dist/methods';

const shuffle = require('shuffle-array');

const noticeTempl:[MessageAttachment] =
[{
    "fallback": `Please, help me to keep our Slack workspace clean by renaming this channel to comply with our naming convention <${config.url.namingConventionUrl}>.`,
    "color": "#36a64f",
    "pretext": "I need your help !",
    "title": "This Channel name doest not comply with our Slack Naming Convention (click here to consult).",
    "title_link": `${config.url.namingConventionUrl}`,
    "text": `Please, help us to keep Slack a friendly place.\nRename the name of this channel to comply with our Slack Naming Convention.\nNeed help, contact <#${config.admin.channelId}>.`,
    "footer": "SlackPrettify"
}]

const supNoticeTempl:[MessageAttachment]  =
[{
    "fallback": "Keep our Slack clean",
    "color": "#36a64f",
    "pretext": "Following channels where notified",
    "fields": [],
    "footer": "SlackPrettify"
}]
 
class NotifyAPI {


    constructor() {
    }

    private async notifyChannel (ch:Channel) {
        let res:any;
        console.log("Notify sent to channel "+ch.name);
        if (process.env.NODE_ENV.indexOf('dev') > -1) {
            res = await slackAPI.client.chat.postMessage({channel: config.sup.channelId, text:"", attachments: noticeTempl})

        } else {
            res = await slackAPI.client.chat.postMessage({channel: ch.id, text:"", attachments: noticeTempl})
        }
        console.log('Message sent: ', res.ts);       
    }

    private async notifySup(lst:MessageAttachment["fields"], total:number) {
        let msg=supNoticeTempl;
        msg[0].fields = lst;
        msg[0].title = `${lst.length} channels notified / ${total} channels to fix`;
        console.log(`Report sent to sup ${lst.length} to fix/${total}`);
        const res = await slackAPI.client.chat.postMessage({channel: config.sup.channelId, text:"", attachments: supNoticeTempl})
        console.log('Message sent: ', res.ts);
    }

    public async notifyChannels(channels:Channel[]) {
        let shuffledChannels:Channel[]; 
        let ChannelsSumUp: MessageAttachment["fields"] = [];
        shuffledChannels = shuffle(channels);
        for (var i = 0, len = Math.min(shuffledChannels.length,config.samplesMax); i < len; i++) {
            await this.notifyChannel(shuffledChannels[i])
            ChannelsSumUp.push({title: `${shuffledChannels[i].id}`, value:'To fix', short:true});
        };
        await this.notifySup(ChannelsSumUp, shuffledChannels.length);
    }
};

const notifyAPI = new NotifyAPI();
export { notifyAPI };
