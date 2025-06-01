export const buildDepartmentTree = (departments: any[]): any[] => {
	const map: { [key: string]: any } = {};
	const tree: any[] = [];

	// Create a map of departments by _id
	departments.forEach(dept => {
		map[dept._id] = { ...dept, children: [] };
	});

	// Build the tree
	departments.forEach(dept => {
		if (dept.parentDepartment) {
			const parentId = dept.parentDepartment._id;
			map[parentId].children!.push(map[dept._id]);
		} else {
			// Root node (Board of Directors)
			tree.push(map[dept._id]);
		}
	});

	return tree;
};
