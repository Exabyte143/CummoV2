"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
const tslib_1 = require("tslib");
// Use the Client that are provided by @typeit/discord NOT discord.js
const discord_1 = require("@typeit/discord");
const fs = require("fs");
const discord = require("discord.js");
exports.commands = {};
let AppDiscord = class AppDiscord {
    constructor() {
        this.prefix = "$";
    }
    async onMessage([message], client) {
        if (!message.content.startsWith(this.prefix) || message.author.bot) {
            return;
        }
        let args = message.content.split(message.content.split(" ")[0] + " ")[1];
        let command = message.content.split(" ")[0].split(this.prefix)[1];
        try {
            if (message.member.roles.cache.find((role) => role.name === exports.commands[command].Role) || exports.commands[command].Role == "any") {
                // Checks is user has the correct roles
                exports.commands[command].Run(args, message, client);
            }
            else if (message.member.permissions.has(exports.commands[command].Permissions) || exports.commands[command].Permissions == "any") {
                // Checks if the user has the correct perms
                exports.commands[command].Run(args, message, client);
            }
        }
        catch (_a) { }
    }
    async onReady() {
        console.log("bot is ready");
    }
};
tslib_1.__decorate([
    discord_1.On("message"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, discord_1.Client]),
    tslib_1.__metadata("design:returntype", Promise)
], AppDiscord.prototype, "onMessage", null);
tslib_1.__decorate([
    discord_1.On("ready"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AppDiscord.prototype, "onReady", null);
AppDiscord = tslib_1.__decorate([
    discord_1.Discord()
], AppDiscord);
async function start() {
    const token = "ODgwNTMwMjE1ODQxOTc2MzQx.YSfnqg.yf36pUZ95WKF-PGgP1Lzk7MA_ss";
    const client = new discord_1.Client({
        classes: [
            `${__dirname}/*Discord.ts`,
            `${__dirname}/*Discord.js`, // If you compile using "tsc" the file extension change to .js
        ],
        silent: false,
        variablesChar: ":",
    });
    const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
        if (file != "template.js") {
            console.log(`${file} loaded successfully`);
            const command = require(`./commands/${file.split(".")[0]}`).Command;
            exports.commands[command.Name] = command;
        }
    }
    console.log("commands loaded succesfully");
    await client.login(token);
}
start();
//# sourceMappingURL=index.js.map