"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
const utils_1 = require("../utils");
exports.Command = {
    Name: "unban",
    Description: "Unbans a user.",
    Permissions: discord_js_1.Permissions.FLAGS.BAN_MEMBERS,
    Role: "N/A",
    Run: async function (args, message, client) {
        // TODO add command functionality
        if (args === undefined) {
            utils_1.Utils.error(message, "You forgot to add an argument.");
        }
        try {
            await message.guild.members.unban(args);
            utils_1.Utils.success(message, `Successfully unbanned discord user ${args}`);
        }
        catch (error) {
            utils_1.Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
        }
    },
};
//# sourceMappingURL=unban.js.map