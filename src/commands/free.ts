import { Client } from "@typeit/discord";
import { Message, Permissions } from "discord.js"; // Discord.js imports
import { Utils } from "../utils";
export const Command = {
	Name: "free",
	Description: "Sends someone to the gulag",
	Permissions: Permissions.FLAGS.ADMINISTRATOR,
	Role: "N/A",
	Usage: "free [USERMENTION]",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		if (args === undefined) {
			Utils.error(message, "You forgot to add an argument.");
			return;
		}

		let role = message.guild.roles.cache.find((role) => role.name === "Prisoner");
		let member = message.guild.members.cache.get(await Utils.getUserIDFromMention(args));
		try {
			await member.roles.remove(role);
			Utils.success(message, `Successfully free ${member.displayName}`);
		} catch (error) {
			Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
		}
	},
};
