# Questionnaire App

This is a **Questionnaire App** built with **React** and **TypeScript**. The app presents a series of questions to the user, where the next question or end of the questionnaire is determined based on the user's answers. The app also keeps track of the user's responses, allowing them to review their answer history after completing the questionnaire.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Question Flow:** The next question is determined based on the user's answer.
- **Answer History:** Users can review their past attempts and responses.
- **State Management:** Context API is used for managing the questions and responses across the application.
- **Responsive Design:** The application is designed to work well on different screen sizes.
- **TypeScript:** Provides type safety and better code quality.

## Getting Started

### Prerequisites

- **Node.js** (version >= 14)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/questionnaire-app.git
   cd questionnaire-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

### Build for Production

To create a production build, run:

```bash
npm run build
```

src/
│
├── components/ # Reusable components
│ ├── EndPage.tsx # Page displayed at the end of the questionnaire
│ ├── HistoryPage.tsx # Page showing the history of responses
│ ├── NotFound.tsx # 404 Page component
│ ├── QuestionPage.tsx # Main component for displaying questions
│ ├── WelcomePage.tsx # Welcome page component
│ └── ... # Other components
│
├── context/ # Context API for state management
│ ├── QuestionsContext.tsx
│
├── data/ # Static data such as questions
│ └── questions.ts # Initial set of questions
│
├── App.tsx # Main application component
├── index.tsx # Application entry point
└── ... # Other files (types, styles, etc.)
