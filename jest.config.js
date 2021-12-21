module.exports = {
	verbose: true,
	clearMocks: true,
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.jsx$': 'babel-jest',
	},
	transformIgnorePatterns: [
		// '/node_modules/(?!@worklist-2/core|@worklist-2/i18n|@worklist-2/ui|@worklist-2/worklist|rs-mui-datatables)',
		//'/node_modules/(?!rs-mui-datatables)',
	],
	testMatch: ['<rootDir>/src/**/*.test.js'],
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleFileExtensions: ['js', 'jsx'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/src/__mocks__/fileMock.js',
		'\\.(css|less)$': 'identity-obj-proxy',
	},
	reporters: ['default'],
	collectCoverage: false,
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx}',
		// Not
		'!<rootDir>/src/**/*.test.js',
		'!**/node_modules/**',
		'!**/__tests__/**',
		'!<rootDir>/dist/**',
	],
	testEnvironment: 'node',
};
