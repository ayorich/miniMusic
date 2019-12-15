import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import MusicDetails from '../../components/MusicDetails/MusicDetails';

// import './MusicBuilder.css';

class MusicBuilder extends Component{

    render() {
    
        return (
            <React.Fragment>
                <Header />
                <Sidebar />
                <MusicDetails/>
            </React.Fragment>
                
            
        );
    }
}
export default MusicBuilder;