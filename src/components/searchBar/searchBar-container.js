import React from 'react';
import View from './searchBar-view';
import { youtubeUrlChecker } from '../../utils/youtube';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: '', isActive: false };
    }

    handleUrlChange = event => {
        const newValue = event.target.value || '';
        if (!newValue) {
            const { clear } = this.props;
            this.setState({ url: '', isActive: false });
            clear();
        } else {
            this.setState({ url: newValue, isActive: youtubeUrlChecker(newValue) });
        }
    };

    clear = () => {
        const { clear } = this.props;
        this.setState({ url: '', isActive: false });
        clear();
    };

    render() {
        const { url, isActive } = this.state;
        const { action, showClear } = this.props;
        return (
            <View
                url={url}
                searchAction={action}
                clearAction={this.clear}
                onUrlChange={this.handleUrlChange}
                isActive={isActive}
                showClear={showClear}
            />
        );
    }
}
