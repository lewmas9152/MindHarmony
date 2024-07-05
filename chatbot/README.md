# Mental Health Assistant Chatbot

This repository contains an Express.js application that serves as a mental health assistant chatbot. It utilizes OpenAI's GPT-3.5-turbo model to provide helpful responses to user inputs related to mental health.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

To get started, clone this repository and install the necessary dependencies:

```bash
git clone https://github.com/lewmas/mindharmony.git
cd mindharmony/chatbot
npm install
```

## Usage

Before running the application, ensure you have your OpenAI API key set up in the environment variables. Create a `.env` file in the root directory of your project and add your API key:

```plaintext
API_KEY=your_openai_api_key
```

To start the application, run:

```bash
npm start
```

This will start the server on the default port (usually 3000).

## API Endpoints

### POST /chat

This endpoint processes user input and returns a response from the OpenAI GPT-3.5-turbo model.

**Request:**

- Method: `POST`
- URL: `/api/chat`
- Headers:
  - `Content-Type: application/json`
- Body:
  ```json
  {
    "user_input": "I'm feeling anxious about my exams."
  }
  ```

**Response:**

- Success: `200 OK`
  ```json
  {
    "response": "It's completely natural to feel anxious about exams. Remember to take deep breaths and take breaks while studying."
  }
  ```
- Error: `500 Internal Server Error`
  ```json
  {
    "error": "Error message describing what went wrong."
  }
  ```

## Environment Variables

The application requires the following environment variables to be set:

- `API_KEY`: Your OpenAI API key.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


## Author

- **@waltertaya**
