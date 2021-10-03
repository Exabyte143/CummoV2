import { Client } from "@typeit/discord";
import { Message, MessageEmbed, Permissions } from "discord.js"; // Discord.js imports
import { commands } from "../index";
import { Utils } from "../utils";
export const Command = {
	Name: "list",
	Description: "Shows a list of commands.",
	Permissions: "any",
	Role: "any",
	Usage: "list",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		const embed = new MessageEmbed().setColor(await Utils.getThemeColor()).setDescription("Here is a list of commands, use $help [COMMAND] for more info.");

		for (const [key, value] of Object.entries(commands)) {
			if (value["Name"] != "N/A") {
				embed.addField(value["Name"], "||\n||", false);
			}
		}
		message.reply(embed);
	},
};
