import * as tools from './tools.js';

const jobs = tools.getJobs();
const skills = tools.getSkills();

const createReport = () => {
	let r = '';
	r += 'HR JOB REPORT\n';
	r += `There are ${jobs.length} jobs:\n`;

	for (const job of jobs) {
		r += job.title + '\n';
		r += job.url + '\n';
		const skillIdCodes = job.skillList.split(',');
		for (let skillIdCode of skillIdCodes) {
			skillIdCode = skillIdCode.trim();
			const skill = tools.lookupObjectInSkills(skills, skillIdCode);
			// const skill = skills.find(m => m.idCode === skillIdCode); // higher-order-function solution
			r += `- ${skill.name} - ${skill.description}\n`;
		}
		r += '\n';
	}

	return r;
};

const reportText = createReport();
tools.writeFile('output/report.txt', reportText);
