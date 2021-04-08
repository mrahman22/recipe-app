Local Install
Clone repo:
git clone https://github.com/mrahman22/recipe-app.git

Install dependencies:
npm install

Get your The Edamam API key and id and create a config.js file in the root of the directory and paste the below code in:

const apiKey = 'your API key' export default apiKey;

Start Application:
npm start

Tech Stack
built in React JS Framework
I used fetch method to send requests to the Edmam API
tested with Jest
An Application to search recipes using your favourite ingredient
App.js is built to be more of a view layer as much as possible to see what the App consists of, meanwhile most functionality of the app is extracted out to their own Components.
The Header and Search sections at the top.

The main section of the App is conditionally rendered:

The default setting is set to chicken so it lists all the chicken recipes available when the first mounts. The app list gives a list of 10 possible choices once you have entered your chosen ingredient. The app is paginated and list 3 recipes per page. When the ingredient button on the recipe card is clicked it will conditionally render to show a list of of the ingredients required for your chosen recipe. 

Testing
Testing was carried out with Jest and React Testing Library. Tests can be run with: npm test

Components are tested with a snapshot and unit tests that cover basic functionality.

Code Formatting
Prettier is used for code formatting, VSCode is setup to format all files on save.

