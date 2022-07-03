import React from 'react';
import Badge from './Atoms/Badge';
import Breadcrumb from './Atoms/Breadcrumb';
import Tabs from './Atoms/Tabs/Tabs';

function Home() {
	return (
		<div style={{ margin: '20px' }}>
			
			<Badge count={34} status='processing' size='s'>
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
			<Tabs
				tabs={[
					{ header: 'Tab 1', content: <div>Content of First Tab</div> },
					{ header: 'Tab 2', content: <div>Content of Second Tab</div> },
					{ header: 'Tab 3', content: <div>Content of Third Tab</div> },
				]}
			/>
		</div>
	);
}

export default Home;
