import React from 'react';
import { connect } from 'react-redux';
import {termAction} from '../actions/term-action';
import { bindActionCreators } from "redux";

class AutoComplete extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className='auto-list'>
            <ul className='list-group'>
                { this.props.typos.map(typo => (<div ><li className='list-group-item' >{typo}</li></div>))}
            </ul>
            </div>
        )
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
export default connect(mapStateToProps,matchDispatchToProps)(AutoComplete);