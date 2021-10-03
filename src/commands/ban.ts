import { Client } from "@typeit/discord";
import { Message, Permissions, MessageEmbed } from "discord.js"; // Discord.js imports
import { Utils } from "../utils";
const BAN_MESSAGE = "You have been banned from the Family server, you may come back if you are unbanned and reinvited.";
export const Command = {
	Name: "ban",
	Description: "Bans a user from the server.",
	Permissions: Permissions.FLAGS.BAN_MEMBERS,
	Role: "N/A",
	Usage: "ban [USERMENTION]",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		if (args === undefined) {
			Utils.error(message, "You forgot to add an argument.");
			return;
		}
		let userID = Utils.getUserIDFromMention(args);
		try {
			let member = message.guild.members.cache.get(await userID);
			await member.send(BAN_MESSAGE);
			await member.ban();
			Utils.success(message, `Successfully banned ${member.displayName}`);
		} catch (error) {
			Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
		}
	},
};
