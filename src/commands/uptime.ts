import { Client } from "@typeit/discord";
import { Message, Permissions } from "discord.js"; // Discord.js imports

export const Command = {
	Name: "uptime",
	Description: "Gets the uptime of the bot",
	Permissions: "any",
	Role: "any",
	Usage: "uptime",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		
	},
};
