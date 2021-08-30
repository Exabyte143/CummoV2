import { Message, MessageEmbed, Permissions } from "discord.js"; // Discord.js imports
import { Utils } from "../utils";

export const Command = {
	Name: "purge",
	Description: "Used to delete multiple messages",
	Permissions: Permissions.FLAGS.MANAGE_MESSAGES,
	Role: "N/A",
	Run: async function (args: string, message: any) {
		// TODO add command functionality
		if (args === undefined) {
			Utils.error(message, "You forgot to add an argument.");
			return;
		}

		try {
			const numbers = parseInt(args, 10);
			if (numbers > 100) {
				let i: number;
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
		} catch (error) {
			Utils.error(message, `Here is some fancy debug information!\n\`${error}\``);
		}
	},
};
