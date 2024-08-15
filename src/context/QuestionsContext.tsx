import { QuestionType } from 'constants/common-types';
import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import { questions as initialQuestions } from '../data/questions';

type QuestionsContextType = {
	questions: QuestionType[];
	setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>;
	resetQuestions: () => void;
	answerHistory: { question: string; answer: string }[];
	setAnswerHistory: React.Dispatch<React.SetStateAction<{ question: string; answer: string }[]>>;
	previousAttempts: { question: string; answer: string }[][];
};

const QuestionsContext = createContext<QuestionsContextType | undefined>(undefined);

export const useQuestions = () => {
	const context = useContext(QuestionsContext);
	if (!context) {
		throw new Error('useQuestions must be used within a QuestionsProvider');
	}
	return context;
};

export const QuestionsProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [questions, setQuestions] = useState<QuestionType[]>(initialQuestions);
	const [answerHistory, setAnswerHistory] = useState<{ question: string; answer: string }[]>([]);
	const [previousAttempts, setPreviousAttempts] = useState<{ question: string; answer: string }[][]>([]);

	const resetQuestions = () => {
		// Save the current attempt to previousAttempts before resetting
		if (answerHistory.length > 0) {
			console.log('YES');
			setPreviousAttempts(prev => [...prev, answerHistory]); // Save the entire current attempt
		}
		setQuestions(questions.map(q => ({ ...q, answer: '' }))); // Reset answers in questions
		setAnswerHistory([]); // Clear the current history
	};

	return (
		<QuestionsContext.Provider
			value={{ questions, setQuestions, resetQuestions, answerHistory, setAnswerHistory, previousAttempts }}>
			{children}
		</QuestionsContext.Provider>
	);
};
