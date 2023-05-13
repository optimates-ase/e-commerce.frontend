// need to make it infinite, not entirely sure how
export const load = async () => {
	// TODO: use environment variable instead of hardcode
	const data = await fetch('http://localhost:8000/tours/randomize/?page=1');
	// handle no data availble.
	return data.json();
};

//template of the data received
const data1 = {
	tours: [
		{
			id: 1,
			name: 'Activity 1',
			description: 'This is the discription',
			price: 30.5,
			rating: 5,
			num_of_ratings: 5,
			minimum: 8,
			currency: 'USD',
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
			name: 'Activity 1',
			description: 'This is the discription',
			price: 30.5,
			rating: 5,
			num_of_ratings: 5,
			minimum: 8,
			currency: 'USD',
			images: [
				'bg/Candidate1.jpg',
				'bg/Candidate2.jpg',
				'bg/Candidate3.jpg',
				'bg/Candidate4.jpg',
				'bg/Candidate5.jpg'
			]
		}
	]
};
