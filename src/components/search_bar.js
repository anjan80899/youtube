import React from 'react';
import { connect } from 'react-redux';
import {termAction} from '../actions/term-action';
import { bindActionCreators } from "redux";
import axios from 'axios';
import AutoComplete from './autocomplete';

class SearchBar extends React.Component {

    constructor(props){
       super(props);
       this.onInputChange = this.onInputChange.bind(this);
       this.termSubmit=this.termSubmit.bind(this);
       this.state={
           typos:[]
       }
    }

    onInputChange(event){
        this.props.termAction(event.target.value);
        axios.get(`http://localhost:8000/autocomplete/${event.target.value}`)
        .then(res => {
          const data=res.data;
          console.log(data);
          this.setState({
              typos:data
          })
        })
    }
    termSubmit(e){
        this.props.onSearchTermChange(this.props.term);
        // this.props.videosAction(this.props.term);

        axios.post(`http://localhost:8000/autocomplete`,`text=${this.props.term}`).then(
            res=>{
                console.log(res);
            }
        )

        e.preventDefault();
    }
    render() {
      return (
      <div >
      <form onSubmit={this.termSubmit}>
          <input className='search-bar'
          value={this.props.term}
           onChange={this.onInputChange}
          />
          <input type="submit" className="btn btn-danger" value="Search"/>
          </form>
          <AutoComplete typos={this.state.typos} onClickItem={item=>this.props.onSearchTermChange(item)}/>
          </div>
      );
    }
  }

  function mapStateToProps(state){
      return{
          term:state.term,
          videos:state.videos
      };
  }
  function matchDispatchToProps(dispatch){
       return bindActionCreators({termAction:termAction},dispatch);
  }
export default connect(mapStateToProps,matchDispatchToProps)(SearchBar);