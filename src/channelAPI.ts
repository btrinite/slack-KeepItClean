import { slackAPI } from './slackAPI';
import config from './config';

interface Channel {
    id: string,
    name: string,
}

interface SlackChannel {
    id: string,
    name: string,
    is_archived: boolean
    is_channel: boolean
    is_shared: boolean
    is_org_shared: boolean
    is_private: boolean
}

class ChannelAPI {

    constructor() {
    }

    public async getChannels(): Promise<[Channel]> {
        var ret:any;
        var res:[Channel];
        ret = await slackAPI.client.channels.list();
        res = ret.channels.filter((slackChannel:any) => {
            if (slackChannel.is_channel && 
                !(slackChannel.is_archived) &&
                !(slackChannel.is_shared) &&
                !(slackChannel.is_org_shared)) {
                return true;
            } else {
                return false
            }
        }).map((slackChannel:any) => {
            var rObj:Channel = {
                id: slackChannel.id,
                name: slackChannel.name,
            };
            return rObj;
        });
        return res;
    }
};

const channelAPI = new ChannelAPI();
export { channelAPI, Channel};
