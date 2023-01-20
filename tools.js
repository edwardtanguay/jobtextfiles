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


export const getSkills2 = () => {
	// return skills;
	return [
		{
			idCode: 'angular',
			name: 'Angular',
			url: 'https://onespace.pages.dev/techItems?id=36',
			description:
				'together with React and Vue.js one of the three most popular JavaScript frameworks'
		},
		{
			idCode: 'cicd',
			name: 'CI/CD',
			url: 'https://about.gitlab.com/topics/ci-cd',
			description:
				'the combined practices of continuous integration (CI) and continuous deployment (CD)'
		},
		{
			idCode: 'react',
			name: 'React',
			url: 'https://onespace.pages.dev/techItems?id=2',
			description:
				'currently the most popular front-end JavaScript framework along with Vue and Angular'
		},
		{
			idCode: 'swagger',
			name: 'Swagger',
			url: 'https://en.wikipedia.org/wiki/Swagger_(software)',
			description: 'a suite of tools for API developers created in 2011'
		},
		{
			idCode: 'rest',
			name: 'REST',
			url: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
			description:
				'a way to make services on a web available to software and other websites'
		},
		{
			idCode: 'gitlab',
			name: 'GitLab',
			url: 'https://onespace.pages.dev/techItems?id=140',
			description:
				'a popular tool to organize the lifecyle of software development - a local GitHub'
		},
		{
			idCode: 'ux',
			name: 'UX',
			url: 'https://en.wikipedia.org/wiki/User_experience',
			description:
				"how a user interacts with and experiences a software application including the person's perceptions of utility, ease of use, and efficiency"
		},
		{
			idCode: 'testing',
			name: 'Testing',
			url: 'https://wanago.io/2018/08/27/testing-javascript-tutorial-types-of-tests-of-unit-testing-with-jest',
			description:
				'1. unit tests, 2. integration tests, 3. end-to-end tests'
		},
		{
			idCode: 'bootstrap',
			name: 'Bootstrap',
			url: 'https://onespace.pages.dev/techItems?id=25',
			description:
				'a ubiquitous CSS framework that simplifies website design'
		},
		{
			idCode: 'styledcomponents',
			name: 'styled-components',
			url: 'https://styled-components.com',
			description:
				'the best bits of ES6 and CSS to style your React app components without stress'
		},
		{
			idCode: 'storybook',
			name: 'Storybook',
			url: 'https://storybook.js.org/docs/react/get-started/introduction',
			description:
				'a tool for UI development that makes development faster and easier by isolating components'
		},
		{
			idCode: 'fusebox',
			name: 'FuseBox',
			url: 'https://auth0.com/blog/introducing-fusebox-an-alternative-to-webpack',
			description:
				'module bundler that is simple to configure but has enough features to be a valid alternative to WebPack'
		},
		{
			idCode: 'jasmine',
			name: 'Jasmine',
			url: 'https://onespace.pages.dev/techItems?id=174',
			description: 'an open-source testing framework for JavaScript'
		},
		{
			idCode: 'hotjar',
			name: 'Hotjar',
			url: 'https://www.hotjar.com/web-app-design',
			description: 'a software tool to track users'
		},
		{
			idCode: 'piwik',
			name: 'Piwik',
			url: 'https://piwik.pro',
			description:
				"a tool to track a customer's behavior across websites and apps"
		},
		{
			idCode: 'typescript',
			name: 'TypeScript',
			url: 'https://onespace.pages.dev/techItems?id=35',
			description:
				'in larger applications, the preferred way to program in JavaScript'
		},
		{
			idCode: 'jest',
			name: 'Jest',
			url: 'https://onespace.pages.dev/techItems?id=19',
			description:
				'a JavaScript testing framework like Mocha, but simpler'
		},
		{
			idCode: 'git',
			name: 'Git',
			url: 'https://onespace.pages.dev/techItems?id=12',
			description: 'the most-used revision control system today'
		},
		{
			idCode: 'nextjs',
			name: 'Next.js',
			url: 'https://onespace.pages.dev/techItems?id=219',
			description: 'a React framework that enables server-side rendering'
		},
		{
			idCode: 'nestjs',
			name: 'NestJS',
			url: 'https://onespace.pages.dev/techItems?id=217',
			description:
				'a Node.js framework for building efficient, reliable and scalable server-side applications'
		},
		{
			idCode: 'responsive',
			name: 'Responsive web design',
			url: 'https://en.wikipedia.org/wiki/Responsive_web_design',
			description:
				'an approach to web design that aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction'
		},
		{
			idCode: 'pwa',
			name: 'PWA',
			url: 'https://onespace.pages.dev/techItems?id=306',
			description:
				'Progressive Web App - application software delivered through the web'
		},
		{
			idCode: 'html',
			name: 'HTML',
			url: 'https://onespace.pages.dev/techItems?id=32',
			description:
				'the markup language that serves as the basis of websites'
		},
		{
			idCode: 'css',
			name: 'CSS',
			url: 'https://onespace.pages.dev/techItems?id=33',
			description:
				'the language used to style websites and a standard tool for web development'
		},
		{
			idCode: 'javascript',
			name: 'JavaScript',
			url: 'https://onespace.pages.dev/techItems?id=34',
			description: 'the main scripting language of the Web'
		},
		{
			idCode: 'mocha',
			name: 'Mocha',
			url: 'https://onespace.pages.dev/techItems?id=18',
			description: 'one of the most popular JavaScript testing frameworks'
		},
		{
			idCode: 'vue',
			name: 'Vue.js',
			url: 'https://onespace.pages.dev/techItems?id=37',
			description:
				'can easily be used to enhance existing applications as well as to create new applications'
		},
		{
			idCode: 'mvc',
			name: 'MVC',
			url: 'https://onespace.pages.dev/techItems?id=39',
			description:
				'an architectural pattern commonly used particularly in web development'
		},
		{
			idCode: 'c',
			name: 'C',
			url: 'https://onespace.pages.dev/techItems?id=92',
			description:
				'low-level language used to program everything from hardware devices to operating systems'
		},
		{
			idCode: 'cplusplus',
			name: 'C++',
			url: 'https://onespace.pages.dev/techItems?id=57',
			description: 'low-level language for writing applications'
		},
		{
			idCode: 'java',
			name: 'Java',
			url: 'https://onespace.pages.dev/techItems?id=44',
			description: 'a popular and ubiquitious OOP programming language'
		},
		{
			idCode: 'csharp',
			name: 'C#',
			url: 'https://onespace.pages.dev/techItems?id=91',
			description: 'the standard OOP language on the .NET platform'
		},
		{
			idCode: 'mvvm',
			name: 'MVVM',
			url: 'https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel',
			description:
				'a pattern like MVC but with a View Model, gave rise to JavaScript frameworks'
		},
		{
			idCode: 'azure',
			name: 'Azure',
			url: 'https://onespace.pages.dev/techItems?id=314',
			description:
				'a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services'
		},
		{
			idCode: 'aws',
			name: 'AWS',
			url: 'https://onespace.pages.dev/techItems?id=253',
			description:
				'a subsidiary of Amazon that provides on-demand cloud computing platforms'
		},
		{
			idCode: 'gcp',
			name: 'GCP',
			url: 'https://en.wikipedia.org/wiki/Google_Cloud_Platform',
			description:
				'a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail and YouTube'
		},
		{
			idCode: 'sql',
			name: 'SQL',
			url: 'https://onespace.pages.dev/techItems?id=31',
			description:
				'the standard language you use to get data from relational databases'
		},
		{
			idCode: 'nosql',
			name: 'NoSQL',
			url: 'https://onespace.pages.dev/techItems?id=77',
			description: 'a type of non-table database used with big data'
		},
		{
			idCode: 'sap',
			name: 'SAP',
			url: 'https://en.wikipedia.org/wiki/SAP',
			description:
				"a German software company and world's leading enterprise resource planning (ERP) software vendor"
		},
		{
			idCode: 'xml',
			name: 'XML',
			url: 'https://onespace.pages.dev/techItems?id=141',
			description:
				'markup language for defining and transmitting data and documents'
		},
		{
			idCode: 'json',
			name: 'JSON',
			url: 'https://onespace.pages.dev/techItems?id=142',
			description:
				'a popular standard for storing and transmitting information and data objects, particularly in JavaScript'
		},
		{
			idCode: 'agile',
			name: 'Agile',
			url: 'https://en.wikipedia.org/wiki/Agile_software_development',
			description:
				'a philosophy of software developer which includes adaptive planning, evolutionary development, early delivery, continual improvement, and flexible responses to changes in requirements, capacity, and understanding of the problems to be solved'
		},
		{
			idCode: 'scrum',
			name: 'scrum',
			url: 'https://en.wikipedia.org/wiki/Scrum_(software_development)',
			description:
				'a framework for project management designed for teams of ten or fewer members who break their work into goals that can be completed within time-boxed iterations, called sprints, no longer than one month and most commonly two weeks'
		},
		{
			idCode: 'gitflow',
			name: 'Gitflow',
			url: 'https://georgestocker.com/2020/03/04/please-stop-recommending-git-flow',
			description:
				'a branching and merging methodology popularized by the blog post "A Successful Git branching model", older, seems overly complicated and controversial'
		},
		{
			idCode: 'domaindrivendesign',
			name: 'Domain-Driven Design',
			url: 'https://en.wikipedia.org/wiki/Domain-driven_design',
			description:
				"a software design approach focused on modeling software to match a domain according to input from that domain's experts"
		},
		{
			idCode: 'microservices',
			name: 'microservices',
			url: 'https://en.wikipedia.org/wiki/Microservices',
			description:
				'an architectural pattern that arranges an application as a collection of loosely-coupled, fine-grained services, communicating through lightweight protocols, one goal being that teams can develop and deploy their services independently of others'
		},
		{
			idCode: 'dotnet',
			name: '.NET',
			url: 'https://onespace.pages.dev/techItems?id=41',
			description: 'the main Windows development framework since 2001'
		},
		{
			idCode: 'entityframework',
			name: 'Entity Framework',
			url: 'https://onespace.pages.dev/techItems?id=40',
			description: 'object-relational mapping (ORM) framework for .NET'
		},
		{
			idCode: 'hangfire',
			name: 'Hangfire',
			url: 'https://www.hangfire.io',
			description:
				'easy way to perform background processing in .NET and .NET Core applications'
		},
		{
			idCode: 'rabbitmq',
			name: 'RabbitMQ',
			url: 'https://onespace.pages.dev/techItems?id=351',
			description:
				'message-broker software that originally implemented AMQP'
		},
		{
			idCode: 'mui',
			name: 'MUI',
			url: 'https://mui.com',
			description:
				'Material UI - React components for faster and easier web development'
		},
		{
			idCode: 'graphql',
			name: 'GraphQL',
			url: 'https://onespace.pages.dev/techItems?id=54',
			description: 'a newer and more robust alternative to REST'
		},
		{
			idCode: 'apollo',
			name: 'Apollo',
			url: 'https://onespace.pages.dev/techItems?id=64',
			description: 'the most popular GraphQL client'
		},
		{
			idCode: 'aspnet',
			name: 'ASP.NET',
			url: 'https://en.wikipedia.org/wiki/ASP.NET',
			description:
				'the Microsoft .NET standard approach for developing websites'
		},
		{
			idCode: 'docker',
			name: 'Docker',
			url: 'https://onespace.pages.dev/techItems?id=138',
			description:
				'a software virtualization solution that allows each application to run in a separate container'
		},
		{
			idCode: 'kubernetes',
			name: 'Kubernetes',
			url: 'https://onespace.pages.dev/techItems?id=9',
			description:
				'platform used for large-scale application automation including Docker'
		},
		{
			idCode: 'openshift',
			name: 'OpenShift',
			url: 'https://en.wikipedia.org/wiki/OpenShift',
			description:
				'a family of containerization software products developed by Red Hat, similar to Kubernetes'
		},
		{
			idCode: 'nunit',
			name: 'NUnit',
			url: 'https://en.wikipedia.org/wiki/NUnit',
			description:
				'an open-source unit testing framework for the .NET Framework and Mono'
		},
		{
			idCode: 'rider',
			name: 'Rider',
			url: 'https://www.jetbrains.com/rider',
			description: 'a cross-platform IDE for .NET by JetBrains'
		},
		{
			idCode: 'devopserver',
			name: 'DevOps Server',
			url: 'https://azure.microsoft.com/en-us/products/devops/server',
			description:
				'an Azure tool to share code, track work, and ship software using integrated software delivery tools, hosted on-premises'
		},
		{
			idCode: 'mongodb',
			name: 'MongoDB',
			url: 'https://onespace.pages.dev/techItems?id=79',
			description: 'the most popular NoSQL document store database'
		},
		{
			idCode: 'cloud',
			name: 'cloud computing',
			url: 'https://en.wikipedia.org/wiki/Cloud_computing',
			description:
				'on-demand and scalable availability of computer system resources, usually AWS, Azure or Google Cloud Platform'
		},
		{
			idCode: 'kotlin',
			name: 'Kotlin',
			url: 'https://onespace.pages.dev/techItems?id=7',
			description: "Google's new Java language"
		},
		{
			idCode: 'swift',
			name: 'Swift',
			url: 'https://en.wikipedia.org/wiki/Swift_(programming_language)',
			description:
				"Apple's general-purpose, multi-paradigm, compiled programming language, developed as a replacement for Apple's earlier programming language Objective-C"
		},
		{
			idCode: 'jetpackcompose',
			name: 'Jetpack Compose',
			url: 'https://developer.android.com/jetpack/compose',
			description:
				"Android's recommended modern toolkit for building native UI"
		},
		{
			idCode: 'firebase',
			name: 'Firebase',
			url: 'https://onespace.pages.dev/techItems?id=268',
			description:
				'a platform developed by Google for creating mobile and web applications'
		},
		{
			idCode: 'flutter',
			name: 'Flutter',
			url: 'https://onespace.pages.dev/techItems?id=267',
			description: "Google's software development kit for mobile apps"
		},
		{
			idCode: 'dart',
			name: 'Dart',
			url: 'https://onespace.pages.dev/techItems?id=95',
			description:
				'a Google replacement for JavaScript which transpiles to JavaScript'
		},
		{
			idCode: 'node',
			name: 'Node',
			url: 'https://onespace.pages.dev/techItems?id=28',
			description:
				'central JavaScript technology for web backend and application development'
		},
		{
			idCode: 'express',
			name: 'Express',
			url: 'https://onespace.pages.dev/techItems?id=159',
			description:
				'a web application framework for Node.js and the de facto Node standard for building web applications and APIs'
		},
		{
			idCode: 'magento',
			name: 'Magento',
			url: 'https://onespace.pages.dev/techItems?id=181',
			description:
				'an e-commerce PHP framework created in 2008, now owned by Adobe'
		},
		{
			idCode: 'jquery',
			name: 'JQuery',
			url: 'https://onespace.pages.dev/techItems?id=48',
			description: 'a useful and popular but older JavaScript library'
		},
		{
			idCode: 'php',
			name: 'PHP',
			url: 'https://onespace.pages.dev/techItems?id=52',
			description:
				'a popular and pragmatic programming language for websites'
		},
		{
			idCode: 'mysql',
			name: 'MySQL',
			url: 'https://onespace.pages.dev/techItems?id=73',
			description:
				'a popular and widespread database for websites and applications'
		},
		{
			idCode: 'apache',
			name: 'Apache',
			url: 'https://onespace.pages.dev/techItems?id=192',
			description: 'a old, classic and popular web server from the 90s'
		},
		{
			idCode: 'nginx',
			name: 'nginx',
			url: 'https://onespace.pages.dev/techItems?id=193',
			description:
				'a fast web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache'
		},
		{
			idCode: 'webpack',
			name: 'Webpack',
			url: 'https://onespace.pages.dev/techItems?id=55',
			description: 'the most popular JavaScript module bundler'
		},
		{
			idCode: 'webstorm',
			name: 'WebStorm',
			url: 'https://www.jetbrains.com/webstorm',
			description:
				'an integrated development environment for JavaScript and related technologies'
		},
		{
			idCode: 'rollup',
			name: 'Rollup',
			url: 'https://onespace.pages.dev/techItems?id=143',
			description: 'the second most popular module bundler for JavaScript'
		},
		{
			idCode: 'mint',
			name: 'MINT',
			url: 'https://de.wikipedia.org/wiki/MINT-F%C3%A4cher',
			description:
				'Bezeichnung von und Studienfächern aus den Bereichen Mathematik, Informatik, Naturwissenschaft und Technik, auf Englisch STEM (Science, Technology, Engineering, Mathematics)'
		},
		{
			idCode: 'machinelearning',
			name: 'machine learning',
			url: 'https://en.wikipedia.org/wiki/Machine_learning',
			description:
				'a part of artificial intelligence, ML algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so'
		},
		{
			idCode: 'python',
			name: 'Python',
			url: 'https://onespace.pages.dev/techItems?id=5',
			description:
				'an older but pragmatic language and increasingly popular today used widely by scientists and mathematicians'
		},
		{
			idCode: 'pythonsciencestack',
			name: 'Python Science Stack',
			url: 'https://developer.fedoraproject.org/tech/languages/python/scipy.html',
			description:
				'a set of libraries for scientific computation and visualization including Python, NumPy, SciPy, matplotlib, IPython, pandas, SymPy and Jupyter Notebook'
		},
		{
			idCode: 'scikitlearn',
			name: 'scikit-learn',
			url: 'https://scikit-learn.org/stable',
			description:
				'a set of simple and efficient tools for predictive data analysis built on NumPy, SciPy and matplotlib'
		},
		{
			idCode: 'oop',
			name: 'OOP',
			url: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
			description:
				'(Object-Oriented Programming) a programming paradigm based on the concept of objects, which can contain data and code, the data is in the form of properties and the code is in the form of methods, contrast with functional programming'
		},
		{
			idCode: 'tensorflow',
			name: 'Tensorflow',
			url: 'https://onespace.pages.dev/techItems?id=235',
			description:
				"Google Brain's second-generation system focus on training and inference of deep neural networks"
		},
		{
			idCode: 'pytorch',
			name: 'PyTorch',
			url: 'https://en.wikipedia.org/wiki/PyTorch',
			description:
				'a machine learning framework based on the Torch library, used for applications such as computer vision and natural language processing'
		},
		{
			idCode: 'codereview',
			name: 'code review',
			url: 'https://smartbear.com/learn/code-review/what-is-code-review',
			description:
				'the act of consciously and systematically convening with one’s fellow programmers to check each other’s code for mistakes and has been repeatedly shown to accelerate and streamline the process of software development'
		},
		{
			idCode: 'pairprogramming',
			name: 'pair programming',
			url: 'https://en.wikipedia.org/wiki/Pair_programming',
			description:
				'technique in which two programmers work together at one workstation'
		},
		{
			idCode: 'springboot',
			name: 'Spring Boot',
			url: 'https://spring.io/projects/spring-boot',
			description:
				'a tool that makes it easy to create stand-alone, production-grade Spring-based Applications for the Java platform'
		},
		{
			idCode: 'serverless',
			name: 'Serverless Computing',
			url: 'https://en.wikipedia.org/wiki/Serverless_computing',
			description:
				'a misnomer in the sense that servers are still used by cloud service providers to execute code for developers, however, developers of serverless applications are not concerned with capacity planning, configuration, management, maintenance, fault tolerance, or scaling of containers, VMs, or physical servers'
		},
		{
			idCode: 'cqrs',
			name: 'CQRS',
			url: 'https://martinfowler.com/bliki/CQRS.html',
			description:
				'(Command Query Responsibility Singleton) the notion that you can use a different model to update information than the model you use to read information'
		},
		{
			idCode: 'microfrontends',
			name: 'microfrontends',
			url: 'https://semaphoreci.com/blog/microfrontends',
			description:
				'what you get when you bring the microservice approach to the frontend, a frontend made of components owned by different teams that can be deployed independently'
		},
		{
			idCode: 'tailwind',
			name: 'Tailwind',
			url: 'https://onespace.pages.dev/techItems?id=165',
			description:
				'a highly customizable, low-level, low-opinionated CSS framework'
		},
		{
			idCode: 'githubactions',
			name: 'GitHub Actions',
			url: 'https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions',
			description:
				'a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline'
		},
		{
			idCode: 'fluentui',
			name: 'Fluent UI',
			url: 'https://developer.microsoft.com/en-us/fluentui#/',
			description:
				'a Microsoft collection of UX frameworks for creating cross-platform apps'
		},
		{
			idCode: 'typeorm',
			name: 'TypeORM',
			url: 'https://typeorm.io',
			description:
				'an ORM that can be run with TypeScript, connect multiple databases, and can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms '
		},
		{
			idCode: 'postgres',
			name: 'PostgreSQL',
			url: 'https://onespace.pages.dev/techItems?id=74',
			description: 'a robust but less popular SQL database than MySQL'
		},
		{
			idCode: 'redis',
			name: 'Redis',
			url: 'https://onespace.pages.dev/techItems?id=81',
			description: 'the most popular key-value database'
		},
		{
			idCode: 'zenhub',
			name: 'ZenHub',
			url: 'https://en.everybodywiki.com/ZenHub',
			description:
				'an agile project management tool designed to help software teams organize, plan, track, and manage their work, available either inside GitHub via a browser extension or as a standalone web app'
		},
		{
			idCode: 'ionicappflow',
			name: 'Ionic Appflow',
			url: 'https://ionic.io/docs/appflow',
			description:
				'a CI/CD platform for Ionic development teams that helps development teams continuously build and ship their Cordova, Capacitor, and React Native apps'
		},
		{
			idCode: 'awslambda',
			name: 'AWS Lambda',
			url: 'https://onespace.pages.dev/techItems?id=270',
			description: "Amazon's event-driven, serverless cloud platform"
		},
		{
			idCode: 'salesforce',
			name: 'Salesforce',
			url: 'https://en.wikipedia.org/wiki/Salesforce',
			description:
				'a cloud-based software company which provides customer relationship management (CRM) software and applications focused on sales, customer service, marketing automation, analytics, and application development'
		},
		{
			idCode: 'microsoftdynamics',
			name: 'Microsoft Dynamics',
			url: 'https://en.wikipedia.org/wiki/Microsoft_Dynamics_365',
			description:
				'a collection of 12 applications used for enterprise resource planning (ERP) and customer relationship management (CRM) for intelligent business applications, announced by Microsoft in July 2016'
		},
		{
			idCode: 'github',
			name: 'GitHub',
			url: 'https://onespace.pages.dev/techItems?id=145',
			description:
				'the standard platform to store, publish, and share code projects on the web'
		},
		{
			idCode: 'devops',
			name: 'DevOps',
			url: 'https://en.wikipedia.org/wiki/DevOps',
			description:
				'set of practices that combines software development and IT operations which aims to shorten the systems development life cycle and provide continuous delivery with high software quality'
		},
		{
			idCode: 'cleancode',
			name: 'clean code',
			url: 'https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29',
			description:
				'a set of coding principles which include: follow conventions, keep it simple, leave code cleaner than when you found it, always find the root cause'
		},
		{
			idCode: 'cypress',
			name: 'Cypress',
			url: 'https://docs.cypress.io/guides/overview/why-cypress',
			description:
				'a testing tool that automates and scales end-to-end testing'
		},
		{
			idCode: 'openapi',
			name: 'Open API',
			url: 'https://en.wikipedia.org/wiki/Open_API',
			description:
				'an API that is open for use by developers with relatively few restrictions, typically without copyright restrictions'
		},
		{
			idCode: 'redux',
			name: 'Redux',
			url: 'https://onespace.pages.dev/techItems?id=29',
			description:
				'JavaScript library for maintaining state, used with React and Angular'
		},
		{
			idCode: 'sass',
			name: 'Sass',
			url: 'https://onespace.pages.dev/techItems?id=163',
			description:
				'a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets'
		},
		{
			idCode: 'jira',
			name: 'Jira',
			url: 'https://onespace.pages.dev/techItems?id=136',
			description: 'popular bug and issue-tracking software'
		},
		{
			idCode: 'confluence',
			name: 'Confluence',
			url: 'https://en.wikipedia.org/wiki/Confluence_(software)',
			description: 'a web-based corporate wiki'
		},
		{
			idCode: 'jenkins',
			name: 'Jenkins',
			url: 'https://onespace.pages.dev/techItems?id=139',
			description:
				'an older but popular build automation tool still used in many companies'
		},
		{
			idCode: 'ssr',
			name: 'SSR',
			url: 'https://www.debugbear.com/blog/server-side-rendering',
			description:
				"in contrast to client-side rendering, server-side rendering generates static content on the server before sending it over to the user's browser, which better addresses performance and search engine optimization issues of single-page JavaScript applications"
		},
		{
			idCode: 'remix',
			name: 'Remix',
			url: 'https://remix.run/docs/en/v1',
			description:
				'a React framework used for server-side rendering (SSR) and unlike Next.js, it enables nested routing with nested layouts'
		},
		{
			idCode: 'chakraui',
			name: 'Chakra UI',
			url: 'https://chakra-ui.com/getting-started',
			description:
				'a simple, modular and accessible component library that gives you the building blocks you need to build your React applications'
		},
		{
			idCode: 'reactnative',
			name: 'React Native',
			url: 'https://onespace.pages.dev/techItems?id=1',
			description:
				'a popular JavaScript framework for building mobile apps'
		},
		{
			idCode: 'livekit',
			name: 'LiveKit',
			url: 'https://docs.livekit.io',
			description:
				'an open source WebRTC project that gives you everything needed to build scalable and real-time audio, video, and data experiences in applications'
		},
		{
			idCode: 'socketio',
			name: 'Socket.IO',
			url: 'https://onespace.pages.dev/techItems?id=386',
			description:
				'JavaScript library that enables realtime, bi-directional communication between web clients and servers'
		},
		{
			idCode: 'terraform',
			name: 'Terraform',
			url: 'https://onespace.pages.dev/techItems?id=304',
			description:
				'infrastructure as code software tool created by HashiCorp'
		},
		{
			idCode: 'nx',
			name: 'Nx',
			url: 'https://nx.dev',
			description:
				'a build-system tool to develop multiple full-stack applications that share code between them all in the same workspace'
		},
		{
			idCode: 'babel',
			name: 'Babel',
			url: 'https://onespace.pages.dev/techItems?id=45',
			description:
				'a JavaScript transpiler which enables you to use higher versions of ECMAScript'
		},
		{
			idCode: 'circleci',
			name: 'CircleCI',
			url: 'https://circleci.com/docs/about-circleci',
			description:
				"a continuous integration platform that helps ship software faster, using code that's reusable and easy to maintain"
		},
		{
			idCode: 'reacttestinglibrary',
			name: 'React Testing Library',
			url: 'https://testing-library.com/docs/react-testing-library/intro',
			description: 'a light-weight solution for testing React components'
		},
		{
			idCode: 'testcafe',
			name: 'TestCafe',
			url: 'https://testcafe.io/documentation/402635/getting-started',
			description:
				'an end-to-end testing framework for web applications that runs on Node'
		},
		{
			idCode: 'supertest',
			name: 'SuperTest',
			url: 'https://www.npmjs.com/package/supertest',
			description:
				'provides a high-level abstraction for testing HTTP and APIs'
		},
		{
			idCode: 'piral',
			name: 'Piral',
			url: 'https://piral.io',
			description:
				'a framework to build portal applications that follow the microfrontends architecture'
		},
		{
			idCode: 'hetzner',
			name: 'Hetzner Cloud',
			url: 'https://www.hetzner.com/cloud',
			description:
				'a Germany cloud provider which operates data center parks in Germany, Finland and the USA'
		},
		{
			idCode: 'influxdb',
			name: 'InfluxDB',
			url: 'https://www.influxdata.com/influxdb-pricing',
			description:
				'a time-series database (for time-stampted event data) written in Go and used for storage of e.g. Internet of Things senso data and real-time analytics'
		},
		{
			idCode: 'ai',
			name: 'AI',
			url: 'https://rollbar.com/blog/6-ways-artificial-intelligence-improves-software-development',
			description:
				'software that enables itself to learn within a specific context in order to process data to solve tasks that otherwise require human intelligence'
		},
		{
			idCode: 'reacthooks',
			name: 'React Hooks',
			url: 'https://edwardtanguay.vercel.app/howtos?id=633',
			description:
				'Hooks are a new addition in React 16.8, they let you use state and other React features without writing a class.'
		},
		{
			idCode: 'polymer',
			name: 'Polymer',
			url: 'https://onespace.pages.dev/techItems?id=88',
			description:
				'a JavaScript framework created and used by Google which embraces the Material Design ideology'
		},
		{
			idCode: 'stencil',
			name: 'Stencil',
			url: 'https://stenciljs.com/docs/introduction',
			description:
				'a compiler that generates web components which use TypeScript, JSX, and CSS'
		},
		{
			idCode: 'vite',
			name: 'Vite',
			url: 'https://vitejs.dev',
			description:
				'a tool to set up development starter applications for frameworks like Vue, React, Svelte and JS/DOM'
		},
		{
			idCode: 'abtests',
			name: 'A/B tests',
			url: 'https://en.wikipedia.org/wiki/A/B_testing',
			description:
				"the process of comparing two variations of a page element, usually by testing users' response to variant A vs. variant B and concluding which of the two variants is more effective"
		},
		{
			idCode: 'gradle',
			name: 'Gradle',
			url: 'https://gradle.org',
			description:
				'a build automation tool for multi-language software development that controls the development process from compilation and packaging to testing, deployment, and publishing, supported languages include Java, Kotlin, Groovy, Scala, C/C++, and JavaScript'
		},
		{
			idCode: 'd3',
			name: 'D3.js',
			url: 'https://d3js.org',
			description:
				'a JavaScript library for manipulating documents based on data'
		},
		{
			idCode: 'projektronbcs',
			name: 'Projektron BCS',
			url: 'https://en.wikipedia.org/wiki/Projektron_BCS',
			description:
				'web-based project management software for planning, managing and controlling projects simultaneously, founded 2001 in Berlin'
		},
		{
			idCode: 'svelte',
			name: 'Svelte',
			url: 'https://onespace.pages.dev/techItems?id=210',
			description:
				'JavaScript framework that generates code to manipulate the DOM'
		},
		{
			idCode: 'tomcat',
			name: 'Tomcat',
			url: 'https://en.wikipedia.org/wiki/Apache_Tomcat',
			description: 'a free and open-source Java web application server'
		},
		{
			idCode: 'jboss',
			name: 'JBoss',
			url: 'https://en.wikipedia.org/wiki/WildFly',
			description:
				'a free and open-source Java application server developed by Red Hat that implements the Java Enterprise Edition specification, today known as WildFly'
		},
		{
			idCode: 'mqtt',
			name: 'MQTT',
			url: 'https://en.wikipedia.org/wiki/MQTT',
			description:
				'a lightweight, publish-subscribe, machine to machine network protocol for Message queue/Message queuing service'
		},
		{
			idCode: 'amqp',
			name: 'AMQP',
			url: 'https://en.wikipedia.org/wiki/Advanced_Message_Queuing_Protocol',
			description:
				'an open standard application layer protocol for message-oriented middleware responsible for orientation, queuing, and has both point-to-point  and publish-and-subscribe routing'
		},
		{
			idCode: 'maven',
			name: 'Maven',
			url: 'https://en.wikipedia.org/wiki/Apache_Maven',
			description:
				'a build automation tool used primarily for Java projects which can also be used to build and manage projects written in C#, Ruby, and Scala'
		},
		{
			idCode: 'mariadb',
			name: 'MariaDB',
			url: 'https://onespace.pages.dev/techItems?id=171',
			description:
				'a community-developed, commercially supported fork of MySQL'
		},
		{
			idCode: 'gitlabci',
			name: 'Gitlab CI',
			url: 'https://www.harness.io/blog/what-is-gitlab-ci',
			description:
				'an feature of GitLab which provides build automation, test automation, pipeline config management, artifact storage, and pipeline security'
		},
		{
			idCode: 'fastapi',
			name: 'FastAPI',
			url: 'https://fastapi.tiangolo.com',
			description:
				'a modern, fast, web framework for building APIs with Python'
		},
		{
			idCode: 'go',
			name: 'Go',
			url: 'https://onespace.pages.dev/techItems?id=94',
			description:
				'a language created by Google that resembles C but with object-oriented features'
		},
		{
			idCode: 'eks',
			name: 'EKS',
			url: 'https://onespace.pages.dev/techItems?id=324',
			description: "AWS's container platform (Elastic Kubernetes Service)"
		},
		{
			idCode: 'pythonqt',
			name: 'Python/Qt',
			url: 'https://doc.qt.io/qtforpython',
			description:
				'a Python library that enables developers to use Python to write Qt applications'
		},
		{
			idCode: 'hibernate',
			name: 'Hibernate',
			url: 'https://en.wikipedia.org/wiki/Hibernate_(framework)',
			description:
				'the leading ORM for Java which provides mapping from the OOP model in Java to the table model in databases like MySQL and Postgres'
		},
		{
			idCode: 'linuxadmin',
			name: 'Linux Admin',
			url: 'https://en.wikiversity.org/wiki/Linux_Administration',
			description:
				'skills including installing and managing a usually online Linux machine, basic commands, devices and filesystems, shells and scripting, user interfaces, administrative tasks, system services, networking fundamentals, and security'
		},
		{
			idCode: 'sqlite',
			name: 'SQLite',
			url: 'https://en.wikipedia.org/wiki/SQLite',
			description:
				'a small database engine written in the C programming language, not an app but merely a library which developers embed in theri apps, hence it belongs to the family of embedded databases'
		},
		{
			idCode: 'zend',
			name: 'Zend',
			url: 'https://onespace.pages.dev/techItems?id=184',
			description:
				'popular, corporate-ownded PHP framework created in 2006'
		},
		{
			idCode: 'latex',
			name: 'LaTeX',
			url: 'https://en.wikipedia.org/wiki/LaTeX',
			description:
				'a software system for document preparation in which the writer uses plain text as opposed to formatted text found in WYSIWYG word processors, widely used in academia'
		},
		{
			idCode: 'bigdata',
			name: 'big data',
			url: 'https://en.wikipedia.org/wiki/Big_data',
			description:
				'the processing of data sets too large and complex to be dealt with by traditional databases'
		},
		{
			idCode: 'datalake',
			name: 'data lake',
			url: 'https://en.wikipedia.org/wiki/Data_lake',
			description:
				'a repository of data stored in its raw format such as object blobs (binary large objects, e.g. images or audio) or other various files, usually consisting of both (1) raw copies of system data, sensor data or social data, plus (2) transformed data used for tasks such as reporting, visualization, advanced analytics and machine learning'
		},
		{
			idCode: 'datapipelines',
			name: 'data pipelines',
			url: 'https://hazelcast.com/glossary/data-pipeline',
			description:
				'a series of data processing steps in which each step delivers an output that is the input for the next step'
		},
		{
			idCode: 'kafka',
			name: 'Kafka',
			url: 'https://onespace.pages.dev/techItems?id=277',
			description:
				'open-source stream-processing software platform developed by the Apache Software Foundation'
		},
		{
			idCode: 'bitbucket',
			name: 'Bitbucket',
			url: 'https://onespace.pages.dev/techItems?id=144',
			description:
				'the second most popular version control hosting service, originally hosted Mercurial since 2008 but hosts Git since 2011, owned by Atlassian who owns Jira'
		},
		{
			idCode: 'fabric8',
			name: 'fabric8',
			url: 'https://fabric8.io',
			description:
				'a now discontinued open source DevOps and Integration Platform which works with Kubernetes or OpenShift environment and provides Continuous Delivery'
		},
		{
			idCode: 'dynamodb',
			name: 'DynamoDB',
			url: 'https://onespace.pages.dev/techItems?id=262',
			description: "Amazon's NoSQL cloud database service"
		},
		{
			idCode: 'tdd',
			name: 'Test-driven development (TDD)',
			url: 'https://en.wikipedia.org/wiki/Test-driven_development',
			description:
				'a software development process relying on software requirements being converted to test cases before software is fully developed'
		},
		{
			idCode: 'functionalprogramming',
			name: 'functional programming',
			url: 'https://en.wikipedia.org/wiki/Functional_programming',
			description:
				'a programming paradigm where programs are constructed by applying and composing functions, where functions can be passed as arguments and returned from other functions just as any other data type can'
		},
		{
			idCode: 'openui5',
			name: 'OpenUI5',
			url: 'https://en.wikipedia.org/wiki/OpenUI5',
			description:
				'a JavaScript application framework maintained by SAP designed to build cross-platform, responsive, enterprise-ready applications'
		},
		{
			idCode: 'couchdb',
			name: 'CouchDB',
			url: 'https://onespace.pages.dev/techItems?id=78',
			description: 'a NoSQL document database, less popular than MongoDB'
		},
		{
			idCode: 'googlecloud',
			name: 'Google Cloud Platform',
			url: 'https://en.wikipedia.org/wiki/Google_Cloud_Platform',
			description:
				'suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products'
		},
		{
			idCode: 'bdd',
			name: 'Behavior-Driven Development (BDD)',
			url: 'https://en.wikipedia.org/wiki/Behavior-driven_development',
			description:
				'an agile software development process that encourages collaboration among developers, quality assurance experts, and customer representatives in a software project, using conversation and concrete examples to formalize a shared understanding of how the application should behave'
		},
		{
			idCode: 'ddd',
			name: 'Domain-Driven Design (DDD)',
			url: 'https://en.wikipedia.org/wiki/Domain-driven_design',
			description:
				"an approach to software design that focuses on modeling software to match a domain according to input from that domain's experts"
		},
		{
			idCode: 'iot',
			name: 'Internet of Things (IoT)',
			url: 'https://en.wikipedia.org/wiki/Internet_of_things',
			description:
				'physical objects with sensors, processing ability, software and other technologies that connect and exchange data with other devices and systems over the Internet '
		},
		{
			idCode: 'blockchain',
			name: 'Blockchain',
			url: 'https://en.wikipedia.org/wiki/Blockchain',
			description:
				' a distributed ledger with growing lists of records (blocks) that are securely linked together via cryptographic hashes'
		},
		{
			idCode: 'saas',
			name: 'SAAS',
			url: 'https://en.wikipedia.org/wiki/Software_as_a_service',
			description:
				'(Software as a service) a software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted'
		},
		{
			idCode: 'mobx',
			name: 'MobX',
			url: 'https://mobx.js.org',
			description:
				'an alternative state management tools which is a good alternative to Redux giving the same functionality with less code to write'
		},
		{
			idCode: 'headlesscms',
			name: 'Headless CMS',
			url: 'https://en.wikipedia.org/wiki/Headless_content_management_system',
			description:
				'a backend-only web content management system that acts primarily as a content repository accessible via an API or GraphQL'
		},
		{
			idCode: 'contentful',
			name: 'Contentful',
			url: 'https://www.contentful.com',
			description:
				'a content management system (CMS) that allows developers to create, manage, and distribute digital content across multiple platforms and devices'
		},
		{
			idCode: 'storyblok',
			name: 'Storyblok',
			url: 'https://www.storyblok.com',
			description:
				'a headless content management system that focuses on creating better content experiences for users'
		}
	];
};

