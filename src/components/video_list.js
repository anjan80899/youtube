import React from 'react';
import VideoListItem from './video_list_item';
import { connect } from 'react-redux';


const VideoList = (props) => {
    const videoItems=props.videos.map((video)=>{
        return(
            <VideoListItem
                key={video.etag}
                video={video} />
        );
    });

    return(
        <div className='video-list'>
            {videoItems}   
        </div>
    );
};
function mapStateToProps(state){
    return{
        videos:state.videos
    };
}
export default connect(mapStateToProps)(VideoList);
