
interface SlackConfig {
    authToken: string,
}

interface ChatConfig {
    slack: SlackConfig
}

interface DocUrl {
    namingConventionUrl: string
}

interface ChannelId {
    channelId: string
}

const chatConfig: ChatConfig = {
    slack: {
        authToken: process.env.SLACK_AUTH_TOKEN,
    }
};

const dockUrl: DocUrl = {
    namingConventionUrl: "https://<aPlaceToConsultNamingConvention>",
}

const supChannel: ChannelId= {
    channelId: "<supervision channel id>"
}

const adminChannel: ChannelId= {
    channelId: "<admin channel Id>"
}
const config = {
    chat: chatConfig.slack,
    sup: supChannel,
    admin: adminChannel,
    url: dockUrl,
    samplesMax: 10
};


export default config;