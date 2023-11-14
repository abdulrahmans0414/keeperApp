import React from 'react';
import  ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(<App />,document.getElementById("root"))

//CHALLENGE:
//1. Implement the add note functionality.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.


