"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
const index_1 = require("../index");
const utils_1 = require("../utils");
exports.Command = {
    Name: "list",
    Description: "Shows a list of commands.",
    Permissions: "any",
    Role: "any",
    Usage: "list",
    Run: async function (args, message, client) {
        // TODO add command functionality
        const embed = new discord_js_1.MessageEmbed().setColor(await utils_1.Utils.getThemeColor()).setDescription("Here is a list of commands, use ;info [COMMAND] for more info.");
        for (const [key, value] of Object.entries(index_1.commands)) {
            if (value["Name"] != "N/A") {
                embed.addField(value["Name"], "||\n||", false);
            }
        }
        message.reply(embed);
    },
};
//# sourceMappingURL=list.js.map