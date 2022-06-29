import React from 'react';
import Badge from './Atoms/Badge';

function Home() {
	return (
		<div style={{ margin: '20px' }}>
			<Badge count={34} status='processing'>
				<h2
					style={{
						margin: '0',
						border: '1px solid black',
						padding: '5px 20px',
						borderRadius: '5px',
						display: 'inline-block',
					}}>
					Tasks
				</h2>
			</Badge>
		</div>
	);
}

export default Home;
