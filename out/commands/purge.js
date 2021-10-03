"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
const utils_1 = require("../utils");
exports.Command = {
    Name: "purge",
    Description: "Used to delete multiple messages",
    Permissions: discord_js_1.Permissions.FLAGS.MANAGE_MESSAGES,
    Role: "N/A",
    Usage: "purge [AMOUNT]",
    Run: async function (args, message) {
        // TODO add command functionality
        if (args === undefined) {
            utils_1.Utils.error(message, "You forgot to add an argument.");
            return;
        }
        try {
            const numbers = parseInt(args, 10);
            if (numbers > 100) {
                let i;
                let tempNumbers = numbers;
                console.log(numbers / 100);
                for (i = 0; i < numbers / 100; i++) {
                    tempNumbers -= 100;
                    await message.channel.bulkDelete(100);
                }
                if (tempNumbers < 0) {
                    await message.channel.bulkDelete(tempNumbers);
                }
                return;
            }
            await message.channel.bulkDelete(numbers);
        }
        catch (error) {
            utils_1.Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
        }
    },
};
//# sourceMappingURL=purge.js.map