import { auth, db } from './config';

const fetchAllQuestions = () => {
	return db
		.collection('questions')
		.get()
		.then((querySnapshot) => {
			const data = [];
			querySnapshot.forEach((doc) => data.push(doc.data()));
			return data;
		});
};

const Service = {
	fetchAllQuestions,
};

export default Service;
