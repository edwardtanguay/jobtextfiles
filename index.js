import * as tools from './tools.js';

const jobs = tools.getJobs();

console.log('HR JOB REPORT\n');
console.log(`There are ${jobs.length} jobs:\n`);

for(const job of jobs) {
	console.log(job.title);
	console.log(job.url);
	const skillIdCodes = job.skillList.split(',');
	for (let skillIdCode of skillIdCodes) {
		skillIdCode = skillIdCode.trim();
		console.log(`- ${skillIdCode}`);
	}
	console.log('')
}
