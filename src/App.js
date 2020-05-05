import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import Service from './services';
import './App.css';

function App() {
	const [questions, setQuestions] = useState([]);
	const [data, setData] = useState([]);

	const handleFilter = ({ key, value }) => {
		let nextQuestions = [...questions];
		if (value !== 'all') {
			nextQuestions = questions.filter((v) => v[key] === value);
		}
		setData(nextQuestions);
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await Service.fetchAllQuestions();
			setQuestions(data);
			setData(data);
		};
		fetchData();
	}, []);
	return (
		<div className='App'>
			<FilterForm handleFilter={handleFilter} />
			<Table data={data} />
		</div>
	);
}

export default App;
