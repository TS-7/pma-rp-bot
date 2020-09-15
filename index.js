    const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

// ---------------------------------- Bot on start tells you it is ready in the console! ----------------------------------

client.on('ready', () => {
    console.log('Bot is ready to RP To Findout')
    console.log(client.channels);
    client.channels.cache.get(`751458895486255225`).send(new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Illumiinati's bot has been restarted")
    .setDescription("Check GitHub logs for changes and patch notes!")
    .setFooter("© Illumiinati")    
    )
});

// ---------------------------------- This is the basic `.ping` command with a pong response! ----------------------------------

    client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping') {
        message.channel.send('Pong')
    }
});

// ---------------------------------- This is the basic `.serverinfo` command with a response with all the information in the server! ----------------------------------

  client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
      
      if(command === 'serverinfo') {
  const fetch = require("node-fetch") // swapped to node-fetch instead of request to use async / await

  const info = await fetch("https://servers-live.fivem.net/api/servers/single/7blbde")
    .then(res => res.json())

  const { hostname, clients, vars, sv_maxclients } = info.Data

  return message.channel.send(new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setDescription("This provides you with all the information about the server!")
    .setTitle("Server Info : PMA-RP")
    .setAuthor("Positive Mental Attitude")
    .addFields(
      { name: "Server Name :", value: "PMA-RP" },
      { name: 'Players :', value: `${clients}/${sv_maxclients}` },
      { name: 'Discord :', value: `https://discord.gg/pmarp`},
      { name: 'Whitelist :', value: `http://pmarp.com/whitelist` }
    )
    .setFooter("Designed by Illumiinati")
  )}
      });

// ---------------------------------- This is the `.players` command with a response with number of players in PMA! ----------------------------------

      client.on('message', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
          const command = args.shift().toLowerCase();
          
          if(command === 'players') {
      const fetch = require("node-fetch") // swapped to node-fetch instead of request to use async / await
    
      const info = await fetch("https://servers-live.fivem.net/api/servers/single/7blbde")
        .then(res => res.json())
    
      const { hostname, clients, vars, sv_maxclients } = info.Data
    
      return message.channel.send(`The server currently has **${clients}** playing!`
      )}
          });

// ---------------------------------- Online command to update the status of the server ----------------------------------

client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + "online")) {
      async function clear() {
          message.delete();
          message.channel.bulkDelete(99);
      }
      clear()
       message.channel.send(new Discord.MessageEmbed()
      .setColor("#32CD32")
      .setTitle(":white_check_mark:   PMA-RP IS ONLINE!   :white_check_mark:")
      .setDescription("***If you happen to get **Curl Error Code 28** get whitelisted in the link below!***")
      .addFields(
        {name: '\u200b', value:'\u200b'},
        {name: "Whitelist :", value: "https://pmarp.com/whitelist", inline: true},
        {name: "Support Our Streamers Here :", value: "https://pmarp.com", inline: false},
        {name: "If you have issues :", value: "<#750763205852135474>", inline: true},
        {name: '\u200b', value:'\u200b', inline: true},
        {name: "Talk to other gamers :", value: "<#750763151938683063>", inline: true}
      )
      .setFooter("Designed by Illumiinati")

      )
      const channel = message.channel.name
      console.log(client.channels);
      client.channels.cache.get(`751458895486255225`).send(new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setDescription(`The command **.restart** was used in ${channel}` )
      .addField("Note :", "If this was an unauthorised use, report to Illumiinati immediately!", false)
      .setFooter("© Illumiinati")
      )
  }
});

// ------------------------------- Quick Restart Command Which Automatically Updates Itself! -----------------------------------

client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + "restart")) {
          function clear() {
          message.delete();
          message.channel.bulkDelete(99);
      }
        function wait() {
        setTimeout(function() { 
          message.delete();
          message.channel.bulkDelete(99);
          message.channel.send(new Discord.MessageEmbed()
          .setColor("#32CD32")
          .setAuthor("Server is back up!")
          .setTitle(":white_check_mark:   PMA-RP IS BACK ONLINE!   :white_check_mark:")
          .setDescription("If FiveM says you are banned, it is faking. Just F8 Quit and Relog!")
          .addFields(
            {name: '\u200b', value:'\u200b'},
            {name: "Whitelist :", value: "https://pmarp.com/whitelist", inline: true},
            {name: "Support Our Streamers Here :", value: "https://pmarp.com", inline: false},
            {name: "If you have issues :", value: "<#750763205852135474>", inline: true},
            {name: '\u200b', value:'\u200b', inline: true},
            {name: "Talk to other gamers :", value: "<#750763151938683063>", inline: true}
          )
          .setFooter("Designed by Illumiinati")
      
          )
      
        }, 5000 );  
  }
      clear()

       message.channel.send(new Discord.MessageEmbed()
      .setColor("#FFA500")
      .setAuthor("Quick Restart!")
      .setTitle(":vertical_traffic_light:   PMA-RP IS RESTARTING!   :vertical_traffic_light:")
      .setDescription("***Status will be updated when the server is back online! Patience Gamers!***")
      .addFields(
        {name: '\u200b', value:'\u200b'},
        {name: "Whitelist :", value: "https://pmarp.com/whitelist", inline: true},
        {name: "Support Our Streamers Here :", value: "https://pmarp.com", inline: false},
        {name: "If you have issues :", value: "<#750763205852135474>", inline: true},
        {name: '\u200b', value:'\u200b', inline: true},
        {name: "Talk to other gamers :", value: "<#750763151938683063>", inline: true}
      )
      .setFooter("Designed by Illumiinati")

      )
      console.log(client.channels);
      client.channels.cache.get(`751458895486255225`).send(new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Someone used the command **.online**")
      .setDescription("If this was an unauthorised use, report to Illumiinati immediately!")
      .setFooter("© Illumiinati")
      )
             
    wait()

    const channel = message.channel.name
    console.log(client.channels);
    client.channels.cache.get(`751458895486255225`).send(new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setDescription(`The command **.restart** was used in ${channel}` )
    .addField("Note :", "If this was an unauthorised use, report to Illumiinati immediately!", false)
    .setFooter("© Illumiinati")
    )

  }
});

// ------------------------------- Server Down Command For Updating Status -----------------------------------

client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + "down")) {
      async function clear() {
          message.delete();
          message.channel.bulkDelete(99);
      }
      clear()
      message.channel.send(new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setAuthor("Server Is Currently Down")
      .setTitle("THE SERVER IS DOWN FOR MAINTANANCE/PATCH  :red_circle:")
      .setDescription("***Status will be updated when the server is back online! Patience Gamers!***")
      .addFields(
        {name: '\u200b', value:'\u200b'},
        {name: "Whitelist :", value: "https://pmarp.com/whitelist", inline: true},
        {name: "Support Our Streamers Here :", value: "https://pmarp.com", inline: false},
        {name: "If you have issues :", value: "<#750763205852135474>", inline: true},
        {name: '\u200b', value:'\u200b', inline: true},
        {name: "Talk to other gamers :", value: "<#750763151938683063>", inline: true}
      )
      .setFooter("Designed by Illumiinati")

      )

      const channel = message.channel.name
      console.log(client.channels);
      client.channels.cache.get(`751458895486255225`).send(new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setDescription(`The command **.restart** was used in ${channel}` )
      .addField("Note :", "If this was an unauthorised use, report to Illumiinati immediately!", false)
      .setFooter("© Illumiinati")
      )
  }
});

client.login('NzUwNzU2NDUwODIwODE2OTM4.X0_Kbg.BND9UyHbySKpuOk_hvezh4kmjDs') 