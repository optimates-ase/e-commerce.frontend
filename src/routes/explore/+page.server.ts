export const load = () => {
	console.log(
		'load functing is called! This is only visible on node.js server, and not in FE console'
	);
	return [
		{
			id: 1,
			name: 'Activity 1',
			description: 'This is the discription',
			price: 30.5,
			rating: '5/5',
			minimum: 8,
			images: [
				'bg/Candidate1.jpg',
				'bg/Candidate2.jpg',
				'bg/Candidate3.jpg',
				'bg/Candidate4.jpg',
				'bg/Candidate5.jpg'
			]
		},
		{
			id: 2,
			name: 'Activity 2',
			description: 'This is the discription',
			price: 30.5,
			rating: '5/5',
			minimum: 8,
			images: [
				'bg/Candidate1.jpg',
				'bg/Candidate2.jpg',
				'bg/Candidate3.jpg',
				'bg/Candidate4.jpg',
				'bg/Candidate5.jpg'
			]
		}
	];
};
