import React from 'react';
import ReactDOM from 'react-dom';
import View from './home-view';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<View />, div);
    ReactDOM.unmountComponentAtNode(div);
});
