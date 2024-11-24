# Documentation App

A React-based Documentation Application designed to provide an interactive platform for users to explore and edit information-rich pages. The application features a side navigation menu, detailed page content, and the ability to export content. It is built with a modern UI and incorporates powerful state management techniques for scalability and flexibility.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)

## Features

### Side Navigation Menu

- Provides a hierarchical structure of pages for easy navigation.
- Users can seamlessly switch between pages, including nested options.

### Editable Page Content

- Displays detailed content for each page, supporting both text and code snippets.
- An intuitive "Edit" button allows users to make modifications directly on the page.

### Dynamic Content Rendering

- Dynamically updates the main content area based on the selected page.
- Supports both markdown text and formatted code snippets for enhanced readability.

### Export Functionality

- A dedicated "Export" button enables users to download or share the content.
- Ideal for archiving or sharing finalized documentation.

### Interactive Design

- Clean, minimalistic UI for an uncluttered user experience.

### Code Highlighting

- Displays code snippets with proper formatting for technical documentation.
- Enhances readability for developers and technical users.

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: CSS with theme integration (using MUI)
- **State Management**: Redux Toolkit for handling application state
- **Routing**: React Router for dynamic navigation

## Getting Started

To get started with the Historical Places App, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn (for managing packages)

### Installation

Clone the repository:

```bash
git clone https://github.com/salmanbukhari37/api-matic-test-assessment.git
cd api-matic-test-assessment
```

## Usage

`Note`: Rename the `local.env` file to `.env`.

### Install the packages

#### Npm

```
npm install --legacy-peer-dep
```

### Run the Project

#### Npm

```
npm run start
```

### Building for Production

To create a production build of your application, run:

#### NPM

```
npm run build
```

The build artifacts will be stored in the `build` directory.

## Scripts

This project includes the following scripts:

- `start:` Starts the development server.
- `build:` Builds the app for production.
- `test:` Runs the test suite.
- `eject:` Removes the single build dependency from your project.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.
