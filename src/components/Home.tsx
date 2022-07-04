import React, { useState } from 'react';
import Badge from './Atoms/Badge/Badge';
import Tabs from './Atoms/Tabs/Tabs';

function Home() {
	const [active, setActive] = useState(0);
	console.log('Home:', active);

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
			<div>
				<button type='button' onClick={() => setActive(active + 1)}>
					+
				</button>
				<button type='button' onClick={() => setActive(active - 1)}>
					-
				</button>
			</div>
			<div>
				<Tabs
					tabs={[
						{
							header: 'Tab 1',
							content: (
								<div>
									Content of <strong>First</strong> Tab
								</div>
							),
						},
						{
							header: 'Atom Tabs is great',
							content: (
								<div>
									Content of Second Tab <q>Tabs Atom</q>
								</div>
							),
						},
						{
							header: 'Tab 3 with list items',
							content: (
								<div>
									Content of Third Tab
									<ul>
										<li>item 1</li>
										<li>Item 2</li>
									</ul>
								</div>
							),
						},
					]}
					active={active}
				/>
			</div>
		</div>
	);
}

export default Home;
