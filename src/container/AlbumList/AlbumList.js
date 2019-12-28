import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class AlbumList extends Component{
        componentDidMount(){
            if (this.props.history.location.pathname !== '/') {
                this.props.onhideSearchbar()
            }
        }
    render(){
        

        return(
            
            <p>am album list</p>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onhideSearchbar: () => dispatch(actions.hideSearchbar())
    };
};

export default connect(null, mapDispatchToProps)(AlbumList);