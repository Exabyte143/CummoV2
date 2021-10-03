"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
const __1 = require("..");
const utils_1 = require("../utils");
exports.Command = {
    Name: "info",
    Description: "Shows information for a command.",
    Permissions: "any",
    Role: "any",
    Usage: "info [COMMAND]",
    Run: async function (args, message, client) {
        for (const [_, value] of Object.entries(__1.commands)) {
            if (value["Name"] == args.toLowerCase()) {
                const embed = new discord_js_1.MessageEmbed()
                    .setColor(await utils_1.Utils.getThemeColor())
                    .setTitle(value["Name"])
                    .setDescription(value["Description"])
                    .addField("Usage", `;${value["Usage"]}`);
                message.reply(embed);
                return;
            }
        }
        utils_1.Utils.error(message, "Command not found.");
    },
};
//# sourceMappingURL=info.js.map