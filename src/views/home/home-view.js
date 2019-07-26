import React from 'react';
import './home.css';
import Header from '../../components/header/index';

export default class View extends React.PureComponent {
    render() {
        return (
            <div id="container">
                <div id="content-wrap" className="pt-5">
                    <Header />
                </div>
                <footer id="footer" className="text-center">
                    Copyright © 2019 YouLoader.
                </footer>
            </div>
        );
    }
}
