"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
exports.Command = {
    Name: "ping",
    Description: "Used for checking the latency between the bot the message being sent and responding to it",
    Permissions: "any",
    Role: "any",
    Run: async function (args, message) {
        // TODO add command functionality
        let resMessage = await message.reply(`Calculating ping...`);
        resMessage.edit(`<@${message.author.id}>  Pong! 🏓 ${resMessage.createdTimestamp - message.createdTimestamp}ms`);
    },
};
//# sourceMappingURL=ping.js.map