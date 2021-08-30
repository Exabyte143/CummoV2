"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
const utils_1 = require("../utils");
const spawn = require("child_process").spawn;
exports.Command = {
    Name: "define",
    Description: "Gets a definition from the website Urban Dictionary.",
    Permissions: "any",
    Role: "any",
    Run: async function (args, message, client) {
        // TODO add command functionality
        const pythonProcess = spawn("python", ["./src/UrbanDictionary.py", args]);
        pythonProcess.stdout.on("data", async (data) => {
            const definition = JSON.parse(data);
            if (definition["error"]) {
                utils_1.Utils.error(message, definition["error"]);
                return;
            }
            const embed = new discord_js_1.MessageEmbed()
                .setColor(await utils_1.Utils.getThemeColor())
                .setTitle(definition["Name"])
                .setDescription(definition["Meaning"])
                .addFields({ name: "Example", value: definition["Example"] })
                .setURL(`https://www.urbandictionary.com/define.php?term=${args}`)
                .setFooter(definition["Contributor"], "https://media.discordapp.net/attachments/689538198111649867/817925344841433098/ud.png");
            message.reply(embed);
        });
    },
};
//# sourceMappingURL=define.js.map