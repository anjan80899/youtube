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
       
    }

    submitComment(e){
        e.preventDefault();

        const commentpost=document.getElementById("comment").value;
        ;

        axios.post(`http://localhost:8000/comments`,`id=ghjf&text=${commentpost}`).then(
            res=>{
                console.log(res);
            }
        )
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8000/comments/ghjf`)
          .then(res => {
              console.log(res.data);
            const data=res.data;
            this.props.commentAction(data);
            console.log(this.props.comment);
          })
      }
      commentVisible(){
        //   console.log(this.props.comment);
          if(this.props.comment){
              return(
                <ul>
                { this.props.comment.map(comment => (<li>{comment.text}</li>))}
                  </ul>
              );
          }else{
              return(<p>comments</p>);
          }
      }

    render(){
        return(
            <div>
                <form onSubmit={this.submitComment}>
                <input type='text' id="comment" placeholder=' type your comment' className='form-row'/>
                <input type='submit' value='Post'/>
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
         selectedVideo:this.selectedVideo,
         comment:this.comment
     }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({commentAction:commentAction},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoComments);