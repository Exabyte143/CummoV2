import { Client } from "@typeit/discord";
import { Message, MessageEmbed, Permissions, TextChannel } from "discord.js"; // Discord.js imports
import { Utils } from "../utils";
export const Command = {
	Name: "announce",
	Description: "Used for announcing things in the announcement channel.",
	Permissions: Permissions.FLAGS.ADMINISTRATOR,
	Role: "reporter",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		if (args === undefined) {
			Utils.error(message, "You forgot to add an argument.");
			return;
		}
		const announceChannel: any = client.channels.cache.get("880646251647991810");
		const announceEmbed = new MessageEmbed()
			.setColor(await Utils.getThemeColor())
			.setTitle(`Announcement from ${message.member.displayName}`)
			.setDescription(args);
		await announceChannel.send("@everyone", { embed: announceEmbed });
		await message.delete();
	},
};
