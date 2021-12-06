import { Client } from "@typeit/discord";
import { Message, MessageEmbed, Permissions } from "discord.js"; // Discord.js imports
import { Utils } from "../utils";
import axios from "axios";
const qs = require("qs");

export const Command = {
	Name: "define",
	Description: "Gets a definition from the website Urban Dictionary.",
	Permissions: "any",
	Role: "any",
	Usage: "define [QUERY]",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		if (!args)
		{
			Utils.error(message, "You need to add a search query.");
			return;
		}
		
		const searchingMessage = await message.channel.send("Searching...");

		const data = qs.stringify({
			query: args,
		});
		axios({
			method: "post",
			url: "https://UrbanDictionary.xenonxyz08.repl.co/search",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			data: data,
		})
			.then(async function (request) {
				const definition = request.data;
				searchingMessage.delete();
				if (definition["error"]) {
					Utils.error(message, definition["error"]);
					return;
				}
				const embed = new MessageEmbed()
					.setColor(await Utils.getThemeColor())
					.setTitle(definition["Name"])
					.setDescription(definition["Meaning"])
					.addFields({ name: "Example", value: definition["Example"] })
					.setURL(`https://www.urbandictionary.com/define.php?term=${args.replace(' ', "%20")}`)
					.setFooter(definition["Contributor"], "https://media.discordapp.net/attachments/689538198111649867/817925344841433098/ud.png");
				message.reply(embed);
			})
			.catch(function (error) {
				searchingMessage.delete();
				Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
			});
	},
};
