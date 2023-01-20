import fs from 'fs';

/**
 * lookupObjectInSkills(skills, skillIdCode)
 *
 * returns the skill object that corresponds to the skillIdCode sent
 */
export const lookupObjectInSkills = (skills, skillIdCode) => {
	for (const skill of skills) {
		if (skillIdCode === skill.idCode) {
			return skill;
		}
	}
};

/**
 * getSkills()
 *
 * returns all skills as a JSON array of skill objects
 */
export const getSkills = () => {
	const skills = fs.readFileSync('data/skills.json', {
		encoding: 'utf8',
		flag: 'r'
	});
	return JSON.parse(skills);
}

/**
 * getJobs()
 *
 * returns all jobs as a JSON array of job objects
 */
export const getJobs = () => {
	const jobs = fs.readFileSync('data/jobs.json', {
		encoding: 'utf8',
		flag: 'r'
	});
	return JSON.parse(jobs);
}