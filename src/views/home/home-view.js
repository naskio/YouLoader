import React from 'react';
import './home.css';
import Header from '../../components/header/index';
import SearchBar from '../../components/searchBar/index';
import VideoPreview from '../../components/videoPreview/index';

export default class View extends React.PureComponent {
    render() {
        const {
            videoId,
            videoChannel,
            videoTitle,
            videoDate,
            videoCover,
            searchAction,
            clearAction,
            showClear,
        } = this.props;
        return (
            <div id="container">
                <div id="content-wrap" className="pt-5">
                    <Header />
                </div>
                <SearchBar action={searchAction} clear={clearAction} showClear={showClear} />
                {videoTitle && (
                    <VideoPreview
                        videoId={videoId}
                        videoChannel={videoChannel}
                        videoTitle={videoTitle}
                        videoDate={videoDate}
                        videoCover={videoCover}
                    />
                )}
                <footer id="footer" className="text-center">
                    Copyright © 2019 YouLoader.
                </footer>
            </div>
        );
    }
}
