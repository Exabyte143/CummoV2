"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
const utils_1 = require("../utils");
exports.Command = {
    Name: "ungulag",
    Description: "Sends someone to the gulag",
    Permissions: discord_js_1.Permissions.FLAGS.ADMINISTRATOR,
    Role: "N/A",
    Run: async function (args, message, client) {
        // TODO add command functionality
        if (args === undefined) {
            utils_1.Utils.error(message, "You forgot to add an argument.");
            return;
        }
        let role = message.guild.roles.cache.find((role) => role.name === "Prisoner");
        let member = message.guild.members.cache.get(await utils_1.Utils.getUserIDFromMention(args));
        try {
            await member.roles.remove(role);
            role = member.roles.cache.find((role) => role.name == "Verified");
            if (role) {
                member.roles.add(role);
            }
            utils_1.Utils.success(message, `Successfully gulaged ${member.displayName}`);
        }
        catch (error) {
            utils_1.Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
        }
    },
};
//# sourceMappingURL=ungulag.js.map