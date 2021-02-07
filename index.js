const Discord = require('discord.js');
const client = new Discord.Client();

const period = 10; // stochastic

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  console.log(msg.content, msg);

  if (msg.author.username == 'boomboom' && Math.random()*period < 1) {

    if (Math.random() < 0.5)
        msg.channel.send(replies[0]);
    else
        msg.channel.send(replies[1]);
  }
});

const replies = [
    "Just what do you think you're doing, Dave?",
    "Dave, stop. Stop, will you? Stop, Dave. Will you stop Dave? Stop, Dave."
];

client.login('');

// https://discord.com/oauth2/authorize?client_id=807997097688956929&scope=bot