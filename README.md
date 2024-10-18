# Chat Application

## Overview

This is a simple chat application built using Node.js, Express, EJS, and Vanilla JavaScript. The application allows users to enter a username and chat with a bot that provides predefined responses. The chat interface includes a day/night mode toggle for enhanced user experience.

## Features

- **User Personalization:** Users can enter a username that appears above their messages.
- **Chat Interface:** A clean and intuitive chat interface to send and receive messages.
- **Predefined Responses:** The bot replies to specific user inputs based on predefined responses.
- **Day/Night Mode:** A toggle button allows users to switch between light and dark themes.
- **Responsive Design:** The application is designed to work on various screen sizes.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Templating Engine:** EJS
- **Data Handling:** JSON for predefined responses

## Installation

### Prerequisites

- Node.js (version 14 or above)
- npm (Node package manager)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `responses.json` file in the root directory with the following content:

   ```json
   {
       "hi": "Hi there! How can I help you?",
       "how are you": "I'm just a bunch of code, but I'm doing great! How about you?",
       "bye": "Goodbye! Have a nice day!"
   }
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Usage

1. Enter your desired username in the input box and click **Start Chat** or press **Enter**.
2. Type your message in the input field and click **Send** or press **Enter** to send the message.
3. Use the toggle button in the bottom right corner to switch between day and night modes.


## Contributing

Contributions are welcome! Feel free to submit issues or pull requests for any features or bug fixes.

