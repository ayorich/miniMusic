import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

class ErrorHandler  extends Component {
        state = {
            error: null
        }
        componentDidMount(){
            this.setState({
                error: this.props.error
            })
        }
        componentWillUnmount(){
            this.setState({
                error: null
            })
        }
    componentDidUpdate(prevProps, prevState){
        if (prevProps.error !== this.props.error){
            this.setState({
                error: this.props.error
            })
        }
    }
        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            // console.log(this.state.error)

            return (
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
            );
        }
    }


export default ErrorHandler;