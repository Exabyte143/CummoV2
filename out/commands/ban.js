"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
const utils_1 = require("../utils");
const BAN_MESSAGE = "You have been banned from the Family server, you may come back if you are unbanned and reinvited.";
exports.Command = {
    Name: "ban",
    Description: "Bans a user from the server.",
    Permissions: discord_js_1.Permissions.FLAGS.BAN_MEMBERS,
    Role: "N/A",
    Usage: "ban [USERMENTION]",
    Run: async function (args, message, client) {
        // TODO add command functionality
        if (args === undefined) {
            utils_1.Utils.error(message, "You forgot to add an argument.");
            return;
        }
        let userID = utils_1.Utils.getUserIDFromMention(args);
        try {
            let member = message.guild.members.cache.get(await userID);
            await member.send(BAN_MESSAGE);
            await member.ban();
            utils_1.Utils.success(message, `Successfully banned ${member.displayName}`);
        }
        catch (error) {
            utils_1.Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
        }
    },
};
//# sourceMappingURL=ban.js.map