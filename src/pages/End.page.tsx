import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../context/QuestionsContext';

const EndPage: FC = () => {
	const { questions, resetQuestions } = useQuestions();
	const navigate = useNavigate();

	const handleRestart = () => {
		resetQuestions();
		navigate('/questions');
	};

	const moveToHistoryPage = () => {
		resetQuestions();
		navigate('/history');
	};

	return (
		<div>
			<h1>EndPage</h1>
			<h2>Your Responses</h2>
			<ul>
				{questions.map((question, index) => (
					<li key={index}>
						<p>
							<strong>Question {question.id}:</strong> {question.question}
						</p>
						<p>
							<strong>Answer:</strong> {question.answer || 'No answer provided'}
						</p>
					</li>
				))}
			</ul>
			<button onClick={handleRestart}>Restart Again</button>
			<button onClick={moveToHistoryPage}>Show History</button>
		</div>
	);
};

export default EndPage;
