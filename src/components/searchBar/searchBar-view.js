import React from 'react';
import './searchBar.css';
import icSearch from '../../assets/icons/outline-search-24px.svg';
import icClear from '../../assets/icons/outline-clear-24px.svg';

export default class View extends React.PureComponent {
    render() {
        const { url, searchAction, clearAction, isActive, onUrlChange, showClear } = this.props;
        return (
            <div className="col-11 col-md-10 col-lg-8 mt-5 p-0">
                <input
                    type="text"
                    placeholder="Youtube song URL that you want to download…"
                    value={url}
                    onChange={onUrlChange}
                    className="form-custom form-control input-custom"
                />
                {!showClear && (
                    <button
                        type="button"
                        className="form-custom button-custom"
                        disabled={!isActive}
                        onClick={() => searchAction(url)}
                    >
                        <img
                            width={48}
                            height={48}
                            color="white"
                            className="d-inline mr-2"
                            src={icSearch}
                            alt="Search icon"
                        />
                        Search
                    </button>
                )}
                {showClear && (
                    <button type="button" className="form-custom button-custom" onClick={() => clearAction()}>
                        <img width={48} height={48} color={'white'} className="d-inline mr-2" src={icClear} alt="Clear icon" />
                        Clear
                    </button>
                )}
            </div>
        );
    }
}
