// Use the Client that are provided by @typeit/discord NOT discord.js
import { ArgsOf, Client, Discord, On, Once } from "@typeit/discord";
import * as fs from "fs";
const discord = require("discord.js");
export let commands = {};

@Discord()
abstract class AppDiscord {
	prefix = ";";
	@On("message")
	private async onMessage([message]: ArgsOf<"message">, client: Client) {
		if (!message.content.startsWith(this.prefix) || message.author.bot) {
			return;
		}
		let args = message.content.split(message.content.split(" ")[0] + " ")[1];
		let command = message.content.split(" ")[0].split(this.prefix)[1];
		try {
			if (message.member.roles.cache.find((role) => role.name === commands[command].Role) || commands[command].Role == "any") {
				// Checks is user has the correct roles
				commands[command].Run(args, message, client);
			} else if (message.member.permissions.has(commands[command].Permissions) || commands[command].Permissions == "any") {
				// Checks if the user has the correct perms
				commands[command].Run(args, message, client);
			}
		} catch {}
	}

	@On("ready")
	private async onReady(_: any, client: Client) {
		console.log("bot is ready");
		client.user.setActivity(`${this.prefix}list | Exabyte`, { type: "PLAYING" });
	}
}

async function start() {
	const token = "NzgxMjUwMjAyMDE4NjQzOTY4.X7658w.49yRE10QEVOHh0xrwD2Zt4HzHvI";
	const client = new Client({
		classes: [
			`${__dirname}/*Discord.ts`, // glob string to load the classes
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
			commands[command.Name] = command;
		}
	}
	console.log("commands loaded succesfully");

	await client.login(token);
}

start();
