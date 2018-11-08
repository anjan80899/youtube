import React from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
 import VideoDetail from './components/video_detail';
 import { connect } from 'react-redux';
 import {bindActionCreators} from 'redux';
 import {videosAction} from './actions/videos-action';
 

class App extends React.Component{
    constructor(props){
        super(props);
       this.props.videosAction(this.props.term);
    }
    render(){
        return(
            <div>
                <SearchBar  onSearchTermChange={searchTerm =>this.props.videosAction(searchTerm)}/>
                <div className='row'>
                    <div className='col-sm-8'>
                        <VideoDetail video={this.props.selectedVideo} />
                    </div>
                    <div className='col-sm-4'>
                        <VideoList/>
                    </div>
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
// onSearchTermChange={searchTerm =>this.videoSearch(searchTerm)}