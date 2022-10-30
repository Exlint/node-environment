module.exports = {
	'**/*.ts': () => 'tsc --noEmit',
	'**/*.{json,yaml}': 'prettier --write',
};
