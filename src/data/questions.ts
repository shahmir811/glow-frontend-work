import { QuestionType } from 'constants/common-types.d';

export const questions: QuestionType[] = [
	{
		id: 1,
		question: 'Does your business operate in CA?',
		options: ['Yes', 'No'],
		next: (answer: string) => (answer === 'Yes' ? 2 : 'end'),
		answer: '',
	},
	{
		id: 2,
		question: 'How many employees do you have?',
		options: [],
		next: (answer: string) => (parseInt(answer, 10) > 100 ? 'end' : 3),
		answer: '',
	},
	{
		id: 3,
		question: 'Do you serve food?',
		options: ['Yes', 'No'],
		next: (answer: string) => (answer === 'Yes' ? 4 : 5),
		answer: '',
	},
	{
		id: 4,
		question: 'Do you serve hot food?',
		options: ['Yes', 'No'],
		next: (answer: string) => (answer === 'Yes' ? 5 : 'end'),
		answer: '',
	},
	{
		id: 5,
		question: 'Are you open past midnight?',
		options: ['Yes', 'No'],
		next: (answer: string) => 6,
		answer: '',
	},
	{
		id: 6,
		question: 'Do you host live music?',
		options: ['Yes', 'No'],
		next: (answer: string) => 'end',
		answer: '',
	},
];

/**
 *
 * @param id
 * This function retrieves a question from the `questions` array based on the provided `id`.
 * If no question is found with the specified `id`, the function returns `undefined`.
 *
 * @returns QuestionType | undefined
 *
 * NOTE: The undefined in the return type of the getQuestionById function serves as a safeguard for
 * when a question with the specified id does not exist in the questions array.
 *
 */

export const getQuestionById = (id: number | string): QuestionType | undefined => {
	return questions.find(question => question.id === id);
};
