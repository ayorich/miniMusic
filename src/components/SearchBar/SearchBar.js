import React, { Component } from 'react';
import { connect } from 'react-redux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {searchInstance as axios} from '../../axios-base';

import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import * as actions from '../../store/actions/index';

import './SearchBar.css';


class SearchBar extends Component {
 state={
     value: '',
     disabled: true
 }

 inputChangeHandler = (event) => {
     this.setState({value:event.target.value, disabled:false})
 }
 searchHandler = () => {
  //  this.props.onsearchLoading({spinnerLoading:true});
  this.props.onsearchData(this.state.value)
 }
render(){
    return (
      <div className="SearchBar">
        <Input
          value={this.state.value}
          placeholder="Search over 1,000,000 musics..."
          onChange={(event) => this.inputChangeHandler(event)}
        />
        <Button onClick={() => this.searchHandler() }
          className='btn'
        disabled={this.state.disabled} 
        >
          Search
        </Button>
      </div>
    );
}
    
};


const mapDispatchToProps = dispatch => {
    return {
      onsearchData: userInput => dispatch(actions.searchData(userInput)),
    };
}
export default connect(null, mapDispatchToProps)(withErrorHandler(SearchBar, axios));