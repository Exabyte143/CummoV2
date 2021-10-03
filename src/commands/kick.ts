import { Client } from "@typeit/discord";
import { Message, Permissions, MessageEmbed } from "discord.js"; // Discord.js imports
import { Utils } from "../utils";
const KICK_MESSAGE = "You have been kicked from the Family server, you may come back if you are reinvited.";
export const Command = {
	Name: "kick",
	Description: "Kicks a user from the server.",
	Permissions: Permissions.FLAGS.KICK_MEMBERS,
	Role: "N/A",
	Usage: "kick [USERMENTION]",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		if (args === undefined) {
			Utils.error(message, "You forgot to add an argument.");
			return;
		}
		let userID = Utils.getUserIDFromMention(args);
		try {
			let member = message.guild.members.cache.get(await userID);
			await member.send(KICK_MESSAGE);
			await member.kick();
			Utils.success(message, `Successfully kicked ${member.displayName}`);
		} catch (error) {
			Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
		}
	},
};
