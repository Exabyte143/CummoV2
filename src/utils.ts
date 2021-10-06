import { Message, MessageEmbed } from "discord.js";

const THEME_COLOR = "#586AEA";
const announcementChanels = {
	"887805411338625126": "889979699823001601", // IBPD
	"724098045964189777": "780626498351661056", // Family
};

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
	getAnnouncementChannel: async function (guildID: string) {
		return announcementChanels[guildID];
	},
};
