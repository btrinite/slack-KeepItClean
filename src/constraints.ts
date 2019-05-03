const validate = require("validate.js");

const defaultsChannelsconstraints = {
  channelName: {
      format: {
        pattern: /^(general|random)/,
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

const helloChannelsconstraints = {
  channelName: {
      presence: true,
      format: {
        pattern: /^hello(_|-).*$/,
        message: "'%{value}' is not a hello channel"
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
   helloChannelsconstraints,
   CommunityChannelsconstraints,
   TeamChannelsconstraints]
  ;

  export default constraints;