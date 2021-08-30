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
    Run: async function (args, message, client) {
        // TODO add command functionality
        if (args === undefined) {
            utils_1.Utils.error(message, "You forgot to add an argument.");
            return;
        }
        const announceChannel = client.channels.cache.get("780626498351661056");
        const announceEmbed = new discord_js_1.MessageEmbed()
            .setColor(await utils_1.Utils.getThemeColor())
            .setTitle(`Announcement from ${message.member.displayName}`)
            .setDescription(args);
        await announceChannel.send("@everyone", { embed: announceEmbed });
        await message.delete();
    },
};
//# sourceMappingURL=announce.js.map