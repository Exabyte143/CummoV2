"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const discord_js_1 = require("discord.js"); // Discord.js imports
const utils_1 = require("../utils");
const axios_1 = require("axios");
const qs = require("qs");
exports.Command = {
    Name: "define",
    Description: "Gets a definition from the website Urban Dictionary.",
    Permissions: "any",
    Role: "any",
    Run: async function (args, message, client) {
        // TODO add command functionality
        const searchingMessage = await message.channel.send("Searching...");
        console.log(args);
        const data = qs.stringify({
            'query': args
        });
        /*
         const config = {
           method: 'post',
           url: 'https://UrbanDictionary.xenonxyz08.repl.co/search',
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
           },
           data : data
         };
         */
        axios_1.default({
            method: 'post',
            url: 'https://UrbanDictionary.xenonxyz08.repl.co/search',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        })
            .then(async function (request) {
            const definition = request.data;
            searchingMessage.delete();
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
        })
            .catch(function (error) {
            console.log(error);
        });
        /*
            const definition = JSON.parse(data);
            if (definition["error"]) {
                Utils.error(message, definition["error"]);
                return;
            }
            
            const embed = new MessageEmbed()
                .setColor(await Utils.getThemeColor())
                .setTitle(definition["Name"])
                .setDescription(definition["Meaning"])
                .addFields({ name: "Example", value: definition["Example"] })
                .setURL(`https://www.urbandictionary.com/define.php?term=${args}`)
                .setFooter(definition["Contributor"], "https://media.discordapp.net/attachments/689538198111649867/817925344841433098/ud.png");
            message.reply(embed);
            */
    },
};
//# sourceMappingURL=define.js.map