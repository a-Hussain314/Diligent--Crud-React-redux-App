import React, { Component } from 'react';
import { connect } from 'react-redux';
import {EDIT_STREAM, GET_STREAM} from '../../Actions/index';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
    componentDidMount() {
        this.props.GET_STREAM(this.props.match.params.id);
    };

    onSubmit = (formValues) => {
        var streamId = this.props.match.params.id;
        this.props.EDIT_STREAM(formValues, streamId);
    }
    
    render() {
        if(this.props.gstate.auth.authCond === true && this.props.gstate.streams[this.props.match.params.id] ){
            const currentUserId = this.props.gstate.auth.userId;
            const streamerId = this.props.gstate.streams[this.props.match.params.id].userId;
            if(currentUserId === streamerId) {
                var myInitialValues = this.props.gstate.streams[this.props.match.params.id];
                return (
                    <div>
                    <div className="h5 text-success text-center bg-light p-2  m-1">
                        Stream Edit
                    </div>
                        <StreamForm initialValues={myInitialValues} onSubmit={this.onSubmit} />
                    </div>
                );
            }
            else {
                return (
                    <div className="text-secondary text-center bg-light p-3 border m-2">Access Denied : "avaialbe to stream admin only"</div>
                )
            }
        }
        else if (this.props.gstate.auth.authCond === true && !this.props.gstate.streams[this.props.match.params.id]) {
            return (
                <div className="text-secondary text-center bg-light p-3 border m-2">
                Stream Not Found
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
export default connect(mapStateToProps,{EDIT_STREAM, GET_STREAM}) ( StreamEdit );
