import * as tools from './tools.js';

const jobs = tools.getJobs();

console.log('HR JOB REPORT\n');
console.log(`There are ${jobs.length} jobs:\n`);

for (let i = 0; i < jobs.length; i++) {
	const job = jobs[i];
	console.log(job.title);
}