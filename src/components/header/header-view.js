import React from 'react';
import './header.css';
import logo from '../../assets/logo.svg';

export default class View extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="d-none d-md-flex flex-row justify-content-center align-top mt-5 mb-5">
                    <div className="Header-group mr-4">
                        <div className="Header-title">YOULOADER</div>
                        <div className="Header-subtitle">Download the best music for FREE !!</div>
                    </div>
                    <img className="Header-logo" src={logo} alt="YouLoader Logo" />
                </div>
                <div className="d-flex d-md-none flex-column text-center mt-3 mb-3">
                    <img className="Header-logo Header-logo-mobile" src={logo} alt="YouLoader Logo" />
                    <div className="Header-title Header-title-mobile">YOULOADER</div>
                    <div className="Header-subtitle Header-subtitle-mobile">Download the best music for FREE !!</div>
                </div>
            </div>
        );
    }
}
