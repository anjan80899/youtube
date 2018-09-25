import React from 'react';
import { connect } from 'react-redux';
import {termAction} from '../actions/term-action';
import { bindActionCreators } from "redux";

class SearchBar extends React.Component {

    constructor(props){
       super(props);
       this.onInputChange = this.onInputChange.bind(this);
       this.termSubmit=this.termSubmit.bind(this);
    }

    onInputChange(event){
        this.props.termAction(event.target.value);
    }
    termSubmit(e){
        this.props.onSearchTermChange(this.props.term);
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
          </div>
      );
    }
  }

  function mapStateToProps(state){
      return{
          term:state.term
      };
  }
  function matchDispatchToProps(dispatch){
       return bindActionCreators({termAction:termAction},dispatch);
  }
export default connect(mapStateToProps,matchDispatchToProps)(SearchBar);