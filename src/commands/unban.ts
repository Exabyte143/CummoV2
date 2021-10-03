import { Client } from "@typeit/discord";
import { Message, Permissions } from "discord.js"; // Discord.js imports
import { Utils } from "../utils";
export const Command = {
	Name: "unban",
	Description: "Unbans a user.",
	Permissions: Permissions.FLAGS.BAN_MEMBERS,
	Role: "N/A",
	Usage: "unban [USERID]",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		if (args === undefined) {
			Utils.error(message, "You forgot to add an argument.");
		}
		try {
			await message.guild.members.unban(args);
			Utils.success(message, `Successfully unbanned discord user ${args}`);
		} catch (error) {
			Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
		}
	},
};
