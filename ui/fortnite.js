const path = require('path');
var configFile = path.join('../managers/config.json');
var config = require(configFile);
var newsfile = path.join('../managers/news.json');
var news = require(newsfile);
module.exports = {
  
    _title: 'Fortnite Game',
    _activeDate: new Date().toISOString(),
    lastModified: new Date().toISOString(),
    _locale: 'en-US',
    loginmessage: {
        _title: 'LoginMessage',
        loginmessage: {
            _type: 'CommonUI Simple Message',
            message: {
                _type: 'CommonUI Simple Message Base',
                title: 'Scyre',
                body: 'Updates:'
            }
        },
        _activeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    },
    subgameselectdata: {
    saveTheWorldUnowned: {
    _type: 'CommonUI Simple Message',
    message: {
                image: 'https://progameguides.com/wp-content/uploads/2018/12/fortnite-outfit-fishstick.jpg',
                hidden: false,
                messagetype: 'normal',
                _type: 'CommonUI Simple Message Base',
                title: 'The Premium Experience',
                body: 'This was meant to be free in 2018.',
                spotlight: false
            }  
    },
    _title: 'subgameselectdata',
      battleRoyale: {
        _type: 'CommonUI Simple Message',
        message: {
          image: 'https://progameguides.com/wp-content/uploads/2018/12/fortnite-outfit-fishstick.jpg',
          hidden: false,
          messagetype: 'normal',
          _type: 'CommonUI Simple Message Base',
          title: 'Project Scyre Beta',
          body: 'Enjoy the old',
          spotlight: false
        }
      },
      creative: {
        _type: 'CommonUI Simple Message',
        message: {
          image: 'https://progameguides.com/wp-content/uploads/2018/12/fortnite-outfit-fishstick.jpg',
          hidden: false,
          messagetype: 'normal',
          _type: 'CommonUI Simple Message Base',
          title: 'this is creative',
          body: 'Creative coming soon',
          spotlight: false
        }
      },
      saveTheWorld: {
        _type: 'CommonUI Simple Message',
        message: {
          image: 'https://progameguides.com/wp-content/uploads/2018/12/fortnite-outfit-fishstick.jpg',
          hidden: false,
          messagetype: 'normal',
          _type: 'CommonUI Simple Message Base',
          title: 'The Premium Experience',
          body: 'Epic said stw would be free in 2018, it isnt yet.',
          spotlight: false
        }
      },
      _activeDate: '2017-10-11T18:37:23.145Z',
       lastModified: '2019-05-06T12:59:15.974Z',
      _locale: 'en-US'
    },   
    battleroyalenews: {
        news: {
            platform_messages: [],
            _type: 'Battle Royale News',
            messages: [
                {
                    image: 'https://media.discordapp.net/attachments/848503097885065266/848503105511227422/unknown.png',
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    adspace: 'Scyre Chapter 1 Support',
                    title: 'The old is much better than the new',
                    body: 'added chapter 1 support',
                    spotlight: false
                },
                {
                    image: 'https://cdn.discordapp.com/attachments/848503097885065266/848504980490420274/Scyre.png',
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    adspace: 'ENJOY!',
                    title: 'Project Scyre Beta',
                    body: 'Enjoy the old',
                    spotlight: false
                },
                {
                    image: 'https://cdn.discordapp.com/attachments/838106041572130877/840656490561536020/OIP.png',
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    adspace: 'Discord',
                    title: 'Join our discord',
                    body: 'Discord : https://discord.gg/DAGhBg4Cr9',
                    spotlight: false
                }
            ]
        },
        _title: 'battleroyalenews',
        header: '',
        style: 'SpecialEvent',
        _activeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    },
    emergencynotice: {
        news: {
            platform_messages: [],
            _type: 'Battle Royale News',
            messages: [
                {
                    hidden: false,
                    _type: 'CommonUI Simple Message Base',
                    subgame: 'br',
                    title: 'Project Scyre Beta',
                    body: config.announcement,
                    spotlight: true
                }
            ]
        },
        _title: 'emergencynotice',
        _activeDate: new Date().toISOString(),
        lastModified: new Date().toISOString(),
        _locale: 'en-US'
    },
}
