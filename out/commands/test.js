"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
exports.Command = {
    Name: "test",
    Description: "N/A",
    Permissions: discord_js_1.Permissions.FLAGS.ADMINISTRATOR,
    Role: "testrole",
    Run: async function (args, message) {
        // TODO add command functionality
        console.log(message.content);
    },
};
//# sourceMappingURL=test.js.map