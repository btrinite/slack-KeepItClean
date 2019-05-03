
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
    namingConventionUrl: "https://confluence.dt.renault.com/display/RDHomeCLD/Naming+Convention",
}

const supChannel: ChannelId= {
    channelId: "D5PDBR4E6"
}

const adminChannel: ChannelId= {
    channelId: "CJEJ63SKY"
}
const config = {
    chat: chatConfig.slack,
    sup: supChannel,
    admin: adminChannel,
    url: dockUrl,
    samplesMax: 10
};


export default config;