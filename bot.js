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

 client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find("name","「👋」welcome");
        if(!welcomer) return;
        if(welcomer) {
           moment.locale('ar-ly');
           var h = member.user;
          let norelden = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(h.avatarURL)
          .setAuthor(h.username,h.avatarURL)
          .addField(': When you joinned the discord: ',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
           .addField(': When you joinned the server: ',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true) 
           .setFooter(`${h.tag}`,"https://media.discordapp.net/attachments/693389788023095306/693843294085447780/Vortex.png?width=902&height=508")
       welcomer.send({embed:norelden});          
                 
   
        }
        });

client.on('message', msg => {
  if(msg.content === '!invite')
  msg.reply('(Soon) :new_moon_with_face:')
});

 client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "rl")) {
    if(!args) return message.reply('Type the rank name');
    if(!role) return message.reply('This rank does not exist');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- Rank name',role.name,true)
    .addField('- Rank id',role.id,true)
    .addField('- Rank created',role.createdAt.toLocaleString(),true)
    .addField('- Rank color',role.hexColor,true)
    .addField('- Number of members with the same rank',role.members.size,true)
    .addField('- Center rank between all ranks',role.position - message.guild.roles.size,true)
    .addField('- Rank properties',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});

client.on("message", msg => {
    var prefix = '!'//البركفس
    if(msg.content.startsWith(prefix + 'myserver')){
      let embed = new Discord.RichEmbed()
      .setThumbnail(msg.guild.iconURL)
      .setColor("RANDOM")
      .addField("Year📆",msg.guild.createdAt.getFullYear())
      .addField("Hour📆", msg.guild.createdAt.getHours())
      .addField("Day📆", msg.guild.createdAt.getDay())
      .addField("Month📆", msg.guild.createdAt.getMonth())
      .addField("Minutes📆", msg.guild.createdAt.getMinutes())
      .addField("Seconds📆", msg.guild.createdAt.getSeconds())
      .addField("Full📆", msg.guild.createdAt.toLocaleString())
      .setTimestamp()
      msg.channel.send(embed);
    }
  });

client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setLeave")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| Please type your message now... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| Type the name of the room now... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **| Prepared successfully...  **').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Leave Msg Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Channel:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    welcome[message.guild.id] = {
leavechannel: boi,
leavemsg: thisMessage,
onoff: 'On',
leave: 'On'
    }
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
  })
   }
            )
        })
    })
})
    })
}})

client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'rainbow')) {//to create the rainbow role
      let role = message.guild.roles.find('name', 'VortexPrison.')
    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
  //start of create role
  if(!role){
    rainbow =  message.guild.createRole({
   name: "MrBloods.",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})
 
}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})
 
client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'MrBloods.');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 15000);//the rainbow time
})

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose: Welcome to VortexPrison server ! :rose: 
  :crown: Have fun!: ${member}:crown:  
  You're number: ${member.guild.memberCount} `) 
  }).catch(console.error)
  })

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**Thank you for adding the bot to your server.**`)
        guild.owner.send(embed)
  });

client.on('message', message => {
         if(message.content === prefix + "closeroom") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__You dont have permsission!__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__Chat has been closed!__ ✅ **")
                });
                  }
      if(message.content === prefix + "openroom") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__You dont have permsission!__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__Chat has been opened!__✅**")
                });
      }
         
});

client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "!";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("RANDOM")
                    .addField(`${message.author.username}`, `You have invited **${nul}** person.`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .addField(`${message.author.username}`, `You have not invited anyone to this server.`)
 
                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invitec')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **You have sent all the invitation links you have created in your **")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}
 
});

client.on('message', async message => {
  if(message.author.bot) return;
  let prefix = '!';

  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if(!message.content.toLowerCase().startsWith(prefix)) return;

  if(command == 'rc' ) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You don't have permission to do that! ❌`);
    message.channel.send("Scanning..").then(async m => {
      await message.guild.roles.forEach(role => {
        if(/^\d+$/gi.test(role.name)) {
          role.delete();
        }
      });
      m.edit(`All colors were removed.`)
    });
  }
});

