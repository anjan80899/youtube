import React from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
 import VideoDetail from './components/video_detail';
 import { connect } from 'react-redux';
 import {bindActionCreators} from 'redux';
 import {videosAction} from './actions/videos-action';
 

const API_KEY='AIzaSyCpdDBzgC6QWYmdjPUJNvOzQpzrwruW-D8';

class App extends React.Component{
    constructor(props){
        super(props);

       this.videoSearch(this.props.term);
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term:term}, (data)=>{
            this.props.videosAction(data);
        });
    }
    render(){
        return(
            <div>
              <SearchBar onSearchTermChange={searchTerm =>this.videoSearch(searchTerm)}/>
              <div className='video-body'>
              <VideoDetail video={this.props.selectedVideo} />
              <VideoList
               />
              </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        videos:state.videos,
        selectedVideo:state.selectedVideo,
        term:state.term
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({videosAction:videosAction},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(App);