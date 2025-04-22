const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  Events,
} = require("discord.js");

const { config } = require("dotenv");

config();

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;

// Check if token and client ID are provided
if (!token || !clientId) {
  console.error(
    "Error: DISCORD_TOKEN or CLIENT_ID is missing in the .env file."
  );
  process.exit(1);
}

// Define the slash command
const commands = [
  {
    name: "hello-world",
    description: "Replies with a friendly greeting!",
  },
];

// Register the slash command with Discord
const rest = new REST({ version: "10" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(clientId), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error("Error registering commands:", error);
  }
})();

// Create a new Discord client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Event listener for when the client is ready
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Event listener for interactions (slash commands)
client.on(Events.InteractionCreate, async (interaction) => {
  // Ignore interactions that are not slash commands
  if (!interaction.isChatInputCommand()) return;

  const { commandName, user } = interaction;

  // Log command usage and user ID
  console.log(`User ID ${user.id} used command /${commandName}`);

  if (commandName === "hello-world") {
    try {
      await interaction.reply("👋 Hello, world! I am a Discord bot!");
    } catch (error) {
      console.error(
        `Error handling /${commandName} command for user ${user.id}:`,
        error
      );
      // Attempt to inform the user about the error, if possible
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    }
  }
});

// Log in to Discord with the client's token
client.login(token).catch((error) => {
  console.error("Error logging in:", error);
  process.exit(1);
});
