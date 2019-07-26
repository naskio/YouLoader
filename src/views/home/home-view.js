import React from 'react';
import './home.css';
import Header from '../../components/header/index';
import SearchBar from '../../components/searchBar/index';
import VideoPreview from '../../components/videoPreview/index';

import icInfo from '../../assets/icons/outline-info-24px.svg';

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
            <div id="container" className="container-fluid">
                <div id="content-wrap" className="d-flex flex-column align-items-center pt-5">
                    <Header />
                    <SearchBar action={searchAction} clear={clearAction} showClear={showClear} />
                    <div className="Home-title mt-4 mb-2 text-center">
                        Convert any video from youtube to mp3 for FREE (No ads)
                    </div>
                    <div className="Home-subtitle mt-2 mb-2 text-center">
                        <img width={48} height={48} className="d-inline mr-2" src={icInfo} alt="info icon" />
                        We decline any use of this service for copyright infringement.
                    </div>
                    {videoTitle && (
                        <VideoPreview
                            videoId={videoId}
                            videoChannel={videoChannel}
                            videoTitle={videoTitle}
                            videoDate={videoDate}
                            videoCover={videoCover}
                        />
                    )}
                </div>
                <footer id="footer" className="text-center">
                    Copyright © 2019 YouLoader. By Mehdi Nassim KHODJA
                </footer>
            </div>
        );
    }
}
