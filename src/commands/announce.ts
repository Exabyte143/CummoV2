import { Client } from "@typeit/discord";
import { Message, MessageEmbed, Permissions, TextChannel } from "discord.js"; // Discord.js imports
import { Utils } from "../utils";
export const Command = {
	Name: "announce",
	Description: "Used for announcing things in the announcement channel.",
	Permissions: Permissions.FLAGS.ADMINISTRATOR,
	Role: "📢",
	Usage: "unban [DESCRIPTION]^^[IMAGEURL]",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		if (args === undefined) {
			Utils.error(message, "You forgot to add an argument.");
			return;
		}
		const announceChannel: any = client.channels.cache.get("780626498351661056");
		const announceEmbed = new MessageEmbed()
			.setColor(await Utils.getThemeColor())
			.setTitle(`Announcement from ${message.member.displayName}`)
			.setDescription(args.split("^^")[0]);

		try {
			announceEmbed.setImage(args.split("^^")[1]);
		} catch (error) {}
		await announceChannel.send("@everyone", { embed: announceEmbed });
		await message.delete();
	},
};
