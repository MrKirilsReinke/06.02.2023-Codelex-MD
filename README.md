# React-Router-React-Query

## Description

This React application is a user-friendly portal designed to explore the fascinating world of the TV show "Rick and Morty." It leverages the Rick and Morty API to retrieve and present detailed information about characters from the series. With dynamic page loading and efficient data management, users can seamlessly navigate through the vast character universe and learn more about their favorite characters.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [How to Contribute](#how-to-contribute)

## Installation

To get started with this project, you need to install the required dependencies and run it. Follow these steps:

1. Clone the repository to your local machine.

```bash
git clone <repository_url>
```

2. Navigate to the project directory.

```bash
cd <project_directory>
```

If you're using Visual Studio Code, you can open the project directory with the following command:
```bash
code .
```

3. Open terminal in Visual Studio Code and install the project dependencies using npm.

```bash
npm install
```

4. Run the development server to start the application.

```bash
npm run dev
```

Server should start at following link: 

`http://localhost:5173`

## Usage

1. Home Component:

* Description: This component represents the Home page.
* Usage: It is used as a route element in the main App component. No props are required for this component.

2. Characters Component:

* Description: This component is responsible for displaying a list of characters from the "Rick and Morty" series.
* Usage: It's used as a route element in the main App component. No props are required for this component.

3. Character Component:

* Description: This component displays detailed information about a single character.
* Usage: It's used as a route element in the Characters component to display character details. No props are directly passed to this component.

4. About Component:

* Description: This component represents the About page.
* Usage: It's used as a route element in the main App component. No props are required for this component.

5. Link Component:

* Description: The Link component is used for navigation between different pages.
* Usage: You can find instances of this component in the nav element of the App component. Links are defined for the Home, About, and Characters pages.

6. Passing Props:

In cases where a component expects specific data, you may need to pass props. For example, if you want to customize the behavior or appearance of a component, check the component's documentation to identify the required props.
Prop passing is not required for basic navigation between pages using Link components. However, for more advanced customizations, refer to the specific component's documentation or source code for guidance.

## Features

* React Router: Utilizes React Router for client-side routing, enabling navigation between different views and pages.
* React Query: Employs the React Query library for efficient data fetching and state management within the application.
* Dynamic Page Loading: Implements dynamic page loading, ensuring a smooth user experience as they navigate through the app.
* API Integration: Connects with the "Rick and Morty API" to retrieve and display character information.
* Pagination: Provides a "Show more" button to load additional characters when available.

## Credits

* React: A JavaScript library for creating interactive user interfaces.
* React Query: A library for managing data fetching and state in React applications.
* React Router: A routing library for React applications, enabling multi-page navigation.
* Axios: A versatile HTTP client for the browser and Node.js, used for API requests.
* Rick and Morty API: An external API that provides character data for this project.

## How to Contribute

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix.

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them.

```bash
git add .
git commit -m "Added a new feature"
```

4. Push your changes to your forked repository.

```bash 
git push origin feature/your-feature-name
```

5. Create a Pull Request (PR) to the main repository, explaining your changes and improvements.
