import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
	return (
		<div>
			<h1>Welcome to the Questionnaire</h1>
			<Link to='/questions'>Start</Link>
		</div>
	);
};

export default WelcomePage;