client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content.startsWith(prefix + "setLeave")) {
             
    let filter = m => m.author.id === message.author.id;
    let thisMessage;
    let thisFalse;
 
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('You don\'t have permission').then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
   
    message.channel.send(':pencil: **| Please type your message now... :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            thisMessage = collected.first().content;
            let boi;
            msg.edit(':scroll: **| Type the name of the room now... :pencil2: **').then(msg => {
     
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    boi = collected.first().content;
                    msg.edit('✅ **| Prepared successfully...  **').then(msg => {
       
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done The Leave Msg Code Has Been Setup**')
                      .addField('Message:', `${thisMessage}`)
                      .addField('Channel:', `${boi}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    welcome[message.guild.id] = {
leavechannel: boi,
leavemsg: thisMessage,
onoff: 'On',
leave: 'On'
    }
    fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
    if (err) console.error(err)
  })
   }
            )
        })
    })
})
    })
}})

client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'rainbow')) {//to create the rainbow role
      let role = message.guild.roles.find('name', 'VortexPrison.')
    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
  //start of create role
  if(!role){
    rainbow =  message.guild.createRole({
   name: "MrBloods.",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})
 
}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})
 
client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'MrBloods.');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 15000);//the rainbow time
})

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose: Welcome to VortexPrison server ! :rose: 
  :crown: Have fun!: ${member}:crown:  
  You're number: ${member.guild.memberCount} `) 
  }).catch(console.error)
  })

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**Thank you for adding the bot to your server.**`)
        guild.owner.send(embed)
  });

client.on('message', message => {
    if(message.content == '!allservers') {
             if(!message.author.id === '436918120184021012') return;
    var gimg;//Toxic Codes
    var gname;//Toxic Codes
    var gmemb;//Toxic Codes
    var gbots;//Toxic Codes
    var groles;//Toxic Codes
    var servers = client.guilds;
    servers.forEach((g)=>{//Toxic Codes
    gname = g.name;//Toxic Codes
    gimg = g.iconURL;//Toxic Codes
    gmemb = g.members.size;//Toxic Codes
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});//Toxic Codes
    let serv = new Discord.RichEmbed()//Toxic Codes
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server bots',gbots)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);//Toxic Codes
          message.channel.sendEmbed(serv);
    }) //Toxic Codes
    }//Toxic Codes
    }); //Toxic Codes

client.on('message', message => { // Toxic Codes
    if (!message.content.startsWith(prefix)) return; // Toxic Codes
  if(!message.channel.guild) return message.reply('** This command only for servers **') // Toxic Codes
    let command = message.content.split(" ")[0]; // Toxic Codes
    command = command.slice(prefix.length); // Toxic Codes
    if (command === "kill"){ // Toxic Codes

   var sabotage = message.mentions.users.first();
   if(sabotage == message.author)return message.reply(`**Suicide is not good!**`);// Toxic Codes
    if(sabotage === client.user) return message.reply(`**You want to kill me?**`);
  if (sabotage < 1) {
    message.delete();
    return message.channel.sendMessage('Put something to kill, like mention user, or use an emoji.');// Toxic Codes
  }
  if (!sabotage) return message.channel.send(`Please Mention A Member to Kill ⚠`)// Toxic Codes
  message.channel.send("▄︻̷̿┻̿═━一 ${sabotage")// Toxic Codes
  .then(msg =>{
  msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} 3⃣`);// Toxic Codes
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} 2⃣`);// Toxic Codes
  }, 1000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} 1⃣`);// Toxic Codes
  }, 2000);// Toxic Codes
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 💥`);// Toxic Codes
  }, 3000);// Toxic Codes
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 🔥`);// Toxic Codes
  }, 4000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 💀`);// Toxic Codes
  }, 5000);
  msg.delete(6000)
  message.delete()// Toxic Codes
  })
  message.channel.send("**The crime was successfully concealed 🕳 !**").then(msg => msg.delete(10000));// Toxic Codes
    }
});// Toxic Codes

client.on('message', message => {
    var prefix = "!"
     let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
 
 if(command == "paint") {
     var Canvas = require('canvas')
   , Image = new Canvas.Image
   , canvas = new Canvas(450, 170)
   , ctx = canvas.getContext('2d');
   ctx.font = '30px Impact';
   let args = message.content.split(" ").slice(1);
   
 Image.src = canvas.toBuffer();
 
     console.log(Image);
 ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
 ctx.fillText(args.join("  "),110, 70);
 
 
 ctx.beginPath();
 ctx.lineTo(50, 102);
 ctx.stroke();
 
 message.channel.sendFile(canvas.toBuffer());
 }
 
 });

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'vip')) {
        let guild = message.mentions.members.first();
                          let ZmA = new Discord.RichEmbed()
                  .setColor('3fcf24')
                  .setDescription('**__✅ I added the rank__**')
        message.member.addRole(message.guild.roles.find('name', 'VIP'));
                    message.channel.send({embed:ZmA});
    }
}); //Toxic Codes

client.on('message', message => {
           if (!message.channel.guild) return;
 
    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setReport")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The report Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
reportjson[message.guild.id] = {
channel: room,
}
fs.writeFile("./report.json", JSON.stringify(reportjson), (err) => {
if (err) console.error(err)
})
client.on('message', message => {
 
    if(message.content.startsWith(`${prefix}report`)) {
        let  user  =  message.mentions.users.first();
      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
    let reason = message.content.split(" ").slice(2).join(" ");
      if(!user)  return  message.channel.send("**You didn\'t mention the user to report**")
      if(!reason) return message.reply(`**Please provide a reason**`)
    let findchannel = (message.guild.channels.find('name', `${reportjson[message.guild.id].channel}`))
    if(!findchannel) return message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
    message.channel.send(`Done Thank You For Your Report Will Be Seen By The Staffs`)
    let sugembed = new Discord.RichEmbed()
    .setTitle('New Report !')
    .addField('Report By:', `${message.author}`)
    .addField('Reported User:', `${user}`)
    .addField('Report Reason:', `${reason}`)
    .setFooter(client.user.username)
    findchannel.sendEmbed(sugembed)
        .then(function (message) {
          message.react('✅')
          message.react('❌')
        })
        .catch(err => {
            message.reply(`Error 404: The report Channel Cant Find Or Not Set To Set The report Channel Type: ${prefix}setReport`)
            console.error(err);
        });
        }
      }
)}
})

client.on('message',async rebel => {
      if(rebel.author.bot) return;
  if (afk[rebel.author.id]) {
    delete afk[rebel.author.id];
    if (rebel.member.nickname === null) {
      msg.channel.send("**Welcome , <@"+rebel.author.id+"> I am trying to remove the afk from you.**");     } else {
      rebel.member.setNickname(rebel.member.nickname.replace(/(\[AFK\])/,''));
      rebel.channel.send("**Welcome , <@"+rebel.author.id+"> The afk was removed from you because you come back.**"); 
    }
    fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});
} else {
    if (rebel.content.startsWith(prefix + 'afk ')||rebel.content === prefix + 'afk') {
      rebel.member.setNickname("[AFK] " + rebel.member.displayName);
      let args1 = rebel.content.split(' ').slice(1);
      if (args1.length === 0) {
        afk[rebel.author.id] = {"reason": true}; 
        rebel.reply("** I put you in a afk position **")
      } else {
        afk[rebel.author.id] = {"reason": args1.join(" ")}; // with reason
        rebel.reply("**I added you to your afk because** "+ args1.join(" ") + ".")
      }
      fs.writeFile("./afk.json", JSON.stringify(afk), (err) => {if (err) console.error(err);});   
  }
}
         var mentionned = rebel.mentions.users.first();
if(rebel.mentions.users.size > 0) return ;
if (afk[rebel.mentions.users.first().id]) {
if (afk[rebel.mentions.users.first().id].reason === true) {
rebel.channel.send(`**<@!${mentionned.id}> Afk** `);
}else{
rebel.channel.send(`**<@!${mentionned.username}> is Afk , Afk reason \n ${afk[rebel.mentions.users.first().id].reason}**`);
}
} 
});

client.on('message', message => {
 if(message.content.split(' ')[0] == prefix + 'dc') { 
 if (!message.channel.guild) return;
 message.guild.channels.forEach(m => {
 m.delete();
 message.reply("`All channels successfully deleted!`")
 });
 }
 if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
 if (!message.channel.guild) return;
 message.guild.roles.forEach(m => {
 m.delete();
 });
 message.reply("`All ranks successfully deleted!`")
 }
 });

client.login(process.env.BOT_TOKEN);//MrBloods bot
