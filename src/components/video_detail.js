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
        <div className='video-detail col-md-g'>
            <div >
                  <iframe width="1080" height="671"  src={url} allowFullScreen></iframe>
                  
            </div>
            <div className='details'>
                <div><h4>{video.snippet.title}</h4></div>
                
            </div>
            <VideoComments id={videoId}/>
        </div>
        </div>
    );
};

export default VideoDetail;
