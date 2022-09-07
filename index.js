const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds,] });

client.once("ready", async () => {
  const data = [{
    name: "hello",
    description: "こんにちわんこ!",
  }];
  await client.application.commands.set(data, process.env.SERVER_ID);
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if(!interaction.isCommand()) {
    return
  }
  if(interaction.commandName === 'hello') {
    await interaction.reply('こんにちわんこ');
  }
})

client.login(process.env.DISCORD_TOKEN);