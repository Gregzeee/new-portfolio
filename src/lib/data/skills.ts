import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: "Libraries/API's", slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Markup', slug: 'markup-style' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: "Python is a high-level, interpreted programming language known for its readability, simplicity, and versatility. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability and allows developers to use fewer lines of code to achieve tasks compared to other languages like C++ or Java.",
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'blue',
		description: 'Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation) and released in 1995. It is designed to be platform-independent, allowing developers to write code once and run it anywhere.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c#',
		color: 'purple',
		description:
			'\n' +
			'C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft, first released in 2000 as part of its .NET initiative. It is designed to be simple, powerful, and versatile, enabling developers to create a wide range of applications.',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'HTML (HyperText Markup Language) is the standard language for creating and structuring documents on the World Wide Web. It forms the backbone of web pages by defining the structure and content of a webpage\'s elements.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'orange',
		description:
			'Kotlin is a modern, statically-typed programming language developed by JetBrains and officially supported by Google for Android app development. It combines object-oriented and functional programming features and aims to be concise, expressive, and interoperable with existing Java code.',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript is a versatile and powerful programming language primarily used for creating interactive and dynamic content on web pages. Originally developed by Netscape as a client-side scripting language, JavaScript has evolved significantly and is now widely used for both front-end and back-end web development.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'yaml',
		color: 'black',
		description:
			'YAML (YAML Ain\'t Markup Language) is a human-readable data serialization language commonly used for configuration files and data storage. It is often used in scenarios where data needs to be easily readable by humans and at the same time, efficiently parsed by machines.',
		logo: Assets.Yaml,
		name: 'Yaml',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'spigotmc',
		color: 'gray',
		description:
			'SpigotMC is a popular open-source server software for Minecraft. It is built upon the Minecraft Server and Bukkit API, providing enhanced performance, customization, and plugin support for Minecraft servers.',
		logo: Assets.Spigot,
		name: 'Spigot',
		category: 'library'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'CSS is a fundamental language used to define the presentation, layout, and styling of HTML documents. It enables web developers to control the visual appearance of web pages, ensuring consistency, responsiveness, and aesthetic appeal across different devices and screen sizes.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'papermc',
		color: 'white',
		description: 'PaperMC is a high-performance Minecraft server software based on the Spigot and Bukkit projects. It aims to provide enhanced performance, stability, and customization options for Minecraft server administrators and developers.',
		logo: Assets.Paper,
		name: 'Paper',
		category: 'library'
	}),
	defineSkill({
		slug: 'minecraft',
		color: 'green',
		description: 'Minecraft is a 2011 sandbox game developed and published by Mojang Studios for Windows. Originally created by Markus "Notch" Persson using the Java programming language, it was developed over the span of two years, with many public test builds being released from May 2009 until its full release on 18 November 2011.',
		logo: Assets.Minecraft,
		name: 'Minecraft',
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
