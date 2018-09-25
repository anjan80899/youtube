import React from 'react';
import { bindActionCreators } from 'redux';
import {selectedVideoAction} from '../actions/selectedVideo-action';
import {connect} from 'react-redux';

const VideoListItem=(props)=>{
    const video=props.video;
    const imageUrl=video.snippet.thumbnails.default.url;

    return(
        <li onClick={()=>props.selectedVideoAction(video)} className='list-group-item'>
            <div className='item-body'>
            <div className='list-item'>
                <img className='thumbnail' src={imageUrl} />
            </div>
            <div className='item-desc'>
                <div className='media-heading' >{video.snippet.title}</div>
            </div>
            </div>
        </li>
    );
};
function mapStateToProps(state){
    selectedVideo:state.selectedVideo
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedVideoAction:selectedVideoAction},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(VideoListItem);