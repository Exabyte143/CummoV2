import { Client } from "@typeit/discord";
import { Message, MessageEmbed, Permissions } from "discord.js"; // Discord.js imports
import { commands } from "..";
import { Utils } from "../utils";

export const Command = {
	Name: "info",
	Description: "Shows information for a command.",
	Permissions: "any",
	Role: "any",
	Usage: "info [COMMAND]",
	Run: async function (args: string, message: Message, client: Client) {
		for (const [_, value] of Object.entries(commands)) {
			if (value["Name"] == args.toLowerCase()) {
				const embed = new MessageEmbed()
					.setColor(await Utils.getThemeColor())
					.setTitle(value["Name"])
					.setDescription(value["Description"])
					.addField("Usage", `;${value["Usage"]}`);
				message.reply(embed);
				return;
			}
		}
		Utils.error(message, "Command not found.");
	},
};
