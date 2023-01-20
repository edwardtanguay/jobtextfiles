import fs from 'fs';

/**
 * returns the skill object that corresponds to the skillIdCode sent
 * 
 * const skills = lookupObjectInSkills(skills, 'react');
 */
export const lookupObjectInSkills = (skills, skillIdCode) => {
	for (const skill of skills) {
		if (skillIdCode === skill.idCode) {
			return skill;
		}
	}
};

/**
 * returns all skills as a JSON array of skill objects
 * 
 * const skills = getSkills();
 */
export const getSkills = () => {
	const skills = fs.readFileSync('data/skills.json', {
		encoding: 'utf8',
		flag: 'r'
	});
	return JSON.parse(skills);
}

/**
 * returns all jobs as a JSON array of job objects
 * 
 * const jobs = getJobs();
 */
export const getJobs = () => {
	const jobs = fs.readFileSync('data/jobs.json', {
		encoding: 'utf8',
		flag: 'r'
	});
	return JSON.parse(jobs);
}

/**
 * creates a file, with optional date stamp
 * 
 * writeFile('output/report.txt', reportText, {withDateStamp: true});
 * 
 * creates file: report-2023-01-20.txt
 */
export const writeFile = (pathAndFileName, content, config = {}) => {

	const dateStamp = new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(Date.now())

	// we assume that the file has only one period before the extention
	const parts = pathAndFileName.split('.');
	const newPathAndFileName = `${parts[0]}-${dateStamp}.${parts[1]}`;

	fs.writeFileSync(newPathAndFileName, content);
}