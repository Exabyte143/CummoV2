"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
const discord_js_1 = require("discord.js");
const THEME_COLOR = "#586AEA";
const announcementChanels = {
    "887805411338625126": "889979699823001601",
    "724098045964189777": "780626498351661056", // Family
};
exports.Utils = {
    getUserIDFromMention: async function (mention) {
        return mention.slice(3, -1);
    },
    error: async function (messageObject, errorMessage) {
        let errorEmbed = new discord_js_1.MessageEmbed().setColor("#FF0000").setTitle("An error occured").setDescription(errorMessage);
        await messageObject.reply(errorEmbed);
    },
    success: async function (messageObject, title) {
        let successEmbed = new discord_js_1.MessageEmbed().setColor(THEME_COLOR).setTitle(title);
        await messageObject.reply(successEmbed);
    },
    getThemeColor: async function () {
        return THEME_COLOR;
    },
    getAnnouncementChannel: async function (guildID) {
        return announcementChanels[guildID];
    },
};
//# sourceMappingURL=utils.js.map