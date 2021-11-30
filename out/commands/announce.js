"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
const utils_1 = require("../utils");
exports.Command = {
    Name: "announce",
    Description: "Used for announcing things in the announcement channel.",
    Permissions: discord_js_1.Permissions.FLAGS.ADMINISTRATOR,
    Role: "📢",
    Usage: "unban [DESCRIPTION]^^[IMAGEURL]",
    Run: async function (args, message, client) {
        // TODO add command functionality
        if (args === undefined) {
            utils_1.Utils.error(message, "You forgot to add an argument.");
            return;
        }
        const announceChannel = client.channels.cache.get(await utils_1.Utils.getAnnouncementChannel(message.guild.id));
        const announceEmbed = new discord_js_1.MessageEmbed()
            .setColor(await utils_1.Utils.getThemeColor())
            .setTitle(`Announcement from ${message.member.displayName}`)
            .setDescription(args.split("^^")[0]);
        try {
            announceEmbed.setImage(args.split("^^")[1]);
        }
        catch (error) { }
        await announceChannel.send("@everyone", { embed: announceEmbed });
        await message.delete();
    },
};
//# sourceMappingURL=announce.js.map