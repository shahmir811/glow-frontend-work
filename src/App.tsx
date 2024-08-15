import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import './App.css';

import { lazy, Suspense } from 'react';
const EndPage = lazy(() => import('./pages/End.page'));
const NotFoundPage = lazy(() => import('./pages/NotFound.page'));
const QuestionPage = lazy(() => import('pages/Question.page'));
const WelcomePage = lazy(() => import('./pages/Welcome.page'));
const HistoryPage = lazy(() => import('./pages/History.page'));

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<WelcomePage />} />
					<Route path='/questions' element={<QuestionPage />} />
					<Route path='/end' element={<EndPage />} />
					<Route path='/history' element={<HistoryPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
