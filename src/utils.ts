import { Message, MessageEmbed } from "discord.js";

const THEME_COLOR = "#586AEA";

export const Utils = {
	getUserIDFromMention: async function (mention: String) {
		return mention.slice(3, -1);
	},
	error: async function (messageObject: Message, errorMessage: string) {
		let errorEmbed = new MessageEmbed().setColor("#FF0000").setTitle("An error occured").setDescription(errorMessage);
		await messageObject.reply(errorEmbed);
	},
	success: async function (messageObject: Message, title: string) {
		let successEmbed = new MessageEmbed().setColor(THEME_COLOR).setTitle(title);
		await messageObject.reply(successEmbed);
	},
	getThemeColor: async function () {
		return THEME_COLOR;
	},
};
