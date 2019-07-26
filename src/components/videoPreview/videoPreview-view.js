import React from 'react';
import './videoPreview.css';
import DownloadButton from '../downloadButton/index';

export default class View extends React.PureComponent {
    render() {
        const { videoId, videoChannel, videoTitle, videoDate, videoCover } = this.props;
        return (
            <div>
                <img className="Header-logo" src={videoCover} alt="YouLoader Logo" />
                <div>{videoTitle}</div>
                <div>{videoChannel}</div>
                <div>{videoDate}</div>
                <DownloadButton id={videoId} />
            </div>
        );
    }
}
