import React from 'react';
import { bindActionCreators } from 'redux';
import {selectedVideoAction} from '../actions/selectedVideo-action';
import {connect} from 'react-redux';
import {commentAction} from '../actions/comment-action';
import axios from 'axios';


// const VideoListItem=(props)=>{
//     const video=props.video;
//     const imageUrl=video.snippet.thumbnails.default.url;

//     return(
//         <li onClick={()=>props.selectedVideoAction(video)} className='list-group-item'>
//             <div className='item-body'>
//             <div className='list-item'>
//                 <img className='thumbnail' src={imageUrl} />
//             </div>
//             <div className='item-desc'>
//                 <div className='media-heading' >{video.snippet.title}</div>
//             </div>
//             </div>
//         </li>
//     );
// };
class VideoListItem extends React.Component{
    constructor(props){
        super(props);
        this.videoPlay=this.videoPlay.bind(this);
    }
    videoPlay(){
        this.props.selectedVideoAction(this.props.video);
        axios.get(`http://localhost:8000/comments/${this.props.video.id.videoId}`)
        .then(res => {
          const data=res.data;
          console.log(data);
          this.props.commentAction(data);
        })

    }
    render(){
        return(
                    <div onClick={this.videoPlay} >
                        <div className='row'>
                            <div className='col-sm-3'>
                                <img className='thumbnail' src={this.props.video.snippet.thumbnails.default.url} />
                            </div>
                            <div className='col-sm-8'>
                                <div className='media-heading' >{this.props.video.snippet.title}</div>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                );
    }
}
function mapStateToProps(state){
   return  {
    selectedVideo:state.selectedVideo
   };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedVideoAction:selectedVideoAction,commentAction:commentAction},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(VideoListItem);