import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CREATE_STREAM} from '../../Actions/index';
import StreamForm from './StreamForm';

class StreamCreate extends Component {

    onSubmit = (formValues) => {
        formValues.userId = this.props.gstate.auth.userId;
        formValues.userName = this.props.gstate.auth.userName;
        this.props.CREATE_STREAM(formValues);
    }
    
    render() {
        if(this.props.gstate.auth.authCond === true){
            return (
                <div>
                <div className="display-4 text-success text-center bg-light p-2 m-1">
                    Create a Stream 
                </div>
                    <StreamForm  onSubmit={this.onSubmit} />
                </div>
            );
        }
        else if(this.props.gstate.auth.authCond === false ){
            return (
                <div className="text-secondary text-center bg-light p-3 border m-2">
                Sign in to Access this Page
                </div>
            ); 
        }
        else {
        return (
            <div className="text-center">
                    <div className="spinner-border text-info my-4" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
               </div>
        ); 
    }
    }
}

const mapStateToProps = (state) => {
    return {gstate : state}
}
export default connect(mapStateToProps,{CREATE_STREAM}) ( StreamCreate );