/**
 * getJobs()
 *
 * returns all jobs as a JSON array of job objects
 */
export const getJobs = () => {
	return [
		{
			id: 1,
			title: 'Frontend Developer',
			company: 'PwC Deutschland',
			url: 'https://www.get-in-it.de/jobsuche/p172318?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche',
			description:
				'Frontend-Entwicklung - Unser Produkt ist zentraler Bestandteil der Digitalisierungsstrategie von PwC Deutschland. Unsere Lösungen sollen komplexe Probleme einfach machen, dafür brauchen wir intuitive und moderne Frontends - und die baust du! Du bist zentrale:r Ansprechpartner:in für die Frontend Entwicklung eines wichtigen internationalen Prüfungstools in einem agilen Team der Digital Factory. Du konzipierst Responsive Web-Apps mit JavaScript /TypeScript und Angular und entwickelst diese weiter. Du kannst schnell UI-Prototypen aufsetzen, aber auch robuste, skalierbare Frontends im Angular Framework für unser Tool implementieren.\n\nFachliche Expertise - Du hast bereits Erfahrung in der Entwicklung von Web Applikationen mit HTML, CSS und JavaScript/TypeScript. Moderne UI Frameworks (Angular) hast du bereits erfolgreich eingesetzt, idealerweise hast du auch schon Erfahrung mit WebSocket.\n\nAgile Mindset - Du lebst und liebst Frontend-Technologien und entwickelst so kontinuierlich Produkt, Prozesse und Zusammenarbeit weiter.\n\nTeamwork - Unsere Teams sind cross-funktional. Du arbeitest Hand in Hand mit anderen Entwickler:innen, Automation Engineers und UX Kolleg:innen an der gemeinsamen Produktvision.\n\nArbeite wie es zu deinem Leben passt: mit FlexWork. Keine fixen Home-Office-Tage, sondern deine Chance Arbeitszeit und -ort variabel zu gestalten.\nDein Profil\n\nDu verfügst über ein abgeschlossenes Studium im Bereich Informatik oder eine vergleichbare Ausbildung und bringst Berufserfahrung im IT Umfeld, insbesondere im Frontend-Bereich, mit.\n\nDu hast ein grundlegendes Verständnis von Build-Prozessen, CI/ CD, Testing. Die Testautomatisierung im Frontend-Bereich ist für dich kein Neuland.\n\nDu hast idealerweise auch Erfahrungen im User Tracking mit Hotjar oder Piwik.\n\nDu suchst ein agiles Umfeld, in dem du deine Stärken ausspielen kannst.\n\nSehr gute Deutsch- und Englischkenntnisse helfen dir dabei, deine Ideen auch im internationalen Kontext oder mit internationalen Teamkolleg:innen zu teilen.',
			skillList: 'angular, cicd, testing, hotjar, piwik',
			publicationDate: '2022-11-17'
		},
		{
			id: 2,
			title: 'Frontend-Entwickler',
			company: 'networker, solutions',
			url: 'https://www.get-in-it.de/jobsuche/p197373?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche',
			description:
				'Deine Aufgaben bei uns\n\n    Entwicklung von Frontend und UI-Komponenten\n    Betreuung und Weiterentwicklung bestehender Systeme\n    Zusammenarbeit mit anderen Dienstleistern an gemeinsamen Kundenprojekten\n    Umsetzung eigener Webentwicklung gemeinsam mit den Teams\n\nDeine Kompetenzen\n\n    JavaScript, Type Script\n    HTML + CSS\n    React\n    Jest Testing\n    RESTful APIs + Swagger\n    Git, Gitlab\n    Webstorm\n    NestJs\n    UX-Design',
			skillList:
				'typescript, react, jest, rest, swagger, git, gitlab, webstorm, nestjs, ux',
			publicationDate: '2022-11-17'
		},
		{
			id: 3,
			title: 'Web Frontend Entwickler',
			company: 'EPI development',
			url: 'https://www.get-in-it.de/jobsuche/p132078?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche',
			description:
				'Die Herausforderung\n\n    Erstellung einer Bedarfsanalyse für neue Funktionen mit einer selbsterklärenden UI Gestaltung\n    Entwickeln von Funktionen und Algorithmen die nachhaltig lesbar sind\n    Der Fokus liegt in der Vereinfachung komplexer Vorgänge\n\nDeine Aufgaben\n\n    Weiterentwicklung von epirent aufgrund von aktuellen Anforderungen\n    Im Team Lösungen für neue Funktionen erarbeiten\n    Erstellen von gut bedienbaren und ausgeklügelten UI, denke wie ein Anwender\n    Kommunikation im Team, einbringen eigener Ideen\n    Offener Umgang mit neuen Technologien\n    Kreativität ist gefragt\n\nDeine Fähigkeiten\n\n    Weitreichende Erfahrungen in der Anwendungsprogrammierung\n    Klare und selbsterklärende UI Designs erstellen\n    Komplizierte technische Zusammenhänge auf einfache Funktionen herunterbrechen\n    Kommunikativ im Team, zielorientiert und selbständig in der Arbeitsorganisation\n    Deine Sprachkenntnisse (optimal): JavaScript, CSS, HTML, Bootstrap, AngularJS, API Entwicklung (REST), Responsive Design / Progressive Apps\n    Kein Hochschulabschluss notwendig, Können zählt!',
			skillList: 'angular, bootstrap, rest, responsive, pwa',
			publicationDate: '2022-11-17'
		},
		{
			id: 4,
			title: 'Frontend Developer',
			company: 'reuter onlineshop',
			url: 'https://www.get-in-it.de/jobsuche/p206536?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche',
			description:
				"Successfully completed studies with a focus on computer science, a similar education or relevant professional experience\nVery good knowledge in React or similar\nGood knowledge of HTML, CSS, JavaScript and Jest/Mocha\nTypeScript, Gitlab, Next.js, styled-components, Storybook and Webpack sound familiar to you\nInspire with your innovative thinking and don't lose sight of the big picture\nGet actively involved in professional discussions",
			skillList:
				'react, jest, mocha, typescript, gitlab, nextjs, styledcomponents, storybook, webpack',
			publicationDate: '2022-12-06'
		},
		{
			id: 5,
			title: 'Frontend Developer und Consultant',
			company: 'codecentric',
			url: 'https://www.get-in-it.de/jobsuche/p206964?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche',
			description:
				'Du hast ein tiefes, technisches Verständnis von Webtechnologien, wie JavaScript, TypeScript, HTML5 und CSS3 sowie Angular, ReactJS und/oder VueJS\n    Du kennst dich mit CSS-Präprozessoren und CSS-Architekturen aus\n    Du bist vertraut mit der Cross-Browser-Problematik\n    Du bist sicher im Umgang mit modernen Buildtools (z. B. Fuse-Box, Rollup, Webpack) und hast Kenntnisse aktueller Testing Frameworks (z. B. Mocha, Jasmine oder Jest)\n    Du kennst die agilen Werte und arbeitest gerne in agilen Teams\n    User Experience und Responsive Design interessieren dich\n    Beratung liegt dir und du kannst dir vorstellen, unsere Kunden technologisch oder/und methodisch zu schulen. Dafür bringst du eine hohe Kommunikationsfähigkeit und verhandlungssichere Deutschkenntnisse mit',
			skillList:
				'typescript, angular, react, vue, fusebox, rollup,webpack, mocha, jasmine, jest, ux, responsive',
			publicationDate: '2022-12-07'
		},
		{
			id: 6,
			title: 'Praktikant IT-Beratung Public Sector',
			company: 'PwC',
			url: 'https://www.stepstone.de/stellenangebote--Praktikant-Werkstudent-IT-Beratung-Public-Sector-w-m-d-Berlin-Duesseldorf-Frankfurt-a-M-Muenchen-Saarbruecken-Stuttgart-PwC--7857961-inline.html?rltr=7_7_25_seorl_m_0_0_0_0_0_0',
			description:
				'Durch relevante Studienschwerpunkte oder praktische Erfahrungen hast du Grundkenntnisse in einem der folgenden Themen:\n\n- klassische Softwareentwicklung (z. B. C/C++, Java, C#),\n\n- Webentwicklung (z.B. JavaScript, Angular, React),\n\n- (Web-) Designpattern (MVC, MVVC),\n\n- Datenhaltung (z.B. SQL, noSQL, XML, JSON),\n\n- Cloud (Azure, Google, AWS, SAP),\n\n- Konzeption von IT-Architekturen/ IT-Infrastrukturen.',
			skillList:
				'c, cplusplus, java, csharp, angular, react, mvc, mvvm, azure, aws, gcp, nosql, sql, xml, json, sap',
			publicationDate: '2022-12-08'
		},
		{
			id: 7,
			title: 'Frontend Entwickler React Typescript',
			company: 'ibi systems GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Frontend-Entwickler-React-Typescript-m-w-d-Regensburg-ibi-systems-GmbH--8924608-inline.html?rltr=2_2_25_seorl_m_0_0_0_0_1_0',
			description:
				'Deine Aufgaben\n\n    Technische Konzeption, Design und Implementierung neuer Features\n    Anpassung und kontinuierliche Optimierung bestehender Features\n    Agile Entwicklung mit Scrum und gitflow (inkl. Pull Requests)\n    Keine Scheu vor Frontend-nahen Entwicklungstätigkeiten im Backend\n    Idealerweise Umsetzung unserer UX-Designs\n\nUnser Stack\n\n    Architektur: Domain Driven Design, Microservices, Event-driven\n    Backend: .NET 6 (C#), Entity Framework Core, Hangfire, RabbitMQ\n    Frontend: React, Material UI (MUI), GraphQL (Apollo), Typescript sowie ASP.NET Web API (REST API)\n    Hosting: Docker, Kubernetes, Azure, OpenShift\n    Unit Tests mit NUnit\n    Moderne Entwicklungstools wie JetBrains Rider/WebStorm, Git und DevOps Server\n',
			skillList:
				'agile, scrum, gitflow, ux, domaindrivendesign, microservices, dotnet, entityframework, hangfire, rabbitmq, react, mui, graphql, apollo, typescript, aspnet, rest, docker, kubernetes, azure, openshift, nunit, rider, webstorm, devopserver, vue, angular',
			publicationDate: '2022-12-12'
		},
		{
			id: 8,
			title: 'Fullstack developer React framework',
			company: 'ALTEN GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Fullstack-developer-m-f-d-React-framework-Munich-ALTEN-GmbH--8995148-inline.html?rltr=15_15_25_seorl_m_0_0_0_0_1_0',
			description:
				'\n    Successfully completed studies in computer science, electrical engineering  or similar\n    Relevant years of work experience as a Full Stack Engineer and have built and operated an application in production in the past, preferably in the area of e-commerce\n    Developing applications with React, modern JavaScript standards (ES6/ES7), HTML5 and CSS\n    Practical experiences with NoSQL data bases like MongoDB\n    Comfortable with building, deploying and operating your application as micro services in a cloud infrastructure\n    Very good knowledge of English\n',
			skillList: 'react, mongodb, microservices, cloud',
			publicationDate: '2022-12-13'
		},
		{
			id: 9,
			title: 'Junior-Softwareentwickler:in',
			company: 'Qnips GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Junior-Softwareentwickler-in-Hannover-Qnips-GmbH--7783712-inline.html?rltr=5_5_25_seorl_m_0_0_0_0_1_0',
			description:
				'Du bringst viel Interesse an modernen IT-Systemen, neuen Frameworks & Programmiersprachen mit \nDu bist fit in der Programmierung und fühlst dich in einem der nachfolgenden Bereiche wohl. Wir finden den passenden Tech-Stack für dich! \n\n    Android: Kotlin und Jetpack Compose \n     iOS: Swift und Swift UI \n     Backend Development: C#, .NET, Google Firebase, Cloud functions \n     Hybride App Development: Flutter mit Dart \n     Web Development: Angular, TypeScript-Framworks\n\nIdealerweise besitzt Du Kenntnisse im Umgang mit (RESTful-) Webservices sowie Git als Versionsverwaltung.  \nDu hast ein großes Herz für gute User Experience, durchdachtes Interface Design oder state-of-the-art API-Design ',
			skillList:
				'kotlin, jetpackcompose, swift, csharp, dotnet, firebase, flutter, dart, angular, rest, git',
			publicationDate: '2022-12-14'
		},
		{
			id: 10,
			title: 'Backend Developer Node/Typescript',
			company: 'Interhyp Gruppe',
			url: 'https://www.stepstone.de/stellenangebote--Backend-Developer-Typescript-Node-JS-m-w-d-Muenchen-Interhyp-Gruppe--9006012-inline.html?rltr=2_2_25_seorl_m_0_0_0_0_0_0',
			description:
				' wir dich unbedingt brauchen, da du unsere digitalen Produkte entwickelst – mit Technologien wie z. B. Typescript, Node.JS, Express, MongoDB, Rest.\n\n… unsere Product Owner voll und ganz auf dich als kompetente*n Ansprechpartner*in zählen.\n\n… wir nicht genug von deinem Feedback zu den User Storys kriegen können und du uns dabei hilfst, ein herausragendes Produkt für unsere Kund*innen zu schaffen.\n\n… du immer und immer wieder deine eigenen Ideen einbringst, um damit Qualität, technische Verbesserungen sowie neue Features voranzutreiben.\nUnd du passt perfekt zu uns, denn...\n\n… du hast mindestens zwei Jahre relevante Erfahrung in der Arbeit mit schnell skalierenden und komplexen Systemen.\n\n… über umfassende Erfahrung mit Typescript, Node.JS verfügst du bereits und besitzt idealerweise schon praktische Erfahrung mit Express, MongoDB, Rest.\n\n… als Teamplayer schlägt dein Herz dafür, Feedback zu erhalten und zu geben, um sowohl persönlich als auch als Software Engineer (m/w/d) zu wachsen.\n\n… du handelst lösungsorientiert, übernimmst aktiv Verantwortung und stellst dich gern neuen Herausforderungen.',
			skillList: 'typescript, node, express, mongodb, rest',
			publicationDate: '2022-12-14'
		},
		{
			id: 11,
			title: 'Full Stack Developer',
			company: 'ASAMBEAUTY GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Full-Stack-Developer-m-w-d-Unterfoehring-Muenchen-ASAMBEAUTY-GmbH--8963596-inline.html?rltr=3_3_25_seorl_m_0_0_0_0_1_0',
			description:
				'    Abgeschlossene Ausbildung als IT-Systemelektroniker, Fachinformatiker oder eine vergleichbare Ausbildung\n    3-5 Jahre Erfahrung als Full Stack-Entwickler oder eine ähnliche Funktion\n    Erfahrung in der Arbeit mit Shopsystemen, hauptsächlich Magento 2\n    Erfahrung in der Entwicklung von Desktop- und mobilen Anwendungen\n    Kenntnisse mehrerer Front-End-Sprachen und Bibliotheken (z.B. HTML/CSS, JavaScript, XML, jQuery)\n    Kenntnisse in mehreren Back-End-Sprachen, hauptsächlich PHP und JavaScript-Frameworks (z.B. Angular, React, Node.js)\n    Vertrauter Umgang mit Datenbanken (z.B. MySQL), Web-Servern (z.B. Apache, NGINX) und UI/UX-Design\n    Vertrauter Umgang mit Cloud-Hosting (AWS)\n    Erste Erfahrungen in anderen Bereichen von eCommerce-Plattformen wie Zahlung, Produktdaten, Auftragsverwaltung, Webanalyse, Inhaltsverwaltung, Werbung, Suche usw.\n    Erste Erfahrungen mit dem Lebenszyklus in einer agilen / Scrum-Umgebung',
			skillList:
				'magento, xml, jquery, php, angular, react, node, mysql, apache, nginx, ux, aws, scrum',
			publicationDate: '2022-12-14'
		},
		{
			id: 12,
			title: 'Machine Learning Engineer',
			company: 'HDP-Gesellschaft für ganzheitliche Datenverarbeitung mbH',
			url: 'https://www.stepstone.de/stellenangebote--Machine-Learning-Engineer-m-w-d-Alzey-HDP-Gesellschaft-fuer-ganzheitliche-Datenverarbeitung-mbH--8076473-inline.html?rltr=14_14_25_seorl_m_0_0_0_0_0_0',
			description:
				'\n    Die Erfüllung der Aufgaben setzt ein abgeschlossenes Studium im MINT-Bereich voraus.\n    Des Weiteren werden Kenntnisse im Bereich Machine Learning sowie fortgeschrittene Programmierkenntnisse in einer objektorientierten Sprache (bevorzugt Python) vorausgesetzt.\n    Erfahrungen mit einschlägigen Frameworks und Werkzeugen zu Machine Learning und dem Python Scientific Stack sind wünschenswert (z.B. scikit-learn, TensorFlow, PyTorch).\n    Idealerweise verfügen Sie über Erfahrungen im Bereich Software Engineering und Testen.\n    Ein hohes Qualitätsbewusstsein, eine ausgeprägte Innvoations- und Lernbereitschaft sowie Eigeninitiative zeichnet Sie und Ihren Arbeitsstil aus.\n    Als zielorientierte Persönlichkeit gehen Sie analytisch vor und lösen Problemstellungen strukturiert.\n    Sie sind ein engagierter Teamplayer, bringen sich gerne ein und sind offen für Neues.\n',
			skillList:
				'mint, machinelearning, python, oop, pythonsciencestack, scikitlearn, tensorflow, pytorch, testing',
			publicationDate: '2022-12-15'
		},
		{
			id: 13,
			title: 'Entwickler React / Cloud',
			company: 'itdesign GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Remote-Software-Developer-Entwickler-React-Cloud-m-w-d-Tuebingen-bei-Stuttgart-Zwickau-Mainz-itdesign-GmbH--8056768-inline.html?rltr=12_12_25_seorl_m_0_0_0_0_0_0',
			description:
				'Das tun wir\n\n    Im Scrum Team konzipieren wir die Architektur und implementieren Features\n    Durch Code Review und Remote Pair Programming stellen wir die Code-Qualität sicher\n    Wir deployen die Microservices des Teams\n    Wir tauschen uns täglich über Herausforderungen und technische Trends über Collaborations Tools aus und lernen voneinander und miteinander\n\nDas bist du\n\n    In den Bereichen Softwarearchitektur, Web-Applikationen oder Server-Client-Systeme fühlst du dich wohl\n    Moderne JavaScript Frameworks, z.B. React, Vue, Angular oder Backend-Technologien wie Spring Boot sind deine Leidenschaft\n    Du brauchst beim Programmieren Ruhe und kannst dich zu Hause am besten konzentrieren\n    Du willst auch remote Teil eines unschlagbaren Teams sein\n\n',
			skillList:
				'scrum, codereview, pairprogramming, microservices, react, vue, angular, springboot',
			publicationDate: '2022-12-16'
		},
		{
			id: 14,
			title: 'Full Stack Developer',
			company: 'klarsolar GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Full-Stack-Developer-m-w-d-Heidelberg-klarsolar-GmbH--8864165-inline.html?rltr=5_5_25_seorl_m_0_0_0_0_0_0',
			description:
				'Deine Aufgaben:\n\n    Als aktiver Teil des Entwicklungsteams arbeitest du eigenverantwortlich an Softwarelösungen\n    Technische Best Practices wie Serverless, CQRS, Microservices und Micro Frontends kennst du wie deine Westentasche und setzt mit ihnen agile Anforderungsbeschreibungen aus User Stories und Use Cases in geeignete Softwarekomponenten um\n    Deine Aufgaben erstrecken sich über den gesamten Stack einer Applikation (Angular, GrapQL, NestJS)\n    Zur automatisierten Auslieferung von Software-Artefakten, setzt du Test-Cases in Test-Code um, damit eine Ergebnissicherung der Anwendung für das Team gewährleistet ist\n\nDein Profil:\n\n    Du bringst Erfahrungen in Frontend und Backend-Entwicklung mit Javascript, HTML, Node.js, Angular, GraphQL, Tailwind mit\n    In Projektteams findest du dich schnell zurecht, da du gut organisiert bist und das interdisziplinäre Arbeiten schätzt\n    Du bist erfahren in min. einem CI/CD Werkzeug (bspw. Git Hub Actions)\n    Du hast Kenntnisse in einem IaaS-Anbieter (z.B. Azure, AWS, Google..)\n    Du hast Kenntnisse der gängigen Cloud-Anwendungsplattformen (z.B. Docker,Kubernetes)\n    Du hast ein agiles Mindset, bist kollegial und ergebnisorientiert\n',
			skillList:
				'serverless, cqrs, microservices, microfrontends, angular, graphql, nestjs, node, tailwind, cicd, githubactions, azure, aws, gcp, docker, kubernetes, agile',
			publicationDate: '2022-12-17'
		},
		{
			id: 15,
			title: 'Frontend Entwickler',
			company: 'Bertelsmann',
			url: 'https://www.get-in-it.de/jobsuche/p204395?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche',
			description:
				'Wir suchen Dich, denn Du bist motiviert und engagiert und hast Lust gemeinsam mit uns unsere neue Lernplattform stetig weiterzuentwickeln und zu optimieren.\n\nZudem bringst Du Folgendes mit:\n\n    Ein abgeschlossenes IT-Studium (Informatik, Wirtschaftsinformatik), eine Ausbildung als Fachinformatiker (m/w/d) oder eine vergleichbare Qualifikation\n    Mindestens drei Jahre Berufserfahrung in der Umsetzung von Web-Anwendungen\n    Fundierte Kenntnisse in ReactJS, TailwindCSS oder ein anderes CSS-Framework\n    Erfahrung mit Jest, CI/CD, Docker oder Nginx sind ein Plus\n    Eine strukturierte, selbstständige und zielorientierte Arbeitsweise\n    Verhandlungssichere Deutsch- und Englischkenntnisse',
			skillList: 'react, tailwind, jest, cicd, docker, nginx',
			publicationDate: '2022-12-17'
		},
		{
			id: 16,
			title: 'Frontend Developer',
			company: 'modis',
			url: 'https://www.get-in-it.de/jobsuche/p207871?start=0&limit=39&ref=Jobsuche',
			description:
				'    Sie bringen ein abgeschlossenes Studium oder eine Ausbildung im Bereich der Webentwicklung mit\n    Kenntnisse in HTML, CSS, JavaScript und React zeichnen Sie aus\n    Sie verfügen über Erfahrungen mit der Anbindung von Micro-bzw. Backend-Services (unter anderem REST)\n    Auch in den Bereichen Node.js-Ökosystem und moderne Build-Prozesse kennen Sie sich aus\n    Zudem besitzen Sie Kenntnisse im Umgang mit TypeScript, Fluent UI, Docker und Java\n    Abgerundet wird Ihr Profil dadurch, dass Sie ein Teamplayer sind und sich mit Engagement im Team einbringen',
			skillList: 'react, rest, node, typescript, fluentui, docker, java',
			publicationDate: '2022-12-17'
		},
		{
			id: 17,
			title: 'Backend Developer TypeScript',
			company: 'snapADDY GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Backend-Developer-TypeScript-NestJS-PostgreSQL-m-w-d-97070-Wuerzburg-snapADDY-GmbH--8962220-inline.html?rltr=5_5_25_seorl_m_0_0_0_0_0_0',
			description:
				'Your profile\n\n    Passion for software development in the area of APIs, Databases and Backend\n    Collaborating with other developers and departments is enjoyable for you\n    Experience with modern JavaScript and TypeScript or willingness to learn\n    Structured, analytical, and independent way of working\n    An open and friendly personality who enjoys working with colleagues as part of a team\n\nOur technologies:\n\n    Development in JavaScript and TypeScript\n    Backend: NodeJS, NestJS, TypeORM, PostgreSQL, Redis\n    Tools: GitHub with ZenHub, Slack, Github Actions, Ionic AppFlow\n    Hosting: Amazon Web Services (AWS), Lambda Functions, Kubernetes\n\nNice-to-have\n\n    Experience with Amazon Web Services (AWS)\n    Knowledge about APIs and Integrations of B2B applications like Salesforce or Microsoft Dynamics\n',
			skillList:
				'rest, typescript, node, nestjs, typeorm, postgres, redis, zenhub, githubactions, ionicappflow, aws, awslambda, kubernetes, salesforce, microsoftdynamics',
			publicationDate: '2022-12-17'
		},
		{
			id: 18,
			title: 'Full Stack Webentwickler',
			company: 'Alevino',
			url: 'https://www.stepstone.de/stellenangebote--Full-Stack-Webentwickler-m-w-d-bundesweit-Alevino--8954447-inline.html?rltr=5_5_25_seorl_m_0_0_0_0_1_0',
			description:
				'Du bist ein Vollblut-Techie (m/w/d) mit einiger Erfahrung im Bereich Webentwicklung. Ideal sind\n\n    Praktische Erfahrungen im Bereich der Frontend-Entwicklung mit modernen Webtechnologien (HTML, CSS, Javascript), SPA-Frameworks (insbesondere React.js) und Progressive Web Apps (PWAs).\n    Kenntnisse der Backend-Entwicklung in Javascript bzw. Typescript mit Node.js (z. B. mit Nest.js) und gängigen Datenbanken (insbesondere PostgreSQL und Mongo DB)\n    Vertrautheit mit einschlägigen Konzepten wie Microservice-Architekturen und REST-Schnittstellen\n    Sicherer Umgang in der Versionsverwaltung mit Git und Erfahrungen im Bereich CI/CD mit Github oder Gitlab\n    Kenntnisse von Containerisierung und dem Betrieb von Anwendungen im Cloud-Umfeld (z. B. AWS), gerne auch mit Serverless-Computing-Ansätzen.\n    Bereitschaft Betriebsverantwortung im Sinne des DevOps zu übernehmen – „You build it, you run it“',
			skillList:
				'react, pwa, typescript, node, nestjs, postgres, mongodb, rest, cicd, github, gitlab, aws, serverless, devops',
			publicationDate: '2022-12-17'
		},
		{
			id: 19,
			title: 'Frontend Developer',
			company: 'toom Baumarkt GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Frontend-Developer-Cross-Channel-E-Commerce-m-w-d-51149-Koeln-toom-Baumarkt-GmbH-Ein-Unternehmen-der-REWE-Group--9028936-inline.html?rltr=2_2_25_seorl_m_1_0_0_0_1_0',
			description:
				'Technologien: \n\nJavaScript | TypeScript | HTML | CSS | React | REST/GraphQL | Kubernetes | Gitlab CI/CD\n\nDeine Aufgaben: \n\n    Dein Fokus liegt auf der Entwicklung und Implementierung moderner und nutzerzentrierter Webanwendungen\n    Für deine Entwicklung nutzt du unsere Pattern Library basierend auf Atomic Design \n    Unserer Softwarearchitektur gestaltest du aktiv mit \n    Für die Einhaltung von Architekturvorgaben, die Wartbarkeit und Wiederverwendbarkeit der Komponenten sowie die Qualitätssicherungsmaßnahmen übernimmst du die Verantwortung \n    Neue Produktanforderungen werden von Dir analysiert und in unsere Gesamtarchitektur integriert \n    Du blickst über den Tellerrand und bringst neue Ideen und Technologien aus dem Bereich Webentwicklung ein \n    Du beteiligst Dich regelmäßig und aktiv daran, die Zusammenarbeit in unserem agilen Arbeitsumfeld zu verbessern \n\nDein Profil\n\nDas bringst du mit:\n\n    Leidenschaft für nachhaltige Software-Entwicklung und Clean-Code \n    Mehrjährige Berufserfahrung in objektorientierter Entwicklung von Webanwendungen \n    Idealerweise ein Studium der (angewandten) Informatik bzw. Wirtschaftsinformatik oder ein anderer überzeugender Werdegang \n    Fundierte Kenntnisse in JavaScript und/oder TypeScript, HTML und CSS  \n    Praktische Erfahrung mit JavaScript Frameworks/ Microfrontend-Architekturen wie VueJS, React oder Angular \n    Kenntnisse im Umgang und Aufsetzen automatisierter Tests (z.B. Cypress) \n    Expertise in der Schnittstellendefinition (REST, OpenAPI, Swagger, ...) \n    Routine im Umgang mit Versionsverwaltungssystemen und Build-Pipelines (Git, Gitlab) \n    Freude an agiler Zusammenarbeit \n    Sehr gute Deutschkenntnisse und gute Englischkenntnisse \n',
			skillList:
				'typescript, react, rest, graphql, kubernetes, gitlab, cicd, cleancode, oop, vue, angular, cypress, openapi, swagger, git, agile',
			publicationDate: '2022-12-18'
		},
		{
			id: 20,
			title: 'React Developer',
			company: 'NETCONOMY GmbH',
			url: 'https://www.stepstone.de/stellenangebote--React-Developer-m-f-d-Dortmund-Berlin-NETCONOMY-GmbH--8377095-inline.html?rltr=5_5_25_seorl_m_0_0_0_0_0_0',
			description:
				'Your Job\n\n    You contribute in developing high performance web solutions within our agile and cross-functional teams\n    You work across the entire web stack with modern web frameworks such as React, Redux, GraphQL, Node.js, SASS and TypeScript\n    You build experiences for customers by optimizing the usability and UX\n    You effectively support with browser and performance optimization\n    You successfully implement responsive designs and ensure cross-browser compatibility\n    You proactively assist with the evaluation and introduction of innovative frontend technologies\n\nYour Skills\n\n    You have at least 3 years of experience working as a Frontend Developer or in a similar role\n    You have experience / relevant background in web development with Javascript/ES6 (React)\n    You are familiar with a variety of web browsers and their compatibility issues\n    You know how to use modern development tools, such as JIRA, Confluence, Git, Jenkins\n    You have practical experience with accessibility, performance analysis and usability\n    Your knowledge of concepts like Server-Side Rendering and Progressive Web Apps is solid\n    You have excellent English skills (B2/C1), German skills are beneficial\n\n',
			skillList:
				'react, redux, graphql, node, sass, typescript, ux, jira, confluence, git, jenkins, ssr, pwa',
			publicationDate: '2022-12-18'
		},
		{
			id: 21,
			title: 'TypeScript Developer',
			company: 'meetergo GmbH',
			url: 'https://www.stepstone.de/stellenangebote--TypeScript-Developer-m-w-d-Koeln-meetergo-GmbH--8168170-inline.html?rltr=1_1_25_seorl_m_0_0_0_0_1_0',
			description:
				'Bei uns kannst Du Deine großartigen Tech Skills voll zum Einsatz bringen. Sag uns, was Du drauf hast und wir finden gemeinsam mit Dir Deinen Best-fitting-place in unserem agilen Entwickler-Team. Mindestens mit 2 bis 3 der folgenden Technologien solltest Du Dich richtig gut auskennen:\n\n    Modernes Typescript\n    React / NextJS / Remix / Chakra UI / Material UI (Frontend)\n    React Native (Native)\n    NestJS / TypeORM / Postgres (Backend-API)\n    LiveKit (P2P-Videoplattform)\n    WebSockets / Socket.io / Redis / LiveKit SDK (Backend-Realtime-Comms)\n    AWS / Terraform / Docker / Kubernetes (Infrastruktur)\n    Nx (Monorepo)\n    Webpack / Babel / Nx (Build Tools)\n    Gitlab/Circle CI (CI)\n    Jest / React Testing Library / Testcafe / Cypress / Supertest (Testing)\n',
			skillList:
				'react, nextjs, remix, typescript, chakraui, mui, reactnative, nestjs, typeorm, postgres, livekit, socketio, redis, aws, terraform, docker, kubernetes, nx, webpack, babel, gitlab, circleci, jest, reacttestinglibrary, testcafe, cypress, supertest',
			publicationDate: '2022-12-19'
		},
		{
			id: 22,
			title: 'Softwareentwickler Frontend DevOps',
			company: 'Deutsche Bahn',
			url: 'https://www.get-in-it.de/jobsuche/p174488?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche',
			description:
				'Du hast ein (Fach-)Hochschulstudium in (Wirtschafts-)Informatik oder einer vergleichbaren Fachrichtung abgeschlossen oder verfügst über eine Ausbildung im IT-Bereich\n    Du bist Experte in der Entwicklung mit JavaScript/TypeScript und React und hast Erfahrung im Umgang mit Komponentenbibliotheken wie Chakra UI\n    Automatisierte Tests, UX und Accessibility sind für dich unverzichtbar neue Technologien setzt du im Sinne der Kundenorientierung zum Wohle der Anwendenden ein\n    Du hast Lust darauf, dein Know how in für ein DevOps-Team wichtigen Themenfeldern wie Continuous Integration und Continuous Delivery auf- und auszubauen\n    Spaß an neuen Technologien, ein hohes Maß an Wissbegierde und Lernbereitschaft zeichnen dich aus und du sprichst fließend Deutsch',
			skillList: 'typescript, react, chakraui, testing, ux, devops, cicd',
			publicationDate: '2022-12-20'
		},
		{
			id: 23,
			title: 'Frontend-Entwickler',
			company: 'dotSource',
			url: 'https://www.get-in-it.de/jobsuche/p13958?filter[thematic_priority]=5&filter[city][radius]=25&filter[city][city][0][lon]=13.41053&filter[city][city][0][lat]=52.52437&start=0&limit=39&ref=Jobsuche',
			description:
				'Erfolgreiches Informatikstudium oder eine vergleichbare technische Qualifikation/Ausbildung\n    Professioneller Umgang mit Technologien, wie bspw. HTML5, CSS3 (SASS, LESS), JavaScript und Frameworks wie AngularJS, vueJS oder React\n    Gute Kenntnisse in den Bereichen Browser-Kompatibilität, Responsive Webdesign und CMS\n    Vorteilsweise Kenntnisse in User-Experience (UX) und Webdesign\n    Grundkenntnisse in Java und/oder PHP sowie in verschiedenen Template-Engines',
			skillList: 'sass, angular, vue, react, responsive, ux, java, php',
			publicationDate: '2022-12-21'
		},
		{
			id: 24,
			title: 'React Frontend Developer',
			company: 'proWIN Winter GmbH',
			url: 'https://www.stepstone.de/stellenangebote--React-Frontend-Developer-m-w-d-Illingen-proWIN-Winter-GmbH--9044500-inline.html?rltr=5_5_25_seorl_m_0_0_0_0_1_0',
			description:
				'Ihre Aufgaben\n\n    Sie planen und entwickeln Frontend Applikationen im agilen Projektumfeld unter Berücksichtigung von Best Practices und unseren Sicherheits- und Qualitätsanforderungen\n    Sie entwickeln mit Hilfe von Designrichtlinien Web- und Mobile- Applikationen eigenständig und im Team\n    Sie arbeiten mit aktuellen Frameworks und Konzepten (REST APIs, Micro Services, Responsive Webdesign, Git, npm)\n    Sie stehen im engen Austausch mit unseren UX-Designern und Product-Ownern und stimmen\n    fachliche und technische Komponenten der Architektur ab\n    Sie haben aktuelle Trends stets im Blick und setzen diese in Webtechnologien und Softwaredesigns um\n\nIhr Profil\n\n    Sie verfügen über ein Studium oder eine abgeschlossene Berufsausbildung im IT-Bereich\n    Bestenfalls besitzen Sie bereits Kenntnisse in JavaScript, Typescript, Node.js, HTML oder Sass\n    Erste Erfahrungen in der Entwicklung von Frontendsystemen (React, Piral, Material UI) sowie\n    mit Continuous Integration (GitLab CI) im Umfeld von Progressive Web Apps sind von Vorteil\n    Sie verfügen über sehr gute Deutsch- und Englischkenntnisse in Wort und Schrift\n    Sie sind mit Herz bei der Arbeit, sind aufgeschlossen, teamfähig und arbeiten ziel- und ergebnisorientiert\n\n',
			skillList:
				'react, piral, typescript, pwa, sass, mui, rest, microservices, responsive, git, node, cicd',
			publicationDate: '2022-12-22'
		},
		{
			id: 25,
			title: 'Webentwickler',
			company: 'WRS Energie + Druckluft GmbH',
			url: 'https://www.linkedin.com/jobs/view/3407485504/?alternateChannel=search&refId=UEPWpoXqAcAJh%2BqtdHwMmQ%3D%3D&trackingId=CyV1rkRmqCxXbaAEZWA5JQ%3D%3D',
			description:
				'Was dich erwartet?\n\n\n    Du entwickelst überwiegend in Python\n    Du programmierst REST API Schnittstellen von und zu anderen Systemen\n    Du bist fachlicher Entscheider/in für softwaretechnische Themen\n    Du entwickelst unsere Plattformlösung weiter (Fokus Backend)\n    Du übernimmst Aufbau und Umsetzung einer skalierbaren, cloudbasierten Infrastruktur (Hetzner Cloud)\n    Du entwickelst und implementierst KI-basierte Anomalieerkennungen sowie integrierst du automatisierte Reportings\n    Du entwickelst und integrierst verschiedene MicroServices\n\n\nWas du mitbringen solltest?\n\n\n    Du hast ein abgeschlossenes Studium im Bereich Informatik oder abgeschlossene Ausbildung mit Informatikbezug\n    Du besitzt ein ausgeprägtes Interesse an modernen Technologien und künstlicher Intelligenz\n    Du verfügst über sehr gute Kenntnisse in Python sowie gute Kenntnisse mit Docker-Containerisierung und Datenbankmanagementsystemen (Influx DB, MongoDB)\n    Du hast gute Kenntnisse im Bereich REST-Schnittstellen & JSON\n    Du besitzt Erfahrung in Cloud Umgebungen wünschenswert (AWS, Azure oder Hetzner Cloud)\n    Du verfügst über sehr gute Deutschkenntnisse und idealerweise Kenntnisse in JavaScript, React oder Angular',
			skillList:
				'react, angular, python, aws, azure, hetzner, rest, json, influxdb, mongodb, docker, ai',
			publicationDate: '2022-12-23'
		},
		{
			id: 26,
			title: 'React Entwickler',
			company: 'WeMatch',
			url: 'https://www.xing.com/jobs/berlin-react-entwickler-94517585?ijt=jb_21&paging_context=similar_postings',
			description:
				'Aufgaben\n\n    Sie entwickeln Cyber Security-Lösungen und Webanwendungen im Frontend, um den Usern ein bestmögliches Erlebnis zu ermöglichen\n\n    Dabei werden folgende Technologien eingesetzt: Javascript, Typescript, React.js, React Hooks, React Functional Components\n\n    Usability, Darstellung und Performance halten Sie stets im Blick\n\n    Das Schreiben von Clean Code und das Durchführen von automatisierten Software Tests (Jest) gehört ebenfalls zu Ihrem Daily Business\n\nProfil\n\n    Abgeschlossenes Studium der (Wirtschafts-)Informatik oder vergleichbare Qualifikation sowie mindestens vier Jahre Berufserfahrung\n\n    Sehr gute Kenntnisse bei der Anwendung von gängigen Web-Technologien wie HTML5, CSS/SCSS, JavaScript und TypeScript\n\n    Sehr guter Kenntnisse in der Entwicklung von Single-Page-Webapplikationen mit React\n\n    Erfahrungen mit anderen JavaScript-Frameworks von Vorteil (z.B. Angular, Vue, Polymer, Stencil)\n\n    Erfahrung mit gängigen Werkzeugen der Webentwicklung (z.B. Jest, Cypress, Storybook, Nx, Vite)\n',
			skillList:
				'react, typescript, reacthooks, jest, sass, angular, vue, polymer, stencil, cypress, storybook, nx, vite',
			publicationDate: '2022-12-24'
		},
		{
			id: 27,
			title: 'Fullstack Developer',
			company: 'PACE Telematics GmbH',
			url: 'https://www.xing.com/jobs/karlsruhe-fullstack-developer-javascript-typescript-node-js-react-95148608?paging_context=search&search_query%5Bkeywords%5D=react%20typescript&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'Aufgaben\n\n    Du bringst frische Ideen und Learnings in das Team ein und entwickelst mit deinen Kolleg:innen innovative, interaktive Anwendungen in einem modernen TypeScript Stack (React, node.js).\n    Du entwickelst Frontend-Applikationen die viele tausende Kunden am Tag nutzen. Auch kleinere Arbeiten an dem node.js Backend schrecken Dich nicht ab.\n    Gemeinsam mit dem Backend-Team arbeitest Du an der Definition von APIs.\n    Du bist sowohl in die technische Konzeption neuer Features als auch in die Gestaltung langfristiger Strategien eingebunden und kannst eigene Ideen einbringen.\n    Du führst A/B-Tests durch und wertest diese aus um zu analysieren, wie unsere Kunden das Frontend nutzen und somit potenzielle Verbesserungen zu finden.\n\nQualifikation\n\n    Du hast mehrjährige Erfahrungen mit den Programmiersprachen TypeScript / node.js.\n    Dein Fokus liegt auf sicheren, stabilen und performanten Javascript Anwendungen.\n    Moderne Web-Frameworks wie React.js, Vue.js oder Angular.js sind für Dich nichts Neues.\n    Versionskontrolle mit Git liegt Dir am Herzen.\n    Du überzeugst außerdem durch Teamfähigkeit, eigenständiges sowie zielgerichtetes Arbeiten und verfügst über gute Kommunikationsfähigkeiten.\n    Sehr gute Deutsch- sowie gute Englischkenntnisse und eine gute Portion Humor runden Dein Profil ab.\n',
			skillList:
				'react, typescript, node, rest, abtests, vue, angular, git',
			publicationDate: '2022-12-25'
		},
		{
			id: 28,
			title: 'TypeScript Entwickler',
			company: 'Projektron GmbH',
			url: 'https://www.xing.com/jobs/berlin-typescript-entwickler-94974036?paging_context=search&search_query%5Bkeywords%5D=typescript&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'Aufgaben\n\nAls Entwickler in einem unserer drei exzellenten Teams arbeiten Sie nach Scrum an der Weiterentwicklung von Projektron BCS.\n\nDabei erarbeiten Sie Umsetzungskonzepte für Erweiterungen und Änderungen in BCS und setzen diese anschließend in einem von aktuell drei Scrum-Teams um.\n\nAuch uns passieren einmal Fehler, die wir im Team beheben und durch eine hohe Testabdeckung zukünftig verhindern können.\n\nDas Feedback unserer Anwender ist uns sehr wichtig, weshalb Sie unseren Second-Level Support regelmäßig bei der Lösungssuche von kundenspezifischen Wünschen sowie bei der Konfiguration von BCS oder der Anbindung externer Systeme unterstützen.\n\nWir möchten insbesondere Frauen dazu ermutigen, sich bei uns zu bewerben.\nQualifikation\n\n✔ Sehr gut abgeschlossenes Informatik-Studium oder ein gleichwertiges Studium aus dem MINT-Bereich\n\n✔ Hervorragende Programmierkenntnisse in TypeScript\n\n✔ 2 Jahre Berufserfahrung in einem ähnlichen Aufgabenumfeld\n\n✔ Kenntnisse in mindestens zwei der folgenden Bereiche:\n\n    Webtechnologien (HTML5, CSS, JavaScript, etc.)\n    Progressive Web Apps (PWA)\n    Java\n    Automatisiertes Testen\n    Web Services (REST)\n    Buildtools wie Jenkins, Gradle, Webpack\n    Frameworks wie React, d3.js\n    Domain Driven Design\n\n✔ Gute Deutschkenntnisse (B1 oder höher)',
			skillList:
				'typescript, pwa, java, rest, jenkins, gradle, webpack, react, d3, mint, domaindrivendesign, testing, scrum, projektronbcs',
			publicationDate: '2022-12-26'
		},
		{
			id: 29,
			title: 'Developer PHP/TypeScript/React',
			company: 'CrewBrain',
			url: 'https://www.stepstone.de/stellenangebote--Software-Developer-PHP-JavaScript-TypeScript-React-m-w-d-in-Voll-oder-Teilzeit-Baden-Baden-CrewBrain-GmbH--9008747-inline.html?rltr=1_1_25_seorl_m_0_0_0_0_1_0',
			description:
				'Deine Aufgaben:\n\n    Du bist verantwortliche für die Wartung und Weiterentwicklung unserer Softwarelösung "CrewBrain"\n    Du entwickelst unsere Software im Backend mit PHP, MySQL und JavaScript und / oder im Frontend mit Java- / TypeScript, Svelte und React Native\n    Als Mitglied eines agilen Teams bist du nicht nur an der Entwicklung, sondern auch an der Konzeption beteiligt\n\nDein Profil:\n\n    Du hast ein abgeschlossenes Studium der (Wirtschafts-)Informatik oder vergleichbare Ausbildung\n    Du hast sehr gute Kenntnisse in PHP, JavaScript, und MySQL und / oder in ReactNative und JavaScript / TypeScript\n    Du verfügst über Lösungs- und Kundenorientiertes Denken und bist in der Lage, einfache und verständliche Benutzeroberflächen zu konzipieren und umzusetzen\n    Optional verfügst du über Kenntnisse in GIT, nodeJS, Docker, Kubernetes, Amazon Web Services oder Microsoft Azure\n    Du hast Lust und Interesse daran, in einem Startup richtig etwas zu bewegen\n',
			skillList:
				'php, mysql, typescript, svelte, reactnative, git, node, docker, kubernetes, aws, azure',
			publicationDate: '2022-12-27'
		},
		{
			id: 30,
			title: 'Anwendungsentwickler',
			company: 'Statistisches Landesamt Baden-Württemberg',
			url: 'https://www.stepstone.de/stellenangebote--Anwendungsentwickler-w-m-d-Stuttgart-Statistisches-Landesamt-Baden-Wuerttemberg--8983435-inline.html?rltr=20_20_25_seorl_m_0_0_0_0_0_0',
			description:
				'Die Amtliche Statistik ist mit ihrer soliden rechtlichen Basis, ihren Qualitätsstandards und ihren auf wissenschaftlichen Methoden beruhenden Werkzeugen eine fundierte Basis für Entscheidungen in vielen Lebensbereichen. Neue Methoden in der Informationstechnologie führen dazu, dass sich die amtliche Statistik in einer Veränderung und Weiterentwicklung befindet.\n\nAutomatisierung informationstechnischer Betriebsabläufe, ein hoher Standard der Informations­sicherheit und der Umgang mit großen Datenmengen z. B. mittels Methoden des Machine Learnings sind hier besonders zu nennen.\n\nDiesen Entwicklungen trägt das Statistische Landesamt mit einer im Aufbau befindlichen neuen IT-Abteilung Rechnung. Wir suchen Kolleginnen und Kollegen, die diese Veränderung und Weiterentwicklung mit neuen Methoden der Informationstechnologie von Anfang an mitgestalten möchten.\n\nZu dem Aufgabenspektrum des Referates „Anwendungsentwicklung “ gehören insbesondere\n\n    Verfahrensentwicklung für die Fachabteilungen des Hauses und anderen statistische Ämter (erfolgt in erster Linie mit Java und JavaScript unter Windows),\n    Entwicklung von Formularen für die Datenerhebung,\n    Tabellierung und grafische Aufbereitung,\n    Qualitätssicherung.\n\nAufgabenschwerpunkte\n\nZu den zu erledigenden Aufgaben gehören:\n\n    Entwicklung und Pflege von Fachverfahren mit Java, Frameworks und React,\n    Datenbankmodellierung und -entwicklung insbesondere mit MySQL,\n    Bugfixing und Troubleshooting der entwickelten Anwendungen,\n    Dokumentation der Software.',
			skillList: 'java, react, mysql, tomcat, jboss, testing',
			publicationDate: '2022-12-28'
		},
		{
			id: 31,
			title: 'Web Developer React/SQL',
			company: 'IMA Schelling Deutschland GmbH',
			url: 'https://www.xing.com/jobs/luebbecke-web-developer-maschinensoftware-react-sql-applikationen-95310684?paging_context=search&search_query%5Bkeywords%5D=sql%20react&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'Was erwartet Dich?\n\n    Du entwickelst neue und bereits bestehende Webapplikationen und Mobile Apps für unsere Maschinen und deren Umfeld weiter\n    Du setzt innovative Features und eigene Ideen in direkter Zusammenarbeit mit den UI-/UX-Experten um\n    Du begleitest den gesamten Entwicklungsprozess von der Anforderungsanalyse über die Konzepterstellung bis zur Realisierung\n\nWas sollten Sie mitbringen?\n\n    Du verfügst über ein abgeschlossenes Studium der Informatik (FH/Uni) oder mehrjährige Berufserfahrung in der Web-Entwicklung\n    Du bringst fundierte Kenntnisse in diversen Web-Technologien (React, Node.js, TypeScript) mit\n    Du hast idealerweise Erfahrung in der Konzeption und Entwicklung von APIs (OpenAPI, REST)\n    Du besitzt Kenntnisse mit Kommunikationsprotokollen wie MQTT und AMQP\n    Du hast bereits Erfahrungen im Umgang mit Datenbanksystemen (SQL/noSQL)\n    Du hast gute Englischkenntnisse in Wort und Schrift',
			skillList:
				'react, node, typescript, rest, openapi, sql, nosql, mqtt, amqp, ux',
			publicationDate: '2022-12-29'
		},
		{
			id: 32,
			title: 'Fullstack Entwickler NodeJS/React',
			company: 'Austin Fraser',
			url: 'https://www.xing.com/jobs/berlin-fullstack-entwickler-nodejs-react-deu-95176136?paging_context=search&search_query%5Bkeywords%5D=sql%20react&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'Aufgaben\n\n    Du wirst Teil eines agilen Scrum Teams indem du neue Anwendungen konzipierst und eine Komponenten-Bibliothek aufbaust und erweiterst\n\n    Du evaluierst und erprobst neue Technologien und Frameworks\n\n    Mit deinem Entwicklungsteam die zentralen Internetauftritte für rund 50 Millionen Kund:innen weiterentwickeln\n\nProfil\n\n    Du bist ideenreich, lernst gerne neues dazu, hast Spaß an agiler Entwicklung, Code Reviews und eine Clean Code Mentalität\n\n    vertraut mit Technologien wie Java, JavaScript, HTML und CSS und gängigen Frameworks - Spring Boot, Maven/Gradle, ReactJS\n\n    Du sprichst Deutsch Verhandlungssicher in Wort und Schrift\n\n    Umgang mit SQL Datenbanken wie MySQL oder MariaDB Einsetzung von Software-Entwurfsmustern\n\n    Interesse an CI/CD (GitLabCI), Kubernetes und Docker\n\n    Mindestens 3 Jahre Berufserfahrung',
			skillList:
				'react, node, java, springboot, maven, gradle, mysql, mariadb, cicd, gitlabci, kubernetes, docker, cleancode',
			publicationDate: '2022-12-30'
		},
		{
			id: 33,
			title: 'Fullstack Engineer Python/React',
			company: 'Amboss',
			url: 'https://www.xing.com/jobs/berlin-full-stack-engineer-python-react-memorization-team-94896682?paging_context=search&search_query%5Bkeywords%5D=sql%20react&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'What you will do\n\n    Design, build and extend our Python backend services and REST APIs.\n    Build new features for the AMBOSS Anki add-on, on the frontend, for desktop and mobile web clients.\n    Migrate existing features from Python, SSR and JavaScript to React and TypeScript, using our design system.\n    Maintain and extend our test suites and integration pipelines.\n    Use observability tools and practices to ensure quality in production.\n\nWhat you will bring\n\n    2+ years of experience in backend development using Python. We also work in Go, but it can be learned, if needed. On Python, we use FastAPI.\n    2+ years of experience in modern frontend development. We work mostly in TypeScript and React.\n    Some experience with Docker and Kubernetes or similar cloud orchestration systems. We use EKS on AWS.\n    Ideally experience in Python/Qt desktop development, or even Anki add-on experience, but it is not required.\n    Ideally experience with product analytics and SQL databases, in order to help make data-driven decisions in the team.\n    You hold yourself and others to a high bar, care deeply about the quality of your work, employ good quality engineering practices, and strive for constant improvement.\n    You thrive in a collaborative environment and like working with a diverse group of people, from medical stakeholders to platform engineers.\n    You enjoy shipping and maintaining great products within an empowered team, using modern integration, deployment and observability tools and practices.\n',
			skillList:
				'react, typescript, python, sql, fastapi, go, docker, kubernetes, eks, aws, pythonqt',
			publicationDate: '2022-12-31'
		},
		{
			id: 34,
			title: 'Fullstack Developer React/Java',
			company: 'VEDA GmbH',
			url: 'https://www.xing.com/jobs/alsdorf-fullstack-developer-react-java-95109999?paging_context=search&search_query%5Bkeywords%5D=sql%20react&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'\nDein Profil:\n\n    Dein ProfilDu hast bereits Berufserfahrungen im Bereich der Fullstack-Entwicklung gesammelt.\n    Du besitzt einen ausgeprägten Teamgeist und entwickelst leidenschaftlich an Softwarelösungen.\n    Du beherrscht die Entwicklung in Java 8 (oder höher) sicher, Spring Framework (SpringBoot), Hibernate, SQL, Maven, React und TypeScript.\n    Du hast idealerweise Erfahrungen mit MaterialUI oder einer anderen Komponentenbibliothek gesammelt.,\n    Du verfügst über sehr gute Deutsch- und gute Englischkenntnisse.\n    Du hast Freude daran, andere Teammitglieder zu befähigen und dein Wissen weiterzugeben. \n\nDich erwartet:\n\n    Ein Produktteam, das Ende-zu-Ende-Verantwortung für in sich geschlossene Fachbereiche des Produkts übernimmt und Frontend sowie Backend in Zusammenarbeit mit UX Design und Product Owner gestaltet.\n    Eine effektive Mischung aus selbstwirksamem Arbeiten und Kooperation im Team.\n    Viel Freiraum und Flexibilität (z.B. bzgl. Zeit und Ort).\n    Eine stetige Weiterbildung und -entwicklung von Fähigkeiten – auch durch interdisziplinäre Aufgaben und Projekte.\n    Der Einsatz moderner Technologien und neuer Tools.\n    Führung auf Augenhöhe und eine innovationsfreundliche Fehlerkultur.\n    Austausch mit und Impulse von anderen Spezialist*innen.\n    Ein familiäres Unternehmensumfeld mit individuellen Entwicklungs- und Veränderungsmöglichkeiten.\n\n',
			skillList:
				'react, java, typescript, springboot, hibernate, sql, maven, mui',
			publicationDate: '2023-01-01'
		},
		{
			id: 35,
			title: 'Software-Entwickler',
			company: 'CIPHRON GmbH',
			url: 'https://www.xing.com/jobs/hannover-software-entwickler-vollzeit-95370904?paging_context=search&search_query%5Bkeywords%5D=sqlite&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'Aufgaben\n\nWir suchen zum frühestmöglichen Zeitpunkt einen Software-Entwickler (m/w/d) in Vollzeit\n\n    Begleitung von Sprints der Enwicklungsteams unserer Kunden mit besonderem Augenmerk auf Sicherheitsrelevante\n    Prozesse (SDLC)\n    Konzeptionierung und Umsetzung von Greenfield-Projekten mit einer agilen Methodik\n    Regelmäßige Betreuung und Wartung einer Bestandssoftware\n\nDie vollständige und detaillierte Benennung anfallender Aufgaben und zugeordneter Verantwortung vermitteln wir gerne in\neinem persönlichen Gespräch.\nQualifikation\n\n    Hohe Lernbereitschaft sowie eine analytische, strukturierte und selbstständige Arbeitsweise\n    Fundierte Kenntnisse im Bereich der sicheren Software-Entwicklung\n    Test-fokussierte Entwicklungsweise\n    Gute Kenntnisse in der Entwicklung mit Go\n    Grundkenntnisse mindestens eines modernen Javascript Frameworks (wünschenswert: VueJS) sowie HTML/CSS\n    Docker-Kenntnisse von Vorteil\n    Erfahrungen mit CI/CD wünschenswert\n    Keine Berührungsängste mit Linux-Servern und deren Konfiguration über Terminaleingaben\n    Sicherer Umgang mit Git, Gitlab\n    Sicherer Umgang mit SQL- und NoSQL-Datenbanken (z.B. MySQL, PostgreSQL, MongoDB, Sqlite)\n    Idealerweise Erfahrungen mit PHP, Zend Framework und LaTeX oder Bereitschaft sich in diese Themen einzuarbeiten\n    (Bestandssoftware)\n',
			skillList:
				'go, react, angular, vue, docker, cicd, linuxadmin, git, gitlab, mysql, postgres, mongodb, sqlite, php, zend, latex',
			publicationDate: '2023-01-02'
		},
		{
			id: 36,
			title: 'Big Data Engineer',
			company: 'AP Sensing',
			url: 'https://www.stepstone.de/stellenangebote--Big-Data-Engineer-m-w-d-Boeblingen-bei-Stuttgart-AP-Sensing-GmbH--8864317-inline.html?rltr=55_5_25_seorl_m_0_0_0_0_1_0',
			description:
				'Deine Verantwortung\n\n    Du arbeitest in einem interdisziplinären Team mit Experten an der Weiterentwicklung und Optimierung unserer Dateninfrastruktur\n    Du organisierst große Datenmengen in einem Data Lake\n    Du entwickelst auf Basis von Python effiziente Datenpipelines und Schnittstellen für das maschinelle Lernen und andere Anwendungen\n    Du ermöglichst Funktionsentwicklern die erfolgreiche und vielfältige Nutzung ihrer Arbeit und gestaltest so die Zukunft der verteilten faseroptischen Sensoren in einer Vielzahl neuer Anwendungen\n\nDein Profil\n\n    Du hast einen Studienabschluss in der Fachrichtung Informatik, Physik, Mathematik oder Ingenieurwissenschaften\n    Idealerweise verfügst du über erste praktische Berufserfahrung im Big Data Umfeld\n    Du kombinierst Programmierkenntnisse in Python mit Erfahrungen im strukturierten Umgang mit großen Datenmengen\n    Erste Erfahrung mit SQL und/oder NoSQL Datenbanken\n    Deine Arbeitsweise ist analytisch, strukturiert und selbständig\n    Du bringst gute Kommunikations- und Präsentationsfähigkeiten in Deutsch und Englisch mit',
			skillList:
				'bigdata, datalake, datapipelines, sql, nosql, python, machinelearning, mint',
			publicationDate: '2023-01-03'
		},
		{
			id: 37,
			title: 'Full Stack Developer CMS',
			company: 'NOZ Digital GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Full-Stack-Developer-CMS-m-w-d-Osnabrueck-NOZ-Digital-GmbH--9071745-inline.html?rltr=5_5_25_seorl_m_0_0_0_0_0_0',
			description:
				'So bringst du dich ein:\n\n    Du arbeitest in einer modernen Entwicklungsumgebung mit einem agilen Team und modernen Technologien inkl. Codereview und Qualitätssicherung\n    Gemeinsam mit dem Team bist du verantwortlich für die Weiterentwicklung des Front- und Backends und den Betrieb unserer unternehmensweiten CMS-Lösung\n    Du arbeitest mit Entwicklern, Product Ownern und Projektmanagern hinsichtlich technischer und fachlicher Fragestellungen zusammen\n    Die Analyse, Bewertung und Optimierung von Anforderungen, Datenbanken und Prozessen gehören ebenfalls zu deinen Tätigkeiten\n    Mit deinem Fokus auf testgetriebene Entwicklungsmethoden gewährleistest du eine nachhaltig entwickelte Codequalität\n\nDas bringst du mit:\n\n    Abgeschlossenes Studium in einem MINT-Studiengang oder eine vergleichbare Ausbildung\n    Breiter Entwicklungs-Stack mit Fokus auf Java oder PHP sowie Javascript Frameworks (bspw. node.js, react…)\n    Gute Kenntnisse im Umgang mit MySQL oder MariaDB und Versionsverwaltungssystemen (z.B. Git)\n    Selbstverständlicher Umgang mit Continuous Integration / Development (CI/CD)\n    Idealerweise Erfahrung im Aufbau / Betrieb von verteilten Architekturen (Microservices), bevorzugt in der Public Cloud (z.B. AWS)\n    Spaß im Umgang mit Menschen, Teamfähigkeit, Kommunikationsstärke und eigenverantwortliches Arbeiten\n    Gute Deutsch- und Englischkenntnisse',
			skillList:
				'java, php, node, react, mysql, mariadb, git, cicd, microservices, aws, mint',
			publicationDate: '2023-01-04'
		},
		{
			id: 38,
			title: 'Software Entwickler',
			company: 'Otto Group Solution Provider GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Software-Entwickler-m-w-div-Kotlin-Java-Kafka-SpringBoot-Typescript-React-Vue-js-AWS-Dresden-Otto-Group-Solution-Provider-OSP-GmbH--8848151-inline.html?rltr=1_1_25_seorl_m_0_0_0_0_0_0',
			description:
				'Das erwartet dich\n\n    Ein offenes und cross-funktionales Team, dem Mehrwert, Code-Qualität, Design und die Schaffung agiler Software-Architektur wichtig ist\n    Kennenlernen von Handels-, Marketing- und Logistikprozessen der Otto Group\n    Gestaltung des gesamten Entwicklungsprozesses mit bspw. Typescript, React, Vue.js im Frontend und SpringBoot, Kotlin, Java, Kafka im Backend\n    Domain Driven Design, testgetriebene Entwicklung, Continuous Integraton und Continuous Delivery (z.B. Docker, Gradle und Jenkins, AWS, Kubernates)\n    Möglichkeiten kontinuierlich neue Technologien auszuprobieren und zu evaluieren\n\nDas bringst du mit\n\n    Du begeisterst dich für die Entwicklung und Entstehung von Konzepten sowie deren technische Umsetzung\n    Du bringst fundierte Kenntnisse und mehrjährige praktische Erfahrung in einer objektorientierten Programmiersprache (Java, Kotlin, Go etc.) und der Entwicklung mit Webtechnologien (TypeScript, Angular, React, Vue.js etc.)\n    Du besitzt idealerweise Know-how im Bereich Continuous Integration, Continuous Delivery und Testautomatisierung\n    Du bist ein Teamplayer, teilst gerne dein Wissen mit anderen und bist offen für neue Herausforderungen\n    Du hast Konversationssichere Deutsch- und Englischkenntnisse\n',
			skillList:
				'react, typescript, vue, angular, springboot, kotlin, java, kafka, domaindrivendesign, testing, cicd, docker, gradle, jenkins, aws, kubernetes, go',
			publicationDate: '2023-01-05'
		},
		{
			id: 39,
			title: 'Backend Entwickler',
			company: 'Enerparc AG',
			url: 'https://www.stepstone.de/stellenangebote--Backend-Entwickler-m-w-d-im-Bereich-Erneuerbarer-Energien-Hamburg-Enerparc-AG--9034549-inline.html?rltr=12_12_25_seorl_m_0_0_0_0_0_0',
			description:
				'Ihr Aufgabenbereich\n\nFür den Unterstützung unser IT-Abteilung suchen wir ab sofort einen motivierten und engagierten Backend Entwickler (m/w/d) für unseren Standort in Hamburg.\n\n    Unterstützung des Entwicklungsteams im Rahmen einer betriebsinternen Softwareentwicklung\n    Zusammenarbeit mit den Mitarbeitern des IT- und Energiehandels\n    Pflege von bestehenden Systemkomponenten\n\nIhr berufliches Know-how\n\n    Abgeschlossenes Studium der Informatik o.ä.\n    Erfahrung mit Javascript/Typescript / Node.js\n    Wünschenswert sind Erfahrungen mit MongoDB und relationalen Datenbanken sowie mit Amazon Web Services\n    Begrüßt werden Berufserfahrung in der Industrie\n    Schnelle Auffassungsgabe, hohe Eigeninitiative und Kreativität\n    Selbstständige Arbeitsweise, ausgeprägte Teamfähigkeit, Zuverlässigkeit, Belastbarkeit, Eigenmotivation\n\n',
			skillList: 'typescript, node, mongodb, aws',
			publicationDate: '2023-01-06'
		},
		{
			id: 40,
			title: 'Full Stack Developer',
			company: 'StayFriends GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Full-Stack-Developer-m-w-d-Berlin-StayFriends-GmbH--9076913-inline.html?rltr=15_15_25_seorl_m_0_0_0_0_1_0',
			description:
				'Deine Aufgaben\n\n    Du konzipierst, implementierst und entwickelst eigenverantwortlich moderne Web-Applikationen in Frontend und Backend\n    Du entwickelst neue Features sowie Testing und Code Reviews\n    Du wartest und hältst unsere Plattform lebensfreunde.de instand\n    Du entwickelst mit Java und Angular\n    Du bist in einem14-tägigen Sprint-Zyklus mit ausführlichem Deployment, damit unsere User Deine Ergebnisse sehen und nutzen können\n\nDas ist unser Technologiestack\n\nJava Spring Boot\n\n    Angular 6+ / JavaScript\n    HTML5 / CSS3 / SASS\n    SQL / MySQL / NoSQL - MongoDB\n    JIRA\n    Bitbucket\n    Jenkins\n    Kubernetes / Fabric8 / Docker\n\nSo bist Du\n\n    Du hast ein erfolgreich abgeschlossenes Studium, eine abgeschlossene Ausbildung im Informatikbereich oder einschlägige Berufserfahrung\n    Du verfügst über fundierte Erfahrungen als JavaScript- / AngularJS Entwickler (m/w)\n    Du hast sehr gute HTML5 und CSS3 Kenntnisse für mehrere Browser\n    Du besitzt gute Kenntnisse der objektorientierten Programmierung mit Java\n    Idealerweise hast Du bereits Erfahrungen in der Frontend-Entwicklung für mobile Endgeräte (Responsive Design)\n    Idealerweise hast Du ebenfalls bereits Kenntnisse im Umgang mit Web Services (REST, Microservice Architectur, CQRS)\n    Du bist offen für agile Arbeitsmethoden',
			skillList:
				'angular, java, sql, mysql, nosql, mongodb, springboot, rest, oop, responsive, sass, jira, bitbucket, jenkins, kubernetes, fabric8, docker,  microservices, cqrs',
			publicationDate: '2023-01-07'
		},
		{
			id: 41,
			title: 'Fullstack Entwickler',
			company: 'Conwiss Consulting GmbH',
			url: 'https://www.xing.com/jobs/berlin-fullstack-entwickler-java-it-support-informatik-95642617?paging_context=search&search_query%5Bkeywords%5D=mongodb&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'Was erwartet dich?\n\n    Du entwickelst im Web-Frontend und JVM Backend\n    Du arbeitest mit den Methoden der agilen Softwareentwicklung wie Test-Driven Development (TDD), Pair-Programming oder Continuous Delivery\n    Du berätst bei der Entwicklung und Umsetzung von komplexen Applikationen\n    Du verantwortest Softwareentwicklung unter Nutzung aktueller Java-, Mobile- und Web-Technologien ​in einer AWS Cloud\n    Du verantwortest den regelmäßigen Dev Austausch, Entwickler Convention, Planning, Estimation usw.\n    Du arbeitest mit einem crossfunktionalen Scrum-Team sowie direkt mit den Kollegen aus UX, QA, Analytics etc. zusammen\n\nWas solltest du mitbringen?\n\n    Du hast ein abgeschlossenes Studium oder erfolgreich absolvierte Ausbildung mit Schwerpunkt Informatik\n    Du bringst Projekterfahrung in der agilen Softwareentwicklung (Scrum) und dem Aufbau komplexerer Webanwendungen mit\n    Du hast Erfahrung im Entwurf und der Erstellung von Web-Systemen mit Java-Technologien und gängigen WebTechnologien (JavaScript, HTML)\n    Du hast fundierte Erfahrungen in der Java Softwareentwicklung und Kenntnisse mit Cloud-Umgebungen (idealerweise AWS)\n    Du bringst Erfahrungen rund um dokumentenorientierte Datenbanken (z.B. MongoDB, DynamoDB) mit\n    Du hast Kenntnisse im Responsive Design, Kotlin, TypeScript, Docker, AWS, GitHub Actions, funktionale Programmierung\n    Du bringst projektbezogene Reisebereitschaft innerhalb Deutschlands mit\n    Du verfügst über gute Deutschkenntnisse\n',
			skillList:
				'java, typescript, aws, mongodb, dynamodb, tdd, kotlin, docker, githubactions, functionalprogramming, cicd, ux',
			publicationDate: '2023-01-08'
		},
		{
			id: 42,
			title: 'Webentwickler',
			company: 'xSuite Group GmbH',
			url: 'https://www.xing.com/jobs/muenchen-webentwickler-it-customer-support-javascript-html-95647827?paging_context=search&search_query%5Bkeywords%5D=mongodb&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'Was erwartet dich?\n\n    Du verantwortest die (Weiter-)Entwicklung unseres breiten Produkt-Portfolios und konzipierst und realisierst hierfür neue Features im Rahmen eines Scrum-orientierten Entwicklungsprozesses (inkl. Sprints, Reviews, Retrospective, Continuous Deployment, Continuous Integration)\n    Du arbeitest mit dem "Core"-Entwicklerteam zusammen und darüber hinaus stehst du im engen Austausch mit dem Produktmanagement\n    Du führst zur Qualitätssicherung Funktions-, Integrations- sowie Modultests durch und bist für die Erstellung von Dokumentationen verantwortlich\n\nWas solltest du mitbringen?\n\n    Du verfügst über mehrjährige Erfahrung als JavaScript Entwickler (m/w/d)\n    Du besitzt hervorragende Kenntnisse in HTML und CSS und kennst dich mit REST, MVC oder Single-Page Applications aus\n    Du gehst sicher mit Frameworks wie Angular.js, React, Vue.js, jQuery oder OpenUI5 um\n    Du besitzt bestenfalls Open Source Kenntnisse (z.B. MongoDB, PostgreSQL, Kubernetes und Docker) oder Kenntnisse in Node.js\n',
			skillList:
				'react, node, rest, mongodb, postgres, angular, vue, mvc, jquery, openui5, docker, kubernetes, cicd',
			publicationDate: '2023-01-09'
		},
		{
			id: 43,
			title: 'Softwareentwickler Go / Golang',
			company: 'ESE Engineering und Software-Entwicklung GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Softwareentwickler-Go-Golang-m-w-d-Braunschweig-und-Hannover-ESE-Engineering-und-Software-Entwicklung-GmbH--6029808-inline.html?rltr=3_3_25_seorl_m_0_0_0_0_1_0',
			description:
				'Was Du bei uns machst\n\nStarte bei uns als Go-Entwickler und wirke bei der Digitalisierung von Vertriebsplattformen von der Entscheidungsfindung über die Planung bis hin zu Programmierung und Test mit.\n\n    Programmierung und Test von Backend Systemen\n    Eigenverantwortliche Umsetzung funktionaler Anforderungen\n    Selbstständige Weiterentwicklung und Optimierung bestehender Systeme\n    Aufbau und Anbindung neuer Systeme an die bestehende IT-Landschaft\n    Analyse und Behebung von Software-Fehlern\n    Unterstützung bei der Entscheidungsfindung und Entwicklungsprozessplanung\n\nWann Du zu uns passt\n\n    Abgeschlossenes Informatikstudium oder eine vergleichbare abgeschlossene Ausbildung\n    Erste Berufserfahrung in der Entwicklung mit Go / Golang sowie in der Schnittstellenprogrammierung\n    Erfahren in der Arbeit mit gängigen Datenbanken (z.B. MongoDB, CouchDB) und MySQL\n    Kenntnisse in der Programmiersprache C#/.Net wünschenswert\n    Erste Erfahrungen in der Frontend Entwicklung und Frameworks wie z.B. Spring, Angular, React von Vorteil\n    Hohe Team- und Kommunikationsfähigkeit sowie Freude am agilen Arbeiten\n    Deutsch fließend und Englisch sehr gut in Wort und Schrift\n\n',
			skillList:
				'go, mongodb, couchdb, mysql, react, angular, csharp, dotnet, springboot, testing',
			publicationDate: '2023-01-10'
		},
		{
			id: 44,
			title: 'Werkstudent Software Development',
			company: 'abl solutions GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Werkstudent-Software-Development-m-w-d-Nuernberg-abl-solutions-GmbH--9093672-inline.html?rltr=17_17_25_seorl_m_0_0_0_0_1_0',
			description:
				'Deine Aufgaben\n\nUnsere "Success-Story made in Nürnberg" geht weiter! Deshalb suchen wir Kolleginnen und Kollegen, die sich in einer zukunftssicheren Branche persönlich sowie beruflich gemeinsam mit uns weiterentwickeln möchten. Du hast Lust, mit uns neue Verbindungen zu schaffen, die die Welt vernetzen? Dann suchen wir dich als Verstärkung unseres Teams in Nürnberg als Werkstudent (m/w/d) Software Development.\n\nDas wartet auf dich:\n\nDu unterstützt unsere Abteilung Solutions & Marketing sowohl im operativen als auch im administrativen Tagesgeschäft.\n\n    Du arbeitest als vollwertiger Teil eines erfahrenen Teams im Bereich Software Development\n    Du bist an der Entwicklung herausragender Lösungen für unsere Kunden beteiligt\n    Du arbeitest mit den Programmiersprachen node.js, React, React Native, Python, Java\n    Du erhältst einen Einblick in verschiedene Technologien wie Postgres, MongoDB, Google Cloud, Kafka, etc.\n    Du kannst Kenntnisse in Software Engineering Methoden mit DDD, TDD, BDD, Microservices, DevOps und System Administration, etc. aufbauen\n\nDein Profil\n\nDas bringst du mit:\n\n    Du studierst Informatik, Wirtschaftsinformatik oder ein ähnliches relevantes Fachgebiet (Bachelor oder Master)\n    Du stehst während der Vorlesungszeit ab sofort für 20 Stunden/ Woche für uns zur Verfügung\n    Wenn du bereits erste Erfahrung in der IT/im Software Development hast, ist das ein Pluspunkt\n    Du bringst Organisationsgeschick, Kommunikationsstärke sowie technisches Verständnis mit\n    Du bist sicher im Umgang mit MS-Office-Anwendungen\n    Du verfügst über gute Englischkenntnisse und sehr gute Deutschkenntnisse in Wort und Schrift\n    Ob selbstständig oder gemeinsam im Team: Du arbeitest organisiert, sorgfältig und verantwortungsbewusst\n    Integrität und Diskretion im Umgang mit sensiblen Daten runden dein Profil ab\n',
			skillList:
				'node, react, reactnative, python, java, postgres, mongodb, googlecloud, kafka, ddd, tdd, bdd, microservices, devops, linuxadmin',
			publicationDate: '2023-01-11'
		},
		{
			id: 45,
			title: 'IT-Entwickler',
			company: 'Stadtwerke Herne AG',
			url: 'https://www.stepstone.de/stellenangebote--Developer-IT-Entwickler-m-w-d-Herne-Stadtwerke-Herne-AG--8987505-inline.html?rltr=23_23_25_seorl_m_0_0_0_0_0_0',
			description:
				'Deine Aufgaben\n\n    Weiterentwicklung unserer Open-Source-Datenplattform auf FIWARE Basis\n    Konzeption und Entwicklung von neuen Anwendungen\n    Gemeinsame Entwicklung von Forschungsprojekten oder Proof of concepts in internationalen Teams und mit Hochschulen\n    Test und Dokumentation unserer Anwendungen\n    Pflege und Optimierung von bestehenden Anwendungen\n\nUnsere Anforderungen an Dich\n\n    Abgeschlossene fachbezogene 3-jährige Ausbildung und Zusatzausbildung oder abgeschlossenes fachbezogenes Hochschulstudium\n    Gute Kenntnisse in der Anwendungsentwicklung mit modernen Programmiersprachen wie z.B. Python\n    Gute Kenntnisse im Bereich Webentwicklung und IoT, z.B. Javascript oder MQTT\n    Gute Kenntnisse im Umgang mit relationalen oder NoSQL-Datenbanken, z.B. MySQL oder MongoDB\n    Kenntnisse im Bereich Web-Frameworks und Schnittstellentechnologien, wie z.B. REST\n    Grundkenntnisse in den Bereichen Linux, Kubernetes und Docker\n    Sichere Kommunikation in Englisch\n    Team- und Kritikfähigkeit\n    Hands-on-Mentalität\n\n',
			skillList:
				'python, iot, mqtt, mysql, mongodb, react, angular, vue, rest, linuxadmin, testing, docker, kubernetes',
			publicationDate: '2023-01-12'
		},
		{
			id: 46,
			title: 'Datenbank Engineer',
			company: 'BWI GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Datenbank-Engineer-Open-Source-DB-MongoDB-m-w-d-bundesweit-Muenchen-Erfurt-Frankfurt-Hamburg-Nuernberg-Ulm-Wilhelmshaven-Berlin-Bonn-BWI-GmbH--9049239-inline.html?rltr=2_2_25_seorl_m_0_0_0_0_1_0',
			description:
				'Ihre Aufgaben:\n\n    Planung, Aufbau und Betrieb (Administration) der Datenbanken entsprechend den betrieblichen Anforderungen, IT Sicherheitsvorgaben und Vorgaben aus den Sicherheitsprozessen im Linux Umfeld\n\n    Pflege von Usern und Berechtigungen, Zugriffssteuerung\n\n    Einrichten von Triggern / Jobs\n\n    Backup / Restore von Datenbanken\n\n    Konfiguration der Datenbanken\n\n    Sicherstellung von Monitoring und Reporting Strukturen (CheckMK)\n\nIhr Profil:\n\n    Abgeschlossenes Studium im Bereich IT oder gleichwertige Ausbildung mit entsprechenden Fachkenntnissen und mindestens 5 Jahren Berufserfahrung inkl. Projekterfahrung\n\n    Mehrjährige praktische Erfahrung in der Administration von Open Source Datenbanken sowie Erfahrung in der fachlichen Führung\n\n    Kentnisse in Mongo 4.0 und höher, sowie im Betrieb von Hochverfügbarkeitslösungen (Mongo Replikasets)\n\n    Zertifizierungen im Bereich der Open Source Datenbanken oder vergleichbares Know-how\n    Ausgeprägte Kenntnisse der IT-Service-Support-Prozesse (Schwerpunkt Incident-, Problem-, Change Management)\n\n    Betriebssystem-Kenntnisse unter LINUX\n',
			skillList: 'mongodb, linuxadmin',
			publicationDate: '2023-01-13'
		},
		{
			id: 47,
			title: 'Web Frontend Softwareentwickler',
			company: 'Hella Gutmann Solutions GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Web-Frontend-Softwareentwickler-Frontend-Developer-m-w-d-Javascript-React-Redux-Ihringen-bei-Freiburg-im-Breisgau-Berlin-Hella-Gutmann-Solutions-GmbH--9060608-inline.html?rltr=3_3_25_seorl_m_0_0_0_0_0_0',
			description:
				'ZEIGE, WAS IN DIR STECKT, UND GESTALTE MIT UNS GEMEINSAM DIE ZUKUNFT VON HELLA GUTMANN\n\n    Du bist Teil eines großen interdisziplinären Teams, das die Umsetzung unserer Frontend-Applikationen auf Basis von React und Redux verantwortet,\n    Du bist mitverantwortlich für den Ausbau unseres eigenen UI-Toolkits,\n    Du unterstützt unsere Kunden, die bestmögliche User-Experience zu erleben, auch auf mobilen Endgeräten,\n    Du stellst die Qualität und die Funktionalität der Applikation über Unit- und Integrationstests sicher.\n\nWARUM DU ZU UNS PASST\n\n    Du hast eine abgeschlossene Ausbildung als Fachinformatiker*in für Anwendungsentwicklung, ein abgeschlossenes Studium der Informatik oder eine vergleichbare Ausbildung bzw. Du bist Quereinsteiger*in mit nachweisbarer Expertise,\n    Du bringst idealerweise mehrjährige Berufserfahrung in der Webentwicklung mit, bestenfalls mit dem Schwerpunkt Frontend-Entwicklung,\n    Du verfügst über sehr gute Fachkenntnisse in JavaScript (ECMAScript 2015) sowie den Frameworks React und Redux,\n    Du hast fundierte Fachkenntnisse in den gängigen Webstandards (CSS3 und HTML5) und idealerweise auch das Know-how für die Umsetzung mobiler Anwendungen und SPAs,\n    Unit- und Integrationstests sind keine Fremdwörter für Dich,\n    Du hast den Begriff „Funktionale Programmierung“ schon einmal gehört,\n    Du bringst sehr gute Deutsch- und gute Englischkenntnisse mit,\n    Fachkenntnisse bei WebGL und der Fehler- und Performance-Analyse runden Dein Profil ab.\n',
			skillList: 'react, redux, testing, functionalprogramming',
			publicationDate: '2023-01-14'
		},
		{
			id: 48,
			title: 'Junior Entwickler',
			company: 'AUEL EDV-Beratung GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Junior-Entwickler-Java-React-AngularJS-m-w-d-vor-Ort-hybrid-oder-remote-Braunschweig-AUEL-EDV-Beratung-GmbH--4006293-inline.html?rltr=9_9_25_seorl_m_0_0_0_0_1_0',
			description:
				'Deine Aufgaben:\n\n    Arbeit in agilen Teams mit individuellen fachlichen Aufgabenstellungen aus den verschiedenen Branchen\n    Neu- und Weiterentwicklung mehrschichtiger Anwendungen auf der Basis von AngularJS / React / Java / Datenbanken / Blockchain\n    Mitarbeit bei der Konzeption und dem Entwurf individueller Softwarelösungen\n    Durchführen interner Modultests\n\nDein Profil:\n\n    Kenntnisse in einer Programmiersprache\n    Optionale Kenntnisse in React, Javascript, AngularJS, Java\n    Optional Kenntnisse in relationalen Datenbanken\n    Ausgeprägte Kundenorientierung und hohes Verantwortungsbewusstsein\n    Gute Deutschkenntnisse\n\n',
			skillList: 'react, angular, java, sql, nosql, blockchain',
			publicationDate: '2023-01-15'
		},
		{
			id: 49,
			title: 'Full Stack Developer',
			company: 'GreenPocket GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Full-Stack-JavaScript-TypeScript-Developer-in-Koeln-GreenPocket-GmbH--8783143-inline.html?rltr=14_14_25_seorl_m_0_0_0_0_1_0',
			description:
				'DEINE AUFGABEN\n\n    Gemeinsam mit dem Entwickler:innenteam, den Product Ownern und den UX/UI-Designern treibst Du die Weiterentwicklung unserer SaaS-Lösungen (insbesondere Microservices) an\n    Du designst, testest, wartest und verbesserst die Software fortlaufend sowohl selbstständig als auch in Deinem Team\n    Du stehst dem Produktmanagement bei technischen Fragen beratend zur Seite und besprichst Dich mit Ihnen und dem Fachbereich zu fachlichen und technischen Anforderungen und deren Umsetzung\n    Im DevOps Bereich bringst Du Dich zunehmend mitverantwortlich in Architektur, Programmierung und Tests ein\n    Durch Pair Programming, Code Reviews und Prototyping entwickelst Du nicht nur unsere Produkte, sondern auch Dich kontinuierlich weiter\n    Du tauschst Dich regelmäßig im Rahmen von „DevComs“ oder unserem Architecture Board mit unseren agilen und interdisziplinären Teams aus\n    Du schaust über den eigenen Tellerrand hinaus, verwirklichst Deine Ideen in monatlichen GreenDays und hast die Möglichkeit, diese Ideen in die Produktentwicklung einzubringen\n\nIhr Profil\n\n    Du hast Dein Studium im IT-Bereich erfolgreich abgeschlossen oder eine vergleichbare Ausbildung, mit der Du uns überzeugen kannst\n    Darüber hinaus bringst Du bereits erste Erfahrung als Software Developer:in mit, idealerweise im SaaS-Umfeld\n    Du hast erste Praxiserfahrungen mit Microservices und Cloudinfrastrukturen\n    Du glänzt mit einem umfangreichen JavaScript-/TypeScript-Wissen, idealerweise im React-Kontext. Alternativ punktest Du mit einem sehr guten Java- oder Kotlin-Know-how und hast Erfahrung mit SpringBoot.\n    Du kennst Dich im Umgang und in der Nutzung von Standardtools insb. im agilen Umfeld wie bspw. JIRA und Confluence zur Steuerung und Dokumentation der Entwicklung aus\n    Als ein kreativer, analytisch denkender Kopf, hast Du Spaß an neuen Technologien und bringst ein gutes Qualitätsbewusstsein mit\n    Du lebst die Startup-Mentalität, bist motiviert und packst gerne Dinge direkt an\n    Du verfügst über gute Deutsch- sowie sehr gute Englischkenntnisse\n\n',
			skillList:
				'saas, microservices, cloud, typescript, react, java, kotlin, springboot, jira, confluence',
			publicationDate: '2023-01-16'
		},
		{
			id: 50,
			title: 'Praktikant Webentwicklung',
			company: 'TROX GmbH',
			url: 'https://www.stepstone.de/stellenangebote--Werkstudent-Praktikant-m-w-d-Webentwicklung-mit-React-Neukirchen-Vluyn-Berlin-TROX-GmbH--9115986-inline.html?rltr=2_2_25_seorl_m_0_0_0_0_0_0',
			description:
				'Diese Aufgaben erwarten Sie:\n\n    Entwicklung von webbasierten Konfigurations- und Steuerungsoberflächen für unsere Produkte\n    Frontend-Entwicklung mit React und TypeScript\n    Entwicklung automatisierter Frontend-Tests\n    Arbeit in einem Scrum-Team unter Verwendung moderner Softwaretools und Programmbibliotheken\n\nDas bringen Sie mit:\n\n    Aktives Studium der (Medien-)Informatik oder vergleichbar (aktuell immatrikuliert und das Studium noch nicht abgeschlossen)\n    Erfahrung im Umgang mit React oder vergleichbaren Webframeworks, JavaScript/TypeScript, CSS\n    Erfahrungen mit GraphQL und Apollo Client von Vorteil\n    Sehr gute bis gute bisherige Studienleistung\n    Strukturierte und selbstständige Arbeitsweise sowie eine schnelle Auffassungsgabe\n    Ausgeprägte Teamfähigkeit und gute Sprachkenntnisse in Deutsch und Englisch\n',
			skillList: 'react, typescript, testing, graphql, apollo',
			publicationDate: '2023-01-17'
		},
		{
			id: 51,
			title: 'Fullstack Web Entwickler',
			company: 'CFMmedia GmbH',
			url: 'https://www.xing.com/jobs/seligenstadt-fullstack-web-entwickler-node-js-react-mongodb-express-96175268?paging_context=search&search_query%5Bkeywords%5D=mongodb&search_query%5Blimit%5D=20&search_query%5Boffset%5D=0&ijt=jb_18',
			description:
				'Was erwartet dich?\n\n    Du verantwortest die objektorientierte Programmierung von Webanwendungen\n    Du kümmerst dich um die Betreuung und Weiterentwicklungen von bestehenden Projekten\n    Du trägst die Verantwortung von Datenbankmodellierungen mit MongoDB\n    Du bindest REST Schnittstellen an und entwickelst jene weiter\n\nWas solltest du mitbringen?\n\n    Du konntest bereits Erfahrung mit objektorientierter Programmierung sammeln\n    Du hast Erfahrungen mit der Erstellung und Integration von RESTful APIs\n    Du verfügst über gute Kenntnisse in Node.js, MongoDB, Express, React und State Management (Redux oder Mobx)\n    Du hast optional Erfahrung mit Service Worker APIs, Nest.js, Docker, Kubernetes und TypeScript',
			skillList:
				'node, react, typescript, mongodb, express, rest, redux, mobx, nestjs, docker, kubernetes',
			publicationDate: '2023-01-18'
		},
		{
			id: 52,
			title: 'React.js-Entwickler',
			company: 'comspace',
			url: 'https://www.get-in-it.de/jobsuche/p210633',
			description:
				'Deine Aufgaben\n\n    Du entwickelst komplexe und performante React.js-Frontends für unsere vorranging Next.js-basierenden Web-Applikationen.\n    Neue Projekte gestaltest du von Beginn an mit und berätst technologisch das Team und unsere Kunden.\n    Außerhalb von Projektaufgaben nutzt du deine Zeit um fachlich up-to-date zu bleiben. Dabei unterstützen wir dich selbstverständlich mit den notwendigen Schulungen.\n    Dein Wissen über Frontend-Development, Tools und Best-Practices teilst du mit deinem Team und engagierst Dich im Rahmen von internen Tech-Sessions, CoPs, Open Spaces und Pair-Programming.\n\nDeine Stärken\n\n    Du verfügst über mehrjährige praktische Erfahrung in der professionellen Softwareentwicklung mit React.js, JavaScript/TypeScript, REST und GrapQL.\n    Du weißt, wie man Business-Logiken in Node.js umsetzt und hattest idealerweise schon Berührungspunkte mit einem headless CMS wie z.B. Contentful oder Storyblok.\n    Du hast den notwendigen technologischen Blick über den Tellerrand, um dich souverän in einem crossfunktionalen Fullstack-Environment zu orientieren.',
			skillList:
				'react, nextjs, typescript, rest, graphql, node, headlesscms, contentful, storyblok',
			publicationDate: '2023-01-19'
		}
	];
};
