import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../context/QuestionsContext';

// Styles for the table and header
const styles = {
	header: {
		textAlign: 'center' as const,
		marginTop: '20px',
		marginBottom: '20px',
	},
	table: {
		width: '100%',
		borderCollapse: 'collapse' as const,
		marginTop: '10px',
		marginBottom: '20px',
	},
	th: {
		background: '#f4f4f4',
		color: '#333',
		fontWeight: 'bold',
		padding: '8px',
		border: '1px solid #ccc',
	},
	td: {
		padding: '8px',
		textAlign: 'center' as const,
		border: '1px solid #ccc',
	},
};

const HistoryPage: React.FC = () => {
	const { previousAttempts } = useQuestions();
	const navigate = useNavigate();

	const handleRestart = () => {
		navigate('/questions');
	};

	return (
		<>
			<div style={{ padding: '0px 50px' }}>
				<h1 style={styles.header}>History of Your Responses</h1>
				{previousAttempts.length === 0 ? (
					<p>No history available.</p>
				) : (
					previousAttempts.map((attempt, attemptIndex) => (
						<div key={attemptIndex}>
							<h2>Attempt {attemptIndex + 1}</h2>
							<table style={styles.table}>
								<thead>
									<tr>
										<th style={styles.th}>Question Number</th>
										<th style={styles.th}>Question</th>
										<th style={styles.th}>Answer</th>
									</tr>
								</thead>
								<tbody>
									{attempt.map((entry, index) => (
										<tr key={index}>
											<td style={styles.td}>{index + 1}</td>
											<td style={styles.td}>{entry.question}</td>
											<td style={styles.td}>{entry.answer || 'No answer provided'}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					))
				)}
				<button onClick={handleRestart}>Restart Again</button>
			</div>
		</>
	);
};

export default HistoryPage;
