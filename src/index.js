import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCdqBn7-bzxz3qa8T2x7_w_NgCmbb_Lk4Y';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList 
                    videos = {this.state.videos}
                />
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));


