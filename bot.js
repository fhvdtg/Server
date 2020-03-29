const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const SQLite = require('sqlite'); // SQLpackage

const path = require('path'); // PATHpackage

const moment = require('moment');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const FFMPEG = require('ffmpeg');

const gif = require("gif-search");

const Canvas = require("canvas");
const pretty = require("pretty-ms")
var time = require("./time.json");
const credits = JSON.parse(fs.readFileSync('./credits.json'));

const welcome = JSON.parse(fs.readFileSync("./welcomer.json", "utf8"));

let xp = require('./xp.json'); //سوي ملف بأسم xp.json

const reportjson = JSON.parse(fs.readFileSync("./report.json", "utf8"));

const rWlc = JSON.parse(fs.readFileSync("./AutoRole.json", "utf8"));

const Captcha = JSON.parse(fs.readFileSync("./Captcha.json","utf8"));

const afk = require('./afk.json');

let vipKeys = JSON.parse(fs.readFileSync("./vipKeys.json", "utf8"));

const client = new Discord.Client();
var prefix = "!";
var adminprefix = '!'
const developers = ["436918120184021012"]


 client.on('ready', function(){
    var ms = 10000 ;
    var setGame = ['!help','VortexPrison ChatBot','Bot by MrBloods','Ip: play.vortexprison.net','Welcome To VortexPrison Server!'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/MrBloods`);
    }, ms);
console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
});

client.login(process.env.BOT_TOKEN);//MrBloods bot
