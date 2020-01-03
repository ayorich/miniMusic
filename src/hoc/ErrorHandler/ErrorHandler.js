import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

class ErrorHandler  extends Component {
        state = {
            error: this.props.error
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }
        render() {
            console.log(this.state.error)

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