import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'strealex',
		color: 'white',
		description:
			"Strealex is a lifesteal server owned by Aspvct and OutDev which started in 2024. Today the server peaks at around a 100 concurrent players, but mostly around a steady 40-80 players. My task in strealex is helping with development. The server is located in Atlanta.",
		shortDescription:
			'Strealex is a lifesteal server owned by Aspvct and OutDev which started in 2024. Today the server peaks at around a 100 concurrent players, but mostly around a steady 40-80.',
		links: [{ to: 'https://discord.gg/82RMJ5vPBJ', label: 'Discord' }, { to: 'https://strealex.tebex.io/', label: 'Store'}],
		logo: Assets.Strealex,
		name: 'Strealex',
		period: {
			from: new Date(2024, 1, 3)
		},
		skills: getSkills('java', 'papermc', 'minecraft'),
		type: 'Minecraft Server',
		role: "Developer",
		screenshots: [
			{
				label: 'End of the World event. (07/09/2024)',
				src: 'https://cdn.discordapp.com/attachments/1228064753788649563/1260287968766066728/image.png?ex=669211e2&is=6690c062&hm=3c1b71886df2dcc904b92bba735dfccb356d0a7aeec23301043958c8b71a90b0&'
			}]
	},
	{
		slug: 'vanarchy',
		color: 'purple',
		description:
			'Vanarchy was a CPvP focused minecraft shop survival server owned by Gregzee, Zewy and Lucnoxity. The server used to peak at around 80 players, but mostly around a steady 30-60 players.',
		shortDescription:
			'Vanarchy was a CPvP focused minecraft shop survival server owned by Gregzee, Zewy and Lucnoxity. The server used to peak at around 80 players.	',
		links: [],
		logo: Assets.Vanarchy,
		name: 'Vanarchy',
		period: {
			from: new Date(2022, 10, 27)
		},
		skills: getSkills('minecraft', 'spigotmc', 'java'),
		type: 'Minecraft Server',
		role: "Owner"
	},
	{
		slug: '10lives',
		color: 'red',
		description:
			'Placeholder',
		shortDescription:
			'Placeholder',
		links: [{ to: 'https://discord.gg/10livessmp', label: 'Discord' }, { to: 'https://https://10livessmp.tebex.io/', label: 'Store'}],
		logo: Assets.Lives10,
		name: '10Lives',
		period: {
			from: new Date(2022, 10, 27)
		},
		skills: getSkills('minecraft', 'spigotmc', 'java'),
		type: 'Minecraft Server',
		role: "Developer"
	}
];

export const title = 'Past Work';
