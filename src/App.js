import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Service from './services';
import './App.css';

function App() {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await Service.fetchAllQuestions();
			setQuestions(data);
		};
		fetchData();
	}, []);
	return (
		<div className='App'>
			<Table data={questions} />
		</div>
	);
}

export default App;
