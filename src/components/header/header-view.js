import React from 'react';
import './header.css';
import logo from '../../assets/logo.svg';

export default class View extends React.PureComponent {
    render() {
        return (
            <div className="d-flex flex-row justify-content-center align-top mt-5">
                <div className="Header-group mr-4">
                    <div className="Header-title">YOULOADER</div>
                    <div className="Header-subtitle">Download the best music for FREE !!</div>
                </div>
                <img className="Header-logo" src={logo} alt="YouLoader Logo" />
            </div>
        );
    }
}
