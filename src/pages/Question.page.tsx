import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuestions } from '../context/QuestionsContext';

const QuestionPage: FC = () => {
	const { questions, setQuestions, answerHistory, setAnswerHistory } = useQuestions();
	const [currentQuestionNo, setCurrentQuestionNo] = useState<number>(1);
	const [currentAnswer, setCurrentAnswer] = useState<string>('');
	const navigate = useNavigate();

	const activeQuestion = questions.find(q => q.id === currentQuestionNo);

	// Update the current answer when the question changes
	useEffect(() => {
		if (activeQuestion) {
			setCurrentAnswer(activeQuestion.answer || '');
		}
	}, [currentQuestionNo, activeQuestion]);

	const clickEventHandler = (optionSelected: string) => {
		setCurrentAnswer(optionSelected);
	};

	const changeEventHanlder = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentAnswer(event.target.value);
	};

	const handleNextButtonClick = () => {
		if (!activeQuestion) return;

		// Update the answer of the active question
		const updatedQuestions = questions.map(q => (q.id === activeQuestion.id ? { ...q, answer: currentAnswer } : q));
		setQuestions(updatedQuestions);

		// Add the current question and answer to the history
		setAnswerHistory([...answerHistory, { question: activeQuestion.question, answer: currentAnswer }]);

		// Determine the next question or if it's the end
		const nextQuestion = activeQuestion.next(currentAnswer);
		if (nextQuestion === 'end') {
			navigate('/end');
		} else {
			setCurrentAnswer(''); // Clear the current answer for the next question
			setCurrentQuestionNo(nextQuestion as number);
		}
	};

	const handleEndButtonClick = () => {
		if (!activeQuestion) return;

		// Update the answer of the active question
		const updatedQuestions = questions.map(q => (q.id === activeQuestion.id ? { ...q, answer: currentAnswer } : q));
		setQuestions(updatedQuestions);

		// Add the current question and answer to the history
		setAnswerHistory([...answerHistory, { question: activeQuestion.question, answer: currentAnswer }]);

		// Navigate to the end page
		navigate('/end');
	};

	const isLastQuestion = activeQuestion && activeQuestion.next(currentAnswer) === 'end';

	return (
		<div>
			<h2>Question # {currentQuestionNo}</h2>
			<p>{activeQuestion?.question}</p>
			{activeQuestion?.options.length ? (
				activeQuestion.options.map((option, index) => (
					<button key={index} onClick={() => clickEventHandler(option)}>
						{option}
					</button>
				))
			) : (
				<input type='text' value={currentAnswer} onChange={changeEventHanlder} />
			)}
			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', width: '200px' }}>
				<button disabled={currentQuestionNo < 2} onClick={() => setCurrentQuestionNo(prev => prev - 1)}>
					Previous
				</button>
				{isLastQuestion ? (
					<button disabled={currentAnswer === ''} onClick={handleEndButtonClick}>
						End
					</button>
				) : (
					<button disabled={currentAnswer === ''} onClick={handleNextButtonClick}>
						Next
					</button>
				)}
			</div>
		</div>
	);
};

export default QuestionPage;
