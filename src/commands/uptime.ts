import { Client } from "@typeit/discord";
import { Message, Permissions } from "discord.js"; // Discord.js imports
import { startTime } from "../index";
import { Utils } from "../utils";
export const Command = {
	Name: "uptime",
	Description: "Gets the uptime of the bot",
	Permissions: "any",
	Role: "any",
	Usage: "uptime",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		
		const currentTime = Date.now() / 100
		const uptime = currentTime / 100 - startTime;
		Utils.log(uptime);
	},
};
