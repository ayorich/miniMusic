// shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps)
    //     console.log(nextState)
    //     return true
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     return prevProps;
    // }
    // componentDidUpdate(prevProps, prevState, snapshot){
    //     console.log(prevProps)
    //     console.log(prevState)
    //     console.log(snapshot)
    //     console.log(this.props.albumId)
    //     // if (this.props.albumId !== this.prevProps)
    //     // this.props.onalbumInit(); // to access the album data in local storage on page refresh/signin

    // }
  // static getDerivedStateFromProps(nextProps, prevState){
    //     //COMPARING ALBUMID BEFORE AND WHEN MOUNTING AGAIN TO REDUCE REPEATED API QUERY 
    //     const albumId = parseInt(localStorage.getItem('albumID'))
    //     console.log('getDerivedstate')

    //     if(nextProps.albumId !== albumId){
    //         console.log('true')
    //         return{
    //             updateME: true //SHOULD QUERY API

    //         }
    //     } else {
    //         console.log('false')
    //         return{
    //             updateME:false // SHOULDNOT QUERY API 
    //         }
    //     }
    // }


// import React from 'react';
// import Style from 'style-it';

// class Intro extends React.Component {
//     render() {
//         return (
//             <Style>
//                 {`
        
//         #heart:before,
        
       
//      `}

//             <div id="heart" />
//             </Style>
//         )
// }
// }

// export default Intro;