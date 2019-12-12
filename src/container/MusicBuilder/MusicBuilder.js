import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';



class MusicBuilder extends Component{
    

    render() {
    
        return (
            <React.Fragment>
                <Header />
                <Sidebar/>
            </React.Fragment>
                
            
        );
    }
}
export default MusicBuilder;