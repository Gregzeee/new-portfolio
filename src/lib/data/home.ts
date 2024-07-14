import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Developer';

export const lastName = 'Gregzee';

export const description =
  'I\'m Gregzee, a 15-year-old from Estonia with a passion for coding. I have experience as a Minecraft server developer and Spigot developer. In my free time, I enjoy playing games and cooking. Coding is not just a skill for me, it\'s a hobby and possibly a future career.'
export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/Gregzeee' },
];

export const skills = getSkills('java', 'spigotmc', 'papermc', 'c#', 'js', 'kotlin', 'python');
