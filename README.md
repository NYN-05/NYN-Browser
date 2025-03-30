# Electron Web Browser

A **lightweight and functional** web browser built using Electron.js that allows users to perform search queries and navigate directly to URLs within a minimalistic interface.

## Key Features
- **Search Engine Integration**: Automatically redirects search queries to Google.
- **Direct URL Navigation**: Allows users to enter and visit any valid web address.
- **Back and Forward Navigation**: Provides seamless browsing history management.
- **User-Friendly UI**: Simple, intuitive interface with essential browsing controls.
- **Cross-Platform Support**: Runs on Windows, macOS, and Linux.

## Installation Guide
### Prerequisites
Before setting up the project, ensure the following dependencies are installed:
- **Node.js** (Version 14 or higher recommended)
- **npm** (Node Package Manager, included with Node.js)

#### Verify Installation
```bash
node -v  # Verify Node.js installation
npm -v   # Verify npm installation
```
If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/).

### Clone the Repository
Use the following command to clone the repository and navigate to the project directory:
```bash
git clone https://github.com/your-username/electron-browser.git
cd electron-browser
```

### Install Project Dependencies
```bash
npm install
```

## Usage Instructions
To launch the application, run:
```bash
npm start
```
This will initialize the Electron app and open the browser interface.

## Step-by-Step Implementation
### 1. Project Initialization
- Create a new directory for the project.
- Navigate into the directory and initialize an npm project:
```bash
mkdir electron-browser && cd electron-browser
npm init -y
```

### 2. Install Electron
Install Electron as a development dependency:
```bash
npm install electron --save-dev
```

### 3. Create Essential Files
Inside the project directory, create the following files:
- `index.html` (Defines the UI layout)
- `main.js` (Handles the main Electron process)
- `renderer.js` (Manages UI interactions)
- `assets/style.css` (Contains CSS styles)

### 4. Configure `package.json`
Modify the `package.json` file to include the Electron startup script:
```json
"scripts": {
  "start": "electron ."
}
```

### 5. Implement Core Functionality
- **User Input Handling**: Accept search queries and URLs.
- **Search Functionality**: Detects non-URL inputs and redirects them to Google Search.
- **Navigation Controls**: Implements back and forward browsing.
- **Security Considerations**: Uses Electron’s security policies to prevent unsafe content loading.

### 6. Start the Application
Run the following command to launch the browser:
```bash
npm start
```

## Project Directory Structure
```
/electron-browser
│── /assets            # Contains CSS and additional resources
│── index.html         # Frontend user interface file
│── main.js            # Electron main process script
│── renderer.js        # Handles UI interactions and event listeners
│── package.json       # Project configuration and dependencies
│── README.md          # Project documentation
```

## Application Workflow
### Navigating the Browser
1. **Enter a Search Query or URL**: The address bar accepts both search keywords and website URLs.
2. **Click "Go" or Press Enter**: The application determines whether the input is a direct URL or a search query.
3. **Handling Search Queries**: If a non-URL is entered, the application redirects the query to Google Search.
4. **Direct URL Loading**: If a valid URL is detected, it opens the corresponding webpage.

### Navigation Controls
- **Back Button**: Returns to the previous page.
- **Forward Button**: Moves forward in browsing history.

## Technologies Used
- **Electron.js** - Enables cross-platform desktop application development.
- **HTML, CSS, JavaScript** - Forms the UI and interaction logic.
- **Node.js** - Powers the backend logic within Electron.

## Potential Enhancements
- **Multi-Tab Functionality**: Allow multiple browsing tabs within the same window.
- **Bookmark System**: Enable users to save and manage favorite sites.
- **Enhanced UI/UX**: Improve styling and responsiveness for a smoother experience.
- **Custom Search Engine Selection**: Allow users to select between Google, Bing, and DuckDuckGo.

## License
This project is released under the **MIT License**. Feel free to modify and distribute it as per the license terms.

