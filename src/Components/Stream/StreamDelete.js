import React, { Component } from 'react';
import { connect } from 'react-redux';
import {GET_STREAM, DELETE_STREAM} from '../../Actions/index'

// import BasicModal from './BasicModal';
import PortalModal from '../../PortalModal';

class StreamDelete extends Component {   
    componentDidMount() {
        this.props.GET_STREAM(this.props.match.params.id);
    }

    clickHandler = () => {
        this.props.DELETE_STREAM(this.props.match.params.id);
    }

    prerender = () => {     
            if(this.props.gstate.auth.authCond === true && this.props.gstate.streams[this.props.match.params.id] ){
                const currentUserId = this.props.gstate.auth.userId;
                const streamerId = this.props.gstate.streams[this.props.match.params.id].userId;
                if(currentUserId === streamerId) {
                    return (
                        <div className="lead text-success text-center bg-light p-3 border m-2 d-relative">
                            {/* <div>Delete Stream :  <span className="text-info h5">{this.props.gstate.streams[this.props.match.params.id].title}</span></div> */}
                            {/* <div><button onClick={this.clickHandler} className="btn btn-danger m-2"> Delete Stream</button></div> */}
                            <PortalModal
                             clickHandler={this.clickHandler}
                             title ={this.props.gstate.streams[this.props.match.params.id].title}
                             />
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
    render() {
        return this.prerender();
        
        
    }
}

const mapStateToProps = (state) => {
    return {gstate : state};
};

export default connect(mapStateToProps, {DELETE_STREAM,GET_STREAM }) (StreamDelete);
