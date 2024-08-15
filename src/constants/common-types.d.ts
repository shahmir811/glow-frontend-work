export type QuestionType = {
	id: number;
	question: string;
	options: string[];
	next: (answer: string) => string | number;
	answer: string;
};
