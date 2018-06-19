# react-stremio
Evaluation Assignment 2018
...
1. `npm start`
2. Open `localhost:8080` in the browser
3. `node server`
3.1 Sometimes no rows are loaded so we need to refresh the page a few times.

# How the project works
* We have a server running on port 3000, which is ran using `node server`. It is here only to send the data from the Stremio client.

* On the front-end we have a React-Redux application running which gets started with `npm start`.

* We use redux to have our state centralized in one place. The container that accesses redux is the `rows-list` container, because it is highest level component which cares about the data.

* We use the `react-redux` library to connect the `rows-list` component to redux and thus promote it to a container.

*  The flow of the app is the following:
1. When the `rows-list` component is loaded it calls the action creator function `getResults()` each time the server socket emits that the rows are updated.

~~2. The function returns an action, however the payload of the action is a promise, because it is an asynchronous GET request to the server. So we use the `redux-promise` library to resolve it before it reaches the reducer.~~

2. The function returns an action. The payload is no longer a promise since socket is implemented, so it gets passed as a payload normally.

3. Our reducer catches the action type and returns the data from the server, which is now an object and not a promise.

4. The returned part of the redux state gets binded to the props of `rows-list`, thanks to the `react-redux` library.
