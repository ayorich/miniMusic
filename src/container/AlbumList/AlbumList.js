import React, {Component} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import './AlbumList.css';

class AlbumList extends Component{
        componentDidMount(){

            if (this.props.history.location.pathname !== '/') {
                this.props.onhideSearchbar()
            }
            this.props.onfetchAlbum(this.props.token, this.props.userId);
        }
    render(){
        console.log(this.props.savedAlbums)
        
        let albums = this.props.savedAlbums.map(albumElement => (
            
            <div className="card" key={albumElement.id}>
                <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                        &nbsp;
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span">{albumElement.album.title}</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>{albumElement.album.artist.name}</li>
                            <li>{albumElement.album.nb_tracks} tracks</li>
                            <li>{albumElement.album.duration}</li>
                            <li>release on {albumElement.album.release_date} </li>
                        </ul>
                    </div>

                </div>
                <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">$497</p>
                        </div>
                        <a href="#popup" className="btn btn--white">Book now!</a>
                    </div>
                </div>
            </div>
        ));
        return(
            <div className="albumBuilder">
                {this.props.savedAlbums? albums : null}
                 
            </div>

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