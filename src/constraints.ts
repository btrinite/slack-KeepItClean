const validate = require("validate.js");

const defaultsChannelsconstraints = {
  channelName: {
      format: {
        pattern: /^(general|a-rd-news|admins_slack|random|support-it|bbc-news)/,
        message: "'%{value}' is not a default channel",
      },
    }
  };

const helpChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^help(_|-).*$/,
        message: "'%{value}' is not a help channel"
      }
    }
};

const projectsChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^p(_|-).*$/,
        message: "'%{value}' is not a project channel"
      }
    }
};

const orgaRDChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^(RD|rd)(_|-).*$|^(dirc|DIRC)(_|-).*$|^rdhub(_|-).*$|^tf(_|-).*$/,
        message: "'%{value}' is not an org channel"
      }
    }
};

const polesChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^design(_|-).*$|^tech(_|-).*$/,
        message: "'%{value}' is not a pole channel"
      }
    }
};


const helloChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^hello(_|-).*$/,
        message: "'%{value}' is not a hello channel"
      }
    }
};

const sitesChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^cristallin.*$/,
        message: "'%{value}' is not a site channel"
      }
    }
};

const RandomChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^rnd(_|-).*$/,
        message: "'%{value}' is not a random channel"
      }
    }
};

const CommunityChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^co(_|-).*$|^com(_|-).*$/,
        message: "'%{value}' is not a community channel"
      }
    }
};

const EventChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^evt(_|-).*$/,
        message: "'%{value}' is not an event channel"
      }
    }
};

const GuildChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^guild(_|-).*$/,
        message: "'%{value}' is not a guild channel"
      }
    }
};

const TeamChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^t(_|-).*$|^team(_|-).*$/,
        message: "'%{value}' is not a team channel"
      }
    }
};
const constraints = 
  [defaultsChannelsconstraints, 
   helpChannelsconstraints,
   projectsChannelsconstraints,
   orgaRDChannelsconstraints,
   polesChannelsconstraints,
   helloChannelsconstraints,
   sitesChannelsconstraints,
   RandomChannelsconstraints,
   CommunityChannelsconstraints,
   EventChannelsconstraints,
   GuildChannelsconstraints,
   TeamChannelsconstraints]
  ;

  export default constraints;