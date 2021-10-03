import { Message } from "discord.js"; // Discord.js imports

export const Command = {
	Name: "ping",
	Description: "Used for checking the latency between the bot the message being sent and responding to it",
	Permissions: "any",
	Role: "any",
	Usage: "ping",
	Run: async function (args: string, message: Message) {
		// TODO add command functionality
		let resMessage = await message.reply(`Calculating ping...`);
		resMessage.edit(`<@${message.author.id}>  Pong! 🏓 ${resMessage.createdTimestamp - message.createdTimestamp}ms`);
	},
};
