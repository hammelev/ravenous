# Portfolio project: Displaying restaurant recommendations using Yelp

## React-based Yelp Recommendation App

This project was created to gain experience with React as part of the Codecademy course [Create a Front-End App with React](https://www.codecademy.com/learn/paths/build-web-apps-with-react).

Ravenous allows users to search for restaurants by location and food type, with results sortable by "Best Match," "Rating," or "Most Reviewed."


Additional features implemented for the project beyond the Codecademy course specification:
* Prefetch data for non-selected sort optiions when searching to avoid having to send additional requests when the user changes sorting options.
* Set up mockdata and implemented sorting for mockdata.
* Seperate config file to seperate configuration from the code.
* Added loading indicator and error message.

## Tech Stack
*   **Frontend:** React (Hooks, Functional Components), HTML5, CSS3 (CSS Modules)
*   **JavaScript:** ES6+
*   **API Integration:** Yelp Fusion API (via a proxy for local development)
*   **Development Tools:** VS Code with Gemini Code Assist, Git, npm

## Key Learnings & Skills Demonstrated
*   **React Development:** Building a single-page application with functional components, state management using Hooks (`useState`, `useEffect`), and prop drilling.
*   **API Consumption:** Asynchronously fetching and displaying data from a third-party API, including handling loading and error states.
*   **Component-Based Architecture:** Designing reusable and modular UI components following stateless/stateful patterns.
*   **Modern JavaScript:** Utilizing ES6+ features for cleaner and more efficient code.
*   **AI:** Leveraging AI for code assistance.

## Demo version of the project

A demo version of the project can be found here: [Create a Front-End App with React](https://hammelev.github.io/ravenous/)

In the demo version mock data is used instead of data from YELP.

**Note on using mock data:** For demonstration purposes, this project uses mock data. As a pure frontend application, direct fetching from the Yelp API is prevented by **CORS policies**, and there's no secure way to store a secret API key.

To run the project locally with live Yelp data, a **Node.js proxy** is utilized to bypass CORS, and you'll need to **insert your own Yelp API key** into the config file.

## Running the application

To run the application locally:

1.  **Ensure Node.js is installed:** This includes npm (Node Package Manager).
2.  **Clone the repository:**
    ```bash
    git clone https://github.com/hammelev/ravenous.git
    cd ravenous
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Configure Yelp API Key (for live data):**
    *   Obtain a Yelp API Key from the [Yelp Fusion API documentation](https://docs.developer.yelp.com/docs/fusion-intro).
    *   Open the file `src/config/runtimeConfig.js`.
    *   Update the `yelpApiKey` value with your actual Yelp API key:
        ```javascript
        export const RUNTIME_CONFIG = {
            'useMockData': false, // Set to false to use live API
            'yelpApiKey': 'YOUR_YELP_API_KEY_HERE',
        };
        ```
    *   Ensure `useMockData` is set to `false` in the same file to use the live API.
5.  **Start the development server:**
    ```bash
    npm start
    ```
    This will open the application in your default web browser at `http://localhost:3000/ravenous`.

The application uses a proxy (defined in `package.json`) to handle Yelp API requests during local development to avoid CORS issues.
