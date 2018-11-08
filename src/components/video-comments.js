import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {commentAction} from '../actions/comment-action';
import axios from 'axios';

class VideoComments extends React.Component{
    constructor(props){
        super(props);
        this.submitComment=this.submitComment.bind(this);
        this.commentVisible=this.commentVisible.bind(this);
       console.log(this.props.id);
       
    }

    submitComment(e){
        e.preventDefault();

        const commentpost=document.getElementById("comment").value;
        ;

        axios.post(`http://localhost:8000/comments`,`id=${this.props.selectedVideo.id.videoId}&text=${commentpost}`).then(
            res=>{
                console.log(res);
            }
        )
    }
      commentVisible(){
        // axios.get(`http://localhost:8000/comments/${this.props.id}`)
        // .then(res => {
        //   const data=res.data;
        //   console.log(data);
        //   this.props.commentAction(data);
        // })
        console.log('hi');
          if(this.props.comment){
              return(
                <ul>
                { this.props.comment.map(comment => (<li className='list-group-item'>{comment.text}</li>))}
                  </ul>
              );
          }else{
              return(<p>comments</p>);
          }
      }

    render(){
        return(
            <div id='comment-section'>
                <h3>Comments:</h3>
                <form onSubmit={this.submitComment}>
                <input type='text' id="comment" placeholder=' type your comment' className="form-control input-lg"/>
                <input type='submit' className='btn btn-info' value='Post'/>
                </form>
                <div>
                   {this.commentVisible()}
                </div>
            </div>
            

        );
    }
}
function mapStateToProps(state){
     return{
         selectedVideo:state.selectedVideo,
         comment:state.comment
     }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({commentAction:commentAction},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoComments);