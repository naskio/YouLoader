import React from 'react';
import './videoPreview.css';
import DownloadButton from '../downloadButton/index';

export default class View extends React.PureComponent {
    render() {
        // const { videoId, videoChannel, videoTitle, videoDate, videoCover } = this.props;
        const { videoId, videoTitle, videoCover } = this.props;
        return (
            <div className="text-center mt-4">
                <img className="Video-cover" src={videoCover} alt="YouLoader Logo" />
                <div className="Video-title mb-2">{videoTitle}</div>
                {/* <div className="Video-channel">By: {videoChannel}</div> */}
                {/* <div className="Video-date">Published at: {new Date(videoDate).toLocaleDateString('en-US')}</div> */}
                <DownloadButton id={videoId} />
            </div>
        );
    }
}
