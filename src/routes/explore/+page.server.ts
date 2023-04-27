// need to make it infinite, not entirely sure how
export const load = async () => {
	const tours = await fetch('http://localhost:8000/tours/randomize/?page=1');
	//return tours.json();
	return data;
};

//template of the data received
const data = {
	tours: [
		{
			id: 1,
			name: 'Activity 1',
			description: 'This is the discription',
			price: 30.5,
			rating: 5,
			no_of_ratings: 5,
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
			no_of_ratings: 5,
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
