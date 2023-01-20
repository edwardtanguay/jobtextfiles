import * as tools from './tools.js';

const jobs = tools.getJobs();
const skills = tools.getSkills();

console.log('HR JOB REPORT\n');
console.log(`There are ${jobs.length} jobs:\n`);

for(const job of jobs) {
	console.log(job.title);
	console.log(job.url);
	const skillIdCodes = job.skillList.split(',');
	for (let skillIdCode of skillIdCodes) {
		skillIdCode = skillIdCode.trim();
		const skill = tools.lookupObjectInSkills(skills, skillIdCode);
		// const skill = skills.find(m => m.idCode === skillIdCode); // higher-order-function solution
		console.log(`- ${skill.name} - ${skill.description}`);
	}
	console.log('')
}
