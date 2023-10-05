const { myInfo } = require ('./information');
const cowsay = require('cowsay');

console.log(cowsay.say(
    {
        text: `Je suis Wilder`,
        e : `${myInfo.name}`,
        T : `${myInfo.campus}`,
    }
))