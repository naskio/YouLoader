import React from 'react';
import './background.css';

export default class View extends React.PureComponent {
    render() {
        return (
            <div className="background">
                <div className="note note-1">&#9835; &#9833;</div>
                <div className="note note-2">&#9833;</div>
                <div className="note note-3">&#9839; &#9834;</div>
                <div className="note note-4">&#9834;</div>
            </div>
        );
    }
}
