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

## Key Components

### `QuestionsContext`

This context manages the state of the questions, the user's answers, and the history of previous attempts. It provides functions to reset questions and navigate through the questionnaire.

### `QuestionPage`

This is the main page where questions are displayed to the user. The user's answers are captured, and the flow of questions is determined dynamically based on their responses.

### `EndPage`

The final page shown when the user completes the questionnaire. It displays the user's answers and provides options to restart the questionnaire or view their answer history.

### `HistoryPage`

Displays a summary of the user's previous attempts and responses.

### `WelcomePage`

The landing page of the app where users can start the questionnaire.

## Usage

### Starting the Questionnaire:

Navigate to the homepage and click the "Start" button to begin.

### Answering Questions:

For each question, select an option or provide an answer and click "Next."

### Viewing History:

After completing the questionnaire, you can view your answer history by navigating to the history page.

### Restarting the Questionnaire:

You can restart the questionnaire at any time by clicking the "Restart Again" button on the end page or history page.

## Project Structure

```plaintext
src/
├── components/            # Reusable components
│   ├── EndPage.tsx        # Page displayed at the end of the questionnaire
│   ├── HistoryPage.tsx    # Page showing the history of responses
│   ├── NotFound.tsx       # 404 Page component
│   ├── QuestionPage.tsx   # Main component for displaying questions
│   ├── WelcomePage.tsx    # Welcome page component
│   └── ...                # Other components
│
├── context/               # Context API for state management
│   ├── QuestionsContext.tsx
│
├── data/                  # Static data such as questions
│   └── questions.ts       # Initial set of questions
│
├── App.tsx                # Main application component
├── index.tsx              # Application entry point
└── ...                    # Other files (types, styles, etc.)
```
