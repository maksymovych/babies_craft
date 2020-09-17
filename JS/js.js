


function getRobotSchema(robot) {
	// write code here
	debugger;
	let entries = [];

	for (const key in robot) {
		entries = Object.entries(robot);
	}

	for (let i = 0; i < entries.length; i++) {
		for (let j = 0; j < entries[i].length; j++) {
			entries[i][1] = typeof entries[i][1];
		}
	}

	return entries;
}
const robot = {
	version: 16,
	name: 'Cleaner 3000',
	coords: [345, 12],
};
console.log(robot);