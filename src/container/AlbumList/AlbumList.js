import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';


class AlbumList extends Component{
        componentDidMount(){

            if (this.props.history.location.pathname !== '/') {
                this.props.onhideSearchbar()
            }
            this.props.onfetchAlbum(this.props.token, this.props.userId);
        }
    render(){
        console.log(this.props.savedAlbums)

        return(
            <React.Fragment>
                {/* {window.location.reload(false)} */}
            <p>am album list</p>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        savedAlbums: state.savedAlbums.albums

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onhideSearchbar: () => dispatch(actions.hideSearchbar()),
        onfetchAlbum: (token, userId) => dispatch(actions.fetchAlbum(token, userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);