# Single-Page Apps

- A Single Page Application allows the user to interact with the website without downloading entire new webpages. Instead, it rewrites the current webpage as the user interacts with it. The outcome is that the application will feel faster and more responsive to the user.

- How Does a Single-Page App Work?
When the user navigates to the web application in the browser, the Web Server will return the necessary resources to run the application. There are two approaches to serving code and resources in Single Page Applications.

- When the browser requests the application, return and load all necessary HTML, CSS and JavaScript immediately. This is known as bundling. 

- When the browser requests the application, return only the minimum HTML, CSS and JavaScript needed to load the application. Additional resources are downloaded as required by the application, for example, when a user navigates to a specific section of the application. This is known as lazy loading or code splitting. 

## Anchor Tag Elements in Single-Page Elements
- A single-page application can’t have regular anchor tag elements as a traditional web app can. 

- The reason for this is that the default behavior of an anchor tag is to load another HTML file from a server and refresh the page. This page refresh is not possible in a SPA that's powered by a library such as React because a total page refresh is not the way that a SPA works, as explained earlier in this lesson item. 

- Instead, a SPA comes with its own special implementation of anchor tags and links, which only give an illusion of loading different pages to the end user when in fact, they simply load different components into a single element of the real DOM into which the virtual DOM tree gets mounted and updated.

# React router
- install using npm i react-router-dom@6
- I'll access the index.js file, and enter a statement to import browser router from react-router-dom. Once I've imported it, 
- I need to wrap the app jsx element inside the browser router by placing it between the browser router tags.
- to app.js. Here I need to import routes and route from react-router-dom.



