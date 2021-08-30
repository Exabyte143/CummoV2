import { Client } from "@typeit/discord";
import { Message, MessageEmbed, Permissions } from "discord.js"; // Discord.js imports
import { Utils } from "../utils";
const spawn = require("child_process").spawn;
export const Command = {
	Name: "define",
	Description: "Gets a definition from the website Urban Dictionary.",
	Permissions: "any",
	Role: "any",
	Run: async function (args: string, message: Message, client: Client) {
		// TODO add command functionality
		const pythonProcess = spawn("python", ["./src/UrbanDictionary.py", args]);
		pythonProcess.stdout.on("data", async (data) => {
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
		});
	},
};
