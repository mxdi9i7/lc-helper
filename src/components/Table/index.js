import React from 'react';
import './index.scss';

export default function Table({ data }) {
	return (
		<div className='table-container shadow-sm rounded'>
			<div className='header'>
				<div className='cell'>ID</div>
				<div className='cell'>难度</div>
				<div className='cell'>秒杀</div>
				<div className='cell'>题型</div>
				<div className='cell'>备注</div>
			</div>
			<div className='body'>
				{data.map((v) => (
					<div key={v.question_id} className='cell-row'>
						<div className='cell'>
							<a href={v.link} target='_blank' rel='noopener noreferrer'>
								{v.question_id}
							</a>
						</div>
						<div className='cell'>{v.difficulty}</div>
						<div className='cell'>{v.instaKill ? 'Yes' : 'No'}</div>
						<div className='cell'>{v.type}</div>
						<div className='cell'>{v.notes}</div>
					</div>
				))}
			</div>
		</div>
	);
}
