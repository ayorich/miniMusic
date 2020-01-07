import React, {Component} from 'react';
import { connect } from 'react-redux';

import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import { timeFormatter } from '../../shared/utility';

import './AlbumList.css';


class AlbumList extends Component{
    
         componentDidMount(){
            if (this.props.history.location.pathname !== '/') {
                this.props.onhideSearchbar()
            }
             this.props.onfetchAlbum(this.props.token, this.props.userId);
            this.setState({ error:this.props.error})
        }

    render(){
        const albumSort = this.props.fetchAlbums;
        albumSort.sort((a, b) => {
            return a.time - b.time;
        }).reverse()

        const albums = albumSort.map(albumElement => (
            <div className="card" key={albumElement.id}>
                <div className="card__side card__side--front">
                    <div className="card__picture ">
                        <img src={albumElement.album.cover_big} alt={albumElement.album.title} className="music__img"/>
                    </div>
                    <h4 className="card__heading">
                        <span className="card__heading-span">{albumElement.album.title}</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>{albumElement.album.artist.name}</li>
                            <li>{albumElement.album.nb_tracks} tracks</li>
                            <li>{timeFormatter(albumElement.album.duration)} mins</li>
                        </ul>
                    </div>

                </div>
                <div className="card__side card__side--back">
                    <div className="card__cta">
                        <div className="card__text-box">
                            <p className="card__text-1">Listen to</p>
                            <p className="card__text-2">full album</p>
                        </div>
                        <a href={albumElement.album.link} target='_blank' rel="noopener noreferrer" className="card__btn card__btn--white">Deezer</a>
                    </div>
                </div>
            </div>
        ));
        let albumGrid = <div className="albumGrid">
                            {this.props.fetchAlbums ? albums : null}
                        </div>

        if (this.props.loading) {
            albumGrid = <div className="albumSpinnercover">
                            <Spinner/>
                        </div>
        }
        return(
            <div className="albumBuilder">
                <ErrorHandler error={this.props.error}/>
                {this.props.fetchAlbums ? albumGrid : null}
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        fetchAlbums: state.fetchAlbums.albums,
        loading: state.fetchAlbums.loading,
        error: state.fetchAlbums.error,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onhideSearchbar: () => dispatch(actions.hideSearchbar()),
        onfetchAlbum: (token, userId) => dispatch(actions.fetchAlbum(token, userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);











//WITHERRORINTERCEPTOR REFUSE TO WORK ON MOUNTING FOR ALBUMLIST ONLY , SO TO BE CHECKED LATER WHY
//AND ALREADY SOLVED BY ADDING ERRORHANDLER WITHIN DIDUPDATEDCOMPONENT ---ALREADY SOLVED 