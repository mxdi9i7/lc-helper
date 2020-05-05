import React, { useState } from 'react';
import classnames from 'classnames';
import './index.scss';

const filters = [
	{
		title: '难度',
		key: 'difficulty',
		options: [
			{
				title: '全部难度',
				key: 'all',
			},
			{
				title: 'Easy',
				key: 'easy',
			},
			{
				title: 'Medium',
				key: 'medium',
			},
			{
				title: 'Hard',
				key: 'hard',
			},
		],
	},
	{
		title: '秒杀',
		key: 'instaKill',
		options: [
			{
				title: '全部',
				key: 'all',
			},
			{
				title: '是',
				key: 'yes',
			},
			{
				title: '否',
				key: 'no',
			},
		],
	},
	{
		title: '题型',
		key: 'type',
		options: [
			{
				title: '全部题型',
				key: 'all',
			},
			{
				title: 'Array',
				key: 'array',
			},
			{
				title: 'Linked List',
				key: 'linked-list',
			},
			{
				title: 'Tree',
				key: 'tree',
			},
		],
	},
];

export default function FilterForm({ handleFilter }) {
	const [isDropdownActive, setDropdownActive] = useState({
		difficulty: false,
		instaKill: false,
		type: false,
	});
	const [currentValues, setCurrentValues] = useState({
		difficulty: '所有难度',
		instaKill: '所有结果',
		type: '所有题型',
	});

	return (
		<div className='filter-container shadow-sm'>
			{filters.map((filter) => (
				<div
					className='filter-dropdown'
					onMouseOver={() =>
						setDropdownActive({ ...isDropdownActive, [filter.key]: true })
					}
					onMouseOut={() =>
						setDropdownActive({ ...isDropdownActive, [filter.key]: false })
					}
				>
					<div className='title'>
						<span>{currentValues[filter.key]}</span>
						<i
							className={classnames('fas fa-caret-up', {
								active: !isDropdownActive,
							})}
						></i>
					</div>
					<div
						className={classnames('dropdown shadow-sm', {
							active: isDropdownActive[filter.key],
						})}
					>
						{filter.options.map((v) => (
							<div
								key={v.key}
								className='option'
								onClick={() => {
									const nextCurrentValues = { ...currentValues };
									nextCurrentValues[filter.key] = v.title;
									setCurrentValues(nextCurrentValues);
									handleFilter({ key: 'difficulty', value: v.key });
									setDropdownActive(false);
								}}
							>
								{v.title}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
