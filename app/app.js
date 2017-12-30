// ES6 Component
// Import React and ReactDom
import React from 'react';
import ReactDom from 'react-dom';
// Search component created as a class
class Search extends React.Component {

    // render method is most important
    // render method returns JSX template
    render() {
        return (
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
        );
    }
}

// Render to ID content in the DOM
ReactDom.render( <Search/>, 
    document.getElementById('content')
);