import React, { Component } from 'react';
import { connect } from 'react-redux';

import {GET_STREAM} from '../../Actions/index';



class StreamShow extends Component {
   
    componentDidMount() {
        this.props.GET_STREAM(this.props.match.params.id);
    }

  

    prerender = () => {     
            if(this.props.gstate.auth.authCond === true && this.props.gstate.streams[this.props.match.params.id] ){              
                    return (
                        <>
                            <div className="h5 text-success text-center bg-light p-2  m-1">
                            Show Stream
                            </div>
                            <div className="bg-light p-3 border m-2 d-relative">
                                <div className="text-success">Title : <span className="text-dark lead">{this.props.gstate.streams[this.props.match.params.id].title}</span></div>
                                <div className="text-success">Discription : <span className="text-dark lead">{this.props.gstate.streams[this.props.match.params.id].discription}</span></div>
                            </div>
                        </>
                    ); 
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

export default connect(mapStateToProps, { GET_STREAM }) (StreamShow);
