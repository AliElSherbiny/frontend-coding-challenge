## **Git-Starred Project**

## project intro:

A webapp that lists the most starred Github repos that were created in the last 30 days. results are shown as list of cards in the home page.

## project Components:

1. CardsList : CardsList component contains a list of all the cards currently showing on the screen
2. Card : Card componenthandles the display of a signle card in the card list
3. Nav : Nav xomponent handles navigation through the pages of the application. contains:
		- prev button to go to the previous page.		
		- next button to go to the next page.

##External Libraries used:

- axios:
	used to make HTTP requests from node js, offers easier handling fot the async get and post requests and has wide browser support.

- react-loader-spinner:
	offers multiple loading spinners until the fetch command is done and promise is fulfilled.

## How to run?

1. In the terminal , go the correct starting directory, Assuming you are running terminal from the repo as your base adress:
	*$ cd ./git-starred

2. in the terminal , run the following command to install the node modules required by the app, Assuming you have node js installed:
	*$ npm install

3. in the terminal , run the following command for the developement server to run and for the app to start:
	*$ npm start