import config from './config';
import check from './check';
import {channelAPI, Channel} from './channelAPI';
import {notifyAPI} from './notify';
import {exportToCSV} from './export';

require('dotenv').config();

exports.handler = async (event: any={}):Promise<any> => {

    var channels:[Channel] = await channelAPI.getChannels();
    console.log('Total channels: ', channels.length);
    let nbErr = 0;
    var wrongChannel:Channel[] = [];
    channels.forEach(aChannel=>{
        if (check.isValidName(aChannel.name) == false) {
            wrongChannel.push(aChannel); 
        };
        
    });
    console.log("Total channels wrongly named :"+wrongChannel.length)
    //exportToCSV.generateCSV(wrongChannel);
    await notifyAPI.notifyChannels(wrongChannel);

    const response = {
        statusCode: 200,
        body: JSON.stringify('SlackPrettifyer job done'),
    };
    return response;
};
