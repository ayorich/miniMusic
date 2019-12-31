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
        finalTime = (time)=>{

            // const time = props.selectSongData.duration;
            const minutes = Math.floor(time / 60);
            const seconds = time - minutes * 60;
            function str_pad_left(string, pad, length) {
                return (new Array(length + 1).join(pad) + string).slice(-length);
            }
            const finalTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
            return finalTime;
        }
    render(){
        console.log(this.props.savedAlbums)
        

        let albums = this.props.savedAlbums.map(albumElement => (
            
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
                            <li>{this.finalTime(albumElement.album.duration)} mins</li>
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