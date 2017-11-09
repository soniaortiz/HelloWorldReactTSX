import * as React from 'react';
import * as ReactDOM from 'react-dom';


    let h1 = React.createElement('h1', {}, 'Hello World');

        ReactDOM.render(
            //h1, 
            React.createElement('div', {}, h1, h1),
            document.getElementById('content')
        )
