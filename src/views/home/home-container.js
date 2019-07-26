import React from 'react';
import View from './home-view';
import { youtubeIdExtractor } from '../../utils/youtube';
import youtubeDetails from '../../services/youtubeAPI';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showClear: false,
            videoId: '',
            videoChannel: '',
            videoTitle: '',
            videoDate: '',
            videoCover: '',
        };
    }

    action = url => {
        const id = youtubeIdExtractor(url);
        // if (!id || id.length !== 11) {
        //     this.clear();
        // }
        youtubeDetails(id)
            .then(response => {
                const data = response.data.items[0].snippet;
                this.setState({
                    showClear: true,
                    videoId: id,
                    videoChannel: data.channelTitle,
                    videoTitle: data.title,
                    videoDate: data.publishedAt,
                    videoCover: data.thumbnails.medium.url,
                });
            })
            .catch(() => {
                this.clear();
            });
    };

    clear = () => {
        this.setState({
            showClear: false,
            videoId: '',
            videoChannel: '',
            videoTitle: '',
            videoDate: '',
            videoCover: '',
        });
    };

    render() {
        const { showClear, videoId, videoChannel, videoTitle, videoDate, videoCover } = this.state;
        return (
            <View
                showClear={showClear}
                clearAction={this.clear}
                searchAction={this.action}
                videoId={videoId}
                videoChannel={videoChannel}
                videoTitle={videoTitle}
                videoDate={videoDate}
                videoCover={videoCover}
            />
        );
    }
}
