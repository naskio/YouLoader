import React from 'react';
import './searchBar.css';

export default class View extends React.PureComponent {
    render() {
        const { url, searchAction, clearAction, isActive, onUrlChange, showClear } = this.props;
        return (
            <div>
                <input
                    type="text"
                    placeholder="Youtube song URL that you want to download…"
                    value={url}
                    onChange={onUrlChange}
                    className="form-custom form-control form-control-lg w-50"
                />
                {!showClear && (
                    <button type="button" disabled={!isActive} onClick={() => searchAction(url)}>
                        Search
                    </button>
                )}
                {showClear && (
                    <button type="button" onClick={() => clearAction()}>
                        Clear
                    </button>
                )}
            </div>
        );
    }
}
