// ES6 Component
// Import React and ReactDom
import React from 'react';
import ReactDom from 'react-dom';

// Import Search Component
import Search from './components/search.component';

// Search component created as a class
class App extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <Search />
        );
    }
}

// Render to ID content in the DOM
ReactDom.render( <App/>, 
    document.getElementById('content')
);