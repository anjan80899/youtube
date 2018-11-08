import React from 'react';
import  VideoComments from './video-comments';

const VideoDetail= (props) =>{
    const video=props.video;

    if(!video){
        return <div></div>;
    }  
    const videoId=video.id.videoId;
    const url=`http://www.youtube.com/embed/${videoId}?autoplay=1`;
    

    return(
        <div className='video-play'>
            <div className='row'>
                <div>
                    <iframe width="1280" height="720"  src={url} allowFullScreen></iframe> 
                </div>
                <div className='row'>
                    <div><h4>{video.snippet.title}</h4></div>
                </div>
                <div className='row'>
                    <VideoComments id={videoId}/>
                </div>
            </div>
        </div>
    );
};

export default VideoDetail;
